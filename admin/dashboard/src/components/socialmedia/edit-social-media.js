import React, { useState } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import "react-quill/dist/quill.snow.css" // ES6
import LeftNavbar from "../navbar/left-navbar"
import TopNavbar from "../navbar/top-navbar"
import PageFooter from "../footer"
import three_dots from "../../assets/img/three-dots.svg"
// ===== Query and Mutation Section =====
import { GET_SOCIAL_MEDIA, GET_ONE_SOCIAL_MEDIA } from "../../graphql/query"
import { UPDATE_SOCIAL_MEDIA } from "../../graphql/mutation"
import { Form, Input, Button, Row, Col, Upload, Layout, message } from "antd"

const FormItem = Form.Item
const { Content } = Layout

function EditSocialMedia(props) {
  const { getFieldDecorator } = props.form

  // ===== State Management =====
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(null)

  //   ===== Global Data =====
  const { loading: socialMediaLoading, data: socialMediaData } = useQuery(
    GET_ONE_SOCIAL_MEDIA,
    {
      variables: { id: window.location.pathname.split("/")[4] }
    }
  )

  const { refetch: refechSocialMedia } = useQuery(GET_SOCIAL_MEDIA)
  const [updateSocialMedia] = useMutation(UPDATE_SOCIAL_MEDIA)

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
        console.log(values)

        updateSocialMedia({
          variables: { id: window.location.pathname.split("/")[4], ...values }
        })
          .then(async () => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 3000)
            props.form.resetFields()
            refechSocialMedia()
            await message.success("Social Media updated successfully.", 3)
            await props.history.push("/admin/social-media")
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  }

  if (socialMediaLoading) {
    return "Loading..."
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
                      {getFieldDecorator("name", {
                        rules: [
                          {
                            required: true,
                            message: "The name is required"
                          }
                        ],
                        initialValue: socialMediaData.oneSocialMedia.name
                      })(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="Link: ">
                      {getFieldDecorator("link", {
                        rules: [
                          {
                            required: true,
                            message: "Link is required"
                          }
                        ],
                        initialValue: socialMediaData.oneSocialMedia.link
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

                  <Col span={8}>
                    {/* ======= Drag and Drop Image ======= */}

                    <FormItem label="Photo">
                      <Upload.Dragger {...uploadImage}>
                        {image === null ? (
                          <img
                            src={`${"https://admin.koompi.com" +
                              socialMediaData.oneSocialMedia.logo}`}
                            alt="avatar"
                            style={{ width: "100%" }}
                          />
                        ) : (
                          <img
                            src={`${"https://admin.koompi.com/public/uploads/" +
                              image}`}
                            alt="avatar"
                            style={{ width: "100%" }}
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
                          initialValue:
                            image === null
                              ? socialMediaData.oneSocialMedia.logo
                              : "/public/uploads/" + image
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

export default Form.create()(EditSocialMedia)
