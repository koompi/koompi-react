import React, { useState, useContext } from "react"
import LeftNavbar from "../navbar/left-navbar"
import TopNavbar from "../navbar/top-navbar"
import PageFooter from "../footer"
import { useMutation } from "@apollo/react-hooks"

import { UserContext } from "../../context/userContext"
import three_dots from "../../assets/img/three-dots.svg"

// ===== Import EditorJS =====
import EditorJs from "react-editor-js"
import { EDITOR_JS_TOOLS } from "./tools"

// ===== Antd Section =====
import { Form, Icon, Input, Button, Row, Col, Layout, message } from "antd"

import { CREATE_LEGAL } from "../../graphql/mutation"

const FormItem = Form.Item
const { Content } = Layout

function Legal(props) {
  const { getFieldDecorator } = props.form
  const [createLegal] = useMutation(CREATE_LEGAL)

  // ===== User Context Section =====
  const userData = useContext(UserContext)

  // ===== State Management =====
  const [loading, setLoading] = useState(false)
  const [description] = useState("")

  // ===== EditorJS =====
  const editorJsRef = React.useRef(null)
  const handleSubmit = React.useCallback(async () => {
    const savedData = await editorJsRef.current.save()
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        createLegal({
          variables: {
            ...values,
            description: JSON.stringify(savedData)
          }
        })
          .then(async () => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 3000)
            props.form.resetFields()
            await message.success("Legal created successfully.", 3)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* =========Left Navbar ======= */}
      <LeftNavbar />
      <Layout>
        {/* =========Top Navbar ======= */}
        <TopNavbar />

        <Content style={{ margin: "20px 16px" }}>
          {/* ======= Display content ====== */}
          <div className="koompi container">
            <div className="background_container">
              <h1 className="title_new_post">Legal</h1>
              <Form className="login-form">
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <FormItem>
                      {getFieldDecorator("title", {
                        rules: [
                          {
                            required: true,
                            message: "The title is required"
                          }
                        ]
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="font-size"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          size="large"
                          placeholder="Title"
                        />
                      )}
                    </FormItem>
                    <FormItem label="Description: ">
                      {getFieldDecorator("description", {
                        initialValue: description
                      })(
                        <div>
                          <EditorJs
                            instanceRef={(instance) =>
                              (editorJsRef.current = instance)
                            }
                            tools={EDITOR_JS_TOOLS}
                            placeholder="Let's write an awesome story!"
                          />
                        </div>
                      )}
                    </FormItem>

                    <FormItem>
                      {getFieldDecorator("created_by", {
                        initialValue: userData.user.fullname,
                        rules: [
                          {
                            required: true,
                            message: "User name  is required"
                          }
                        ]
                      })(
                        <Input
                          prefix={
                            <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                          }
                          size="large"
                          disabled
                        />
                      )}
                    </FormItem>
                  </Col>

                  <Col span={24}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      onClick={handleSubmit}
                      // disabled=
                    >
                      {loading ? (
                        <img src={three_dots} alt="btn-loading" height="10" />
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  )
}

export default Form.create()(Legal)
