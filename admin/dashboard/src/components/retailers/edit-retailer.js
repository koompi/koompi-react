import React, { useState } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import "react-quill/dist/quill.snow.css" // ES6
import LeftNavbar from "../navbar/left-navbar"
import TopNavbar from "../navbar/top-navbar"
import PageFooter from "../footer"
import three_dots from "../../assets/img/three-dots.svg"
// ===== Query and Mutation Section =====
import { GET_RETAILERS, GET_RETAILER } from "../../graphql/query"
import { UPDATE_RETAILER } from "../../graphql/mutation"
import { Form, Input, Button, Row, Col, Upload, Layout, message } from "antd"

const FormItem = Form.Item
const { Content } = Layout

function EditRetailer(props) {
  const { getFieldDecorator } = props.form

  // ===== State Management =====
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(null)

  //   ===== Global Data =====
  const { loading: postLoading, data: retailerData } = useQuery(GET_RETAILER, {
    variables: { id: window.location.pathname.split("/")[4] },
  })

  const { refetch: refechRetailer } = useQuery(GET_RETAILERS)
  const [updateRetailer] = useMutation(UPDATE_RETAILER)

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

        updateRetailer({
          variables: { id: window.location.pathname.split("/")[4], ...values },
        })
          .then(async (res) => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 3000)
            props.form.resetFields()
            await message.success(res.data.update_retailer.message, 3)
            refechRetailer()
            await props.history.push("/admin/retailers")
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  }

  if (postLoading) {
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
              <h1 className="title_new_post">Update Retailer</h1>

              <Form className="login-form" onSubmit={handleSubmit}>
                <Row gutter={[24, 8]}>
                  <Col span={16}>
                    <FormItem label="Full Name">
                      {getFieldDecorator("name", {
                        rules: [
                          {
                            required: true,
                            message: "The name is required",
                          },
                        ],
                        initialValue: retailerData.retailer.name,
                      })(<Input size="large" />)}
                    </FormItem>
                    <FormItem label="Email">
                      {getFieldDecorator("email", {
                        initialValue: retailerData.retailer.email,
                      })(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="Phone Number">
                      {getFieldDecorator("phoneNumber", {
                        initialValue: retailerData.retailer.phoneNumber,
                      })(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="Link Location: ">
                      {getFieldDecorator("location", {
                        rules: [
                          {
                            required: true,
                            message: "Link Location is required",
                          },
                        ],
                        initialValue: retailerData.retailer.location,
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
                            src={`${
                              "https://admin.koompi.com" + retailerData.retailer.logo
                            }`}
                            alt="avatar"
                            style={{ width: "100%" }}
                          />
                        ) : (
                          <img
                            src={`${
                              "https://admin.koompi.com/public/uploads/" + image
                            }`}
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
                              message: "Logo is required",
                            },
                          ],
                          initialValue:
                            image === null
                              ? retailerData.retailer.logo
                              : "/public/uploads/" + image,
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

export default Form.create()(EditRetailer)
