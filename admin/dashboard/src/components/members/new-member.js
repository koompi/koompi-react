import React, { useState, useContext } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import "react-quill/dist/quill.snow.css" // ES6
import LeftNavbar from "../navbar/left-navbar"
import TopNavbar from "../navbar/top-navbar"
import PageFooter from "../footer"
import { UserContext } from "../../context/userContext"
import three_dots from "../../assets/img/three-dots.svg"

// ===== Query and Mutation Section =====
import { CREATE_MEMBER } from "../../graphql/mutation"
import { GET_MEMBERS } from "../../graphql/query"

import { Form, Input, Button, Row, Col, Upload, Select, Layout, message } from "antd"

const FormItem = Form.Item
const { Content } = Layout
const { Option } = Select

function NewMember(props) {
  const { getFieldDecorator } = props.form

  // ===== State Management =====
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState("")

  // ===== User Context Section =====
  const userData = useContext(UserContext)
  const { refetch: memberRefetch } = useQuery(GET_MEMBERS)
  const [createMember] = useMutation(CREATE_MEMBER)

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
        createMember({ variables: { ...values } })
          .then(async (res) => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 3000)
            memberRefetch()
            props.form.resetFields()
            await message.success(res.data.add_member.message)
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
              <h1 className="title_new_post">Add Member</h1>

              <Form className="login-form" onSubmit={handleSubmit}>
                <Row gutter={[24, 8]}>
                  <Col span={16}>
                    <FormItem label="Full Name">
                      {getFieldDecorator("fullname", {
                        rules: [
                          {
                            required: true,
                            message: "The fullname is required",
                          },
                        ],
                      })(<Input size="large" />)}
                    </FormItem>

                    {/* ======= Deparment Sections ======= */}
                    <Form.Item label="Department">
                      {getFieldDecorator("department", {
                        rules: [
                          {
                            required: true,
                            message: "Please select member department!",
                          },
                        ],
                        initialValue: "software-team",
                      })(
                        <Select size="large">
                          <Option value="business-development">
                            Business Development
                          </Option>
                          <Option value="hardware-team">KOOMPI Hardware Team</Option>
                          <Option value="academy">KOOMPI ACADEMY</Option>
                          <Option value="sales-and-supplier-relation">
                            Sales and Supplier Relation
                          </Option>
                          <Option value="communication-and-marketing">
                            Communication and Marketing
                          </Option>
                          <Option value="software-team">Software Teams</Option>
                        </Select>
                      )}
                    </Form.Item>

                    <FormItem label="Postion: ">
                      {getFieldDecorator("position", {
                        rules: [
                          {
                            required: true,
                            message: "Position is required",
                          },
                        ],
                      })(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="Phone Number: ">
                      {getFieldDecorator("phoneNumber", {
                        rules: [
                          {
                            required: true,
                            message: "Phone Number is required",
                          },
                        ],
                      })(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="Email: ">
                      {getFieldDecorator("email", {
                        rules: [
                          {
                            type: "email",
                            message: "The input is not valid E-mail!",
                          },
                          {
                            required: true,
                            message: "Email is required",
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

                    <FormItem label="Photo">
                      <Upload.Dragger {...uploadImage}>
                        {image ? (
                          <img
                            src={`${
                              "https://admin.koompi.com/public/uploads/" + `${image}`
                            }`}
                            alt="avatar"
                            style={{ width: "250px", height: "250px" }}
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
                        {getFieldDecorator("photo", {
                          rules: [
                            {
                              required: true,
                              message: "Photo is required",
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

export default Form.create()(NewMember)
