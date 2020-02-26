import React, { useState, useContext } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import LeftNavbar from "../navbar/left-navbar"
import TopNavbar from "../navbar/top-navbar"
import PageFooter from "../footer"
import { UserContext } from "../../context/userContext"

import three_dots from "../../assets/img/three-dots.svg"

// ===== Import EditorJS =====
import EditorJs from "react-editor-js"
import { EDITOR_JS_TOOLS } from "./tools"

// ===== Query and Mutation Section =====
import { GET_SOFTWARES } from "../../graphql/query"
import { ADD_SOFTWARE } from "../../graphql/mutation"

import { Form, Input, Button, Row, Col, Upload, Layout, message } from "antd"

const FormItem = Form.Item
const { Content } = Layout

function AddSoftware(props) {
  const { getFieldDecorator } = props.form

  // ===== State Management =====
  const [loading, setLoading] = useState(false)
  const [logo, setLogo] = useState("")
  const [image, setImage] = useState("")

  // ===== User Context Section =====
  const userData = useContext(UserContext)
  const { refetch } = useQuery(GET_SOFTWARES)
  const [createSoftware] = useMutation(ADD_SOFTWARE)

  const uploadImage = {
    name: "file",
    multiple: false,
    action: "https://admin.koompi.com/upload/image",
    defaultFileList: image,
    onChange(info) {
      const { status } = info.file
      if (status !== "uploading") {
        console.log(info.file, info.fileList)
      }
      if (status === "done") {
        setImage(info.file.name.replace(/\s+/g, "-").toLowerCase())
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  const uploadLogo = {
    name: "file",
    multiple: false,
    action: "https://admin.koompi.com/upload/image",
    defaultFileList: image,
    onChange(info) {
      const { status } = info.file
      if (status !== "uploading") {
        console.log(info.file, info.fileList)
      }
      if (status === "done") {
        setLogo(info.file.name.replace(/\s+/g, "-").toLowerCase())
        message.success(`${info.file.name} logo uploaded successfully.`)
      } else if (status === "error") {
        message.error(`${info.file.name} logo upload failed.`)
      }
    }
  }

  // ===== EditorJS =====
  const editorJsRef = React.useRef(null)
  const handleSubmit = React.useCallback(async () => {
    const savedData = await editorJsRef.current.save()
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        createSoftware({
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
            refetch()
            props.form.resetFields()
            await message.success("Software added successfully.", 3)
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
              <h1 className="title_new_post">Add Software</h1>

              <Form className="login-form">
                <Row gutter={[24, 8]}>
                  <Col span={16}>
                    <FormItem label="Title">
                      {getFieldDecorator("title", {
                        rules: [
                          {
                            required: true,
                            message: "The title is required"
                          }
                        ]
                      })(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="Created By: " style={{ display: "none" }}>
                      {getFieldDecorator("created_by", {
                        rules: [
                          {
                            required: true,
                            message: "The user name is required"
                          }
                        ],
                        initialValue: userData.user.fullname
                      })(<Input placeholder="SAN Vuthy" size="large" />)}
                    </FormItem>

                    <FormItem label="Description: ">
                      <EditorJs
                        instanceRef={(instance) => (editorJsRef.current = instance)}
                        tools={EDITOR_JS_TOOLS}
                        placeholder="Let's write an awesome story!"
                      />
                    </FormItem>
                  </Col>

                  <Col span={8}>
                    {/* ======= Drag and Drop Image ======= */}

                    <FormItem label="Logo">
                      <Upload.Dragger {...uploadLogo}>
                        {logo ? (
                          <img
                            src={`${"https://admin.koompi.com/public/uploads/" +
                              `${logo}`}`}
                            alt="avatar"
                            style={{ width: "100%" }}
                          />
                        ) : (
                          <img
                            src="/images/no-image.jpg"
                            alt="koompi"
                            width="100%"
                          />
                        )}
                      </Upload.Dragger>
                      <div style={{ display: "none" }}>
                        {getFieldDecorator("logo", {
                          rules: [
                            {
                              required: true,
                              message: "Logo is required"
                            }
                          ],
                          initialValue: "/public/uploads/" + logo
                        })(<Input size="large" />)}
                      </div>
                    </FormItem>

                    <FormItem label="Image">
                      <Upload.Dragger {...uploadImage}>
                        {image ? (
                          <img
                            src={`${"https://admin.koompi.com/public/uploads/" +
                              `${image}`}`}
                            alt="avatar"
                            style={{ width: "100%" }}
                          />
                        ) : (
                          <img
                            src="/images/no-image.jpg"
                            alt="koompi"
                            width="100%"
                          />
                        )}
                      </Upload.Dragger>
                      <div style={{ display: "none" }}>
                        {getFieldDecorator("image", {
                          rules: [
                            {
                              required: true,
                              message: "Image is required"
                            }
                          ],
                          initialValue: "/public/uploads/" + image
                        })(<Input size="large" />)}
                      </div>
                    </FormItem>

                    <div style={{ float: "right" }}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        className="btnSubmit"
                        disabled={loading ? true : false}
                        onClick={handleSubmit}
                      >
                        {loading ? (
                          <img src={three_dots} alt="btn-loading" height="10" />
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </div>
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

export default Form.create()(AddSoftware)
