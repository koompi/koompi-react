import React, { useState, useContext } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import "react-quill/dist/quill.snow.css" // ES6
import LeftNavbar from "../navbar/left-navbar"
import TopNavbar from "../navbar/top-navbar"
import PageFooter from "../footer"
import { UserContext } from "../../context/userContext"
import three_dots from "../../assets/img/three-dots.svg"

// ===== Query and Mutation Section =====
import { ADD_AMA } from "../../graphql/mutation"
import { GET_AMAS } from "../../graphql/query"

import { Form, Input, Button, Row, Col, Upload, Select, Layout, message } from "antd"

const FormItem = Form.Item
const { Content } = Layout
const { Option } = Select
const { TextArea } = Input

function AddAMA(props) {
  const { getFieldDecorator } = props.form

  // ===== State Management =====
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState("")

  // ===== User Context Section =====
  const userData = useContext(UserContext)
  const { refetch } = useQuery(GET_AMAS)
  const [createAMA] = useMutation(ADD_AMA)

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
      console.log(values)
      if (!err) {
        createAMA({ variables: { ...values, created_at: new Date() } })
          .then(async (res) => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 3000)
            refetch()
            props.form.resetFields()
            await message.success(res.data.create_ama.message)
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
              <h1 className="title_new_post">Add AMA</h1>

              <Form className="login-form" onSubmit={handleSubmit}>
                <Row gutter={[24, 8]}>
                  <Col span={16}>
                    <FormItem label="Speaker">
                      {getFieldDecorator("name", {
                        rules: [
                          {
                            required: true,
                            message: "The name is required",
                          },
                        ],
                      })(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="Title">
                      {getFieldDecorator("title", {
                        rules: [
                          {
                            required: true,
                            message: "The title is required",
                          },
                        ],
                      })(<Input size="large" />)}
                    </FormItem>
                    <FormItem label="Date">
                      {getFieldDecorator("date", {
                        rules: [
                          {
                            required: true,
                            message: "The date is required",
                          },
                        ],
                      })(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="URL">
                      {getFieldDecorator("url", {
                        rules: [
                          {
                            required: true,
                            message: "The url is required",
                          },
                        ],
                      })(<Input size="large" />)}
                    </FormItem>

                    {/* ======= Deparment Sections ======= */}
                    <Form.Item label="Category">
                      {getFieldDecorator("category", {
                        initialValue: "koompi-ama",
                      })(
                        <Select size="large">
                          <Option value="koompi-ama">KOOMPI AMA</Option>
                          <Option value="user-ama">USER AMA</Option>
                        </Select>
                      )}
                    </Form.Item>

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
                    <FormItem label="Description">
                      {getFieldDecorator("desc", {
                        rules: [
                          {
                            required: true,
                            message: "The description is required",
                          },
                        ],
                      })(<TextArea rows={4} />)}
                    </FormItem>

                    <FormItem label="Photo">
                      <Upload.Dragger {...uploadImage}>
                        {image ? (
                          <img
                            src={`${
                              "https://admin.koompi.com/public/uploads/" + `${image}`
                            }`}
                            alt="avatar"
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
                              message: "Photo is required",
                            },
                          ],
                          initialValue: `/public/uploads/${image}`,
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

export default Form.create()(AddAMA)
