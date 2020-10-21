import React, { useState, useContext } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import "react-quill/dist/quill.snow.css" // ES6
import LeftNavbar from "../navbar/left-navbar"
import TopNavbar from "../navbar/top-navbar"
import PageFooter from "../footer"
import { UserContext } from "../../context/userContext"
import three_dots from "../../assets/img/three-dots.svg"

// ===== Query and Mutation Section =====
import { CREATE_RETAILER } from "../../graphql/mutation"
import { GET_RETAILERS } from "../../graphql/query"

import { Form, Input, Button, Row, Col, Upload, Layout, message } from "antd"

const FormItem = Form.Item
const { Content } = Layout

function NewRetailer(props) {
  const { getFieldDecorator } = props.form

  // ===== State Management =====
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState("")

  // ===== User Context Section =====
  const userData = useContext(UserContext)
  const { refetch: refetchRetailer } = useQuery(GET_RETAILERS)
  const [createRetailer] = useMutation(CREATE_RETAILER)

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
    },
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values)

        createRetailer({ variables: { ...values } })
          .then(async (res) => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 3000)
            refetchRetailer()
            props.form.resetFields()
            await message.success(res.data.add_retailer.message, 3)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  }

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
              <h1 className="title_new_post">New Retailer</h1>

              <Form className="login-form" onSubmit={handleSubmit}>
                <Row gutter={[24, 8]}>
                  <Col span={16}>
                    <FormItem label="Name">
                      {getFieldDecorator("name", {
                        rules: [
                          {
                            required: true,
                            message: "The name is required",
                          },
                        ],
                      })(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="Email">
                      {getFieldDecorator("email", {})(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="Phone Number">
                      {getFieldDecorator("phoneNumber", {})(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="Link Location: ">
                      {getFieldDecorator("location", {
                        rules: [
                          {
                            required: true,
                            message: "Link Location is required",
                          },
                        ],
                      })(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="Created By: " style={{ display: "none" }}>
                      {getFieldDecorator("created_by", {
                        rules: [
                          {
                            required: true,
                            message: "The user name is required",
                          },
                        ],
                        initialValue: userData.user.fullname,
                      })(<Input placeholder="SAN Vuthy" size="large" />)}
                    </FormItem>

                    <div>
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        className="btnSubmit"
                        disabled={loading ? true : false}
                      >
                        {loading ? (
                          <img src={three_dots} alt="btn-loading" height="10" />
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </div>
                  </Col>

                  <Col span={8}>
                    {/* ======= Drag and Drop Image ======= */}

                    <FormItem label="Logo">
                      <Upload.Dragger {...uploadImage}>
                        {image ? (
                          <img
                            src={`${
                              "https://admin.koompi.com/public/uploads/" + `${image}`
                            }`}
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
                              message: "logo is required",
                            },
                          ],
                          initialValue: "/public/uploads/" + image,
                        })(<Input size="large" />)}
                      </div>
                    </FormItem>
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

export default Form.create()(NewRetailer)
