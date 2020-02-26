import React, { useState, useContext } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import "react-quill/dist/quill.snow.css" // ES6
import LeftNavbar from "./navbar/left-navbar"
import TopNavbar from "./navbar/top-navbar"
import PageFooter from "./footer"
import { UserContext } from "../context/userContext"
import three_dots from "../assets/img/three-dots.svg"

// ===== Query and Mutation Section =====
import { UPDATE_USER } from "../graphql/mutation"
import { GET_USER } from "../graphql/query"

import { Form, Input, Button, Row, Col, Upload, Layout, message } from "antd"

const FormItem = Form.Item
const { Content } = Layout

function Settings(props) {
  const { getFieldDecorator } = props.form

  // ===== User Context Section =====
  const userData = useContext(UserContext)

  //   ===== Global Data =====
  const { loading: userLoading, data: userQuery, refetch } = useQuery(GET_USER, {
    variables: { email: userData.user.email }
  })

  const [updateUser] = useMutation(UPDATE_USER)

  // ===== State Management =====
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(null)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { fullname, avatar, oldPassword, newPassword } = values

        updateUser({
          variables: {
            email: userQuery.user.email,
            fullname,
            avatar,
            oldPassword,
            newPassword
          }
        })
          .then(async () => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 3000)
            props.form.resetFields()
            refetch()
            await message.success("User updated successfully.", 3)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  }

  if (userLoading) {
    return "Loading ..."
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
              <h1 className="title_new_post">User Settings</h1>

              <Form className="login-form" onSubmit={handleSubmit}>
                <Row gutter={[24, 8]}>
                  <Col span={8}>
                    {/* ======= Drag and Drop Image ======= */}

                    <FormItem label="Photo">
                      <Upload.Dragger {...uploadImage}>
                        {image === null ? (
                          <img
                            src={`${"https://admin.koompi.com" +
                              userQuery.user.avatar}`}
                            alt="avatar"
                            style={{ height: "133.5px", width: "133.5px" }}
                          />
                        ) : (
                          <img
                            src={`${"https://admin.koompi.com/public/uploads/" +
                              image}`}
                            alt="avatar"
                            style={{ height: "133.5px", width: "133.5px" }}
                          />
                        )}
                      </Upload.Dragger>
                      <div style={{ display: "none" }}>
                        {getFieldDecorator("avatar", {
                          rules: [
                            {
                              required: true,
                              message: "Avatar is required"
                            }
                          ],
                          initialValue:
                            image === null
                              ? userQuery.user.avatar
                              : "/public/uploads/" + image
                        })(<Input size="large" />)}
                      </div>
                    </FormItem>

                    <FormItem label="Full Name">
                      {getFieldDecorator("fullname", {
                        rules: [
                          {
                            required: true,
                            message: "FullName is required"
                          }
                        ],
                        initialValue: userQuery.user.fullname
                      })(<Input size="large" />)}
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
                          "Update"
                        )}
                      </Button>
                    </div>
                  </Col>

                  <Col span={16}>
                    <FormItem label="Old Password">
                      {getFieldDecorator("oldPassword")(
                        <Input size="large" type="password" />
                      )}
                    </FormItem>

                    <FormItem label="New Password">
                      {getFieldDecorator("newPassword")(
                        <Input size="large" type="password" />
                      )}
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

export default Form.create()(Settings)
