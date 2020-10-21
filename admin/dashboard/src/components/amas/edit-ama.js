import React, { useState, useContext } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import "react-quill/dist/quill.snow.css" // ES6
import LeftNavbar from "../navbar/left-navbar"
import TopNavbar from "../navbar/top-navbar"
import PageFooter from "../footer"
import { UserContext } from "../../context/userContext"
import three_dots from "../../assets/img/three-dots.svg"
// ===== Query and Mutation Section =====
import { GET_AMAS, GET_AMA } from "../../graphql/query"
import { UPDATE_AMA } from "../../graphql/mutation"
import { Form, Input, Button, Row, Col, Upload, Select, Layout, message } from "antd"

const FormItem = Form.Item
const { Content } = Layout
const { Option } = Select
const { TextArea } = Input

function EditAMA(props) {
  const { getFieldDecorator } = props.form

  // ===== State Management =====
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(null)

  //   ===== Global Data =====
  const { loading: amaLoading, data: amaData } = useQuery(GET_AMA, {
    variables: { id: window.location.pathname.split("/")[4] },
  })

  // ===== User Context Section =====
  const userData = useContext(UserContext)

  const { refetch } = useQuery(GET_AMAS)
  const [updateAMA] = useMutation(UPDATE_AMA)

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

        updateAMA({
          variables: { id: window.location.pathname.split("/")[4], ...values },
        })
          .then(async (res) => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 3000)
            props.form.resetFields()
            refetch()
            await message.success("The AMA updated with successfully")
            await props.history.push("/admin/all-amas")
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  }

  if (amaLoading) {
    return "Loading..."
  }

  const { title, name, date, url, category, desc, image: amaImage } = amaData.ama

  console.log(amaData.ama)

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
              <h1 className="title_new_post">Edit AMA</h1>

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
                        initialValue: name,
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
                        initialValue: title,
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
                        initialValue: date,
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
                        initialValue: url,
                      })(<Input size="large" />)}
                    </FormItem>

                    {/* ======= Deparment Sections ======= */}
                    <Form.Item label="Category">
                      {getFieldDecorator("category", {
                        initialValue: category,
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
                        initialValue: desc,
                      })(<TextArea rows={4} />)}
                    </FormItem>

                    <FormItem label="Photo">
                      <Upload.Dragger {...uploadImage}>
                        {image === null ? (
                          <img
                            src={`${"https://admin.koompi.com" + amaImage}`}
                            alt="avatar"
                            style={{ width: "250px" }}
                          />
                        ) : (
                          <img
                            src={`${
                              "https://admin.koompi.com/public/uploads/" + image
                            }`}
                            alt="avatar"
                            style={{ width: "250px" }}
                          />
                        )}
                      </Upload.Dragger>
                      <div style={{ display: "none" }}>
                        {getFieldDecorator("image", {
                          rules: [
                            {
                              required: true,
                              message: "Thumnail is required",
                            },
                          ],
                          initialValue:
                            image === null ? amaImage : "/public/uploads/" + image,
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

export default Form.create()(EditAMA)
