import React, { useState, useContext } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import LeftNavbar from "../navbar/left-navbar"
import TopNavbar from "../navbar/top-navbar"
import PageFooter from "../footer"
import { UserContext } from "../../context/userContext"
import three_dots from "../../assets/img/three-dots.svg"
// ===== Query and Mutation Section =====
import { GET_SOFTWARE, GET_SOFTWARES } from "../../graphql/query"
import { UPDATE_SOFTWARE } from "../../graphql/mutation"

// ===== Import EditorJS =====
import EditorJs from "react-editor-js"
import { EDITOR_JS_TOOLS } from "./tools"
import slugify from "slugify"
import { Form, Input, Button, Row, Col, Upload, Layout, message } from "antd"

const FormItem = Form.Item
const { Content } = Layout

function EditSoftware(props) {
  const { getFieldDecorator } = props.form
  //   ===== Global Data =====
  const { loading: softwareLoading, data: softwareData } = useQuery(GET_SOFTWARE, {
    variables: { id: window.location.pathname.split("/")[4] }
  })

  // ===== State Management =====
  const [loading, setLoading] = useState(false)
  const [logo, setLogo] = useState(null)
  const [image, setImage] = useState(null)

  // ===== User Context Section =====
  const userData = useContext(UserContext)

  // ===== EditorJS =====
  const editorJsRef = React.useRef(null)

  const { refetch } = useQuery(GET_SOFTWARES)
  const [updateSoftware] = useMutation(UPDATE_SOFTWARE)

  const handleSubmit = React.useCallback(async () => {
    const savedData = await editorJsRef.current.save()
    props.form.validateFieldsAndScroll((err, values) => {
      console.log(slugify(values.title, { lower: true }))

      if (!err) {
        updateSoftware({
          variables: {
            id: window.location.pathname.split("/")[4],
            ...values,
            slug: slugify(values.title, { lower: true }),
            description: JSON.stringify(savedData)
          }
        })
          .then(async () => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 3000)
            refetch()
            await message.success("Software updated successfully.", 3)
            await props.history.push("/admin/all-software")
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  if (softwareLoading) {
    return "Loading..."
  }

  console.log("Result", softwareData.software.description)
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
              <h1 className="title_new_post">Update Software</h1>

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
                        ],
                        initialValue: softwareData.software.title
                      })(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="Updated By: " style={{ display: "none" }}>
                      {getFieldDecorator("updated_by", {
                        rules: [
                          {
                            required: true,
                            message: "The user name is required"
                          }
                        ],
                        initialValue: userData.user.fullname
                      })(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="update at: " style={{ display: "none" }}>
                      {getFieldDecorator("updated_at", {
                        rules: [
                          {
                            required: true,
                            message: "The user name is required"
                          }
                        ],
                        initialValue: new Date().toISOString()
                      })(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="Description: ">
                      <EditorJs
                        instanceRef={(instance) => (editorJsRef.current = instance)}
                        tools={EDITOR_JS_TOOLS}
                        data={
                          softwareLoading
                            ? "Loading ..."
                            : JSON.parse(softwareData.software.description)
                        }
                      />
                    </FormItem>
                  </Col>

                  <Col span={8}>
                    {/* ======= Drag and Drop Image ======= */}

                    <FormItem label="Logo">
                      <Upload.Dragger {...uploadLogo}>
                        {logo === null ? (
                          <img
                            src={`${"https://admin.koompi.com" +
                              softwareData.software.logo}`}
                            alt="avatar"
                            style={{ width: "100%" }}
                          />
                        ) : (
                          <img
                            src={`${"https://admin.koompi.com/public/uploads/" +
                              logo}`}
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
                            logo === null
                              ? softwareData.software.logo
                              : "/public/uploads/" + logo
                        })(<Input size="large" />)}
                      </div>
                    </FormItem>

                    <FormItem label="Image">
                      <Upload.Dragger {...uploadImage}>
                        {image === null ? (
                          <img
                            src={`${"https://admin.koompi.com" +
                              softwareData.software.image}`}
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
                        {getFieldDecorator("image", {
                          rules: [
                            {
                              required: true,
                              message: "Image is required"
                            }
                          ],
                          initialValue:
                            image === null
                              ? softwareData.software.image
                              : "/public/uploads/" + image
                        })(<Input size="large" />)}
                      </div>
                    </FormItem>

                    <div style={{ float: "right" }}>
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
                          "Update"
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

export default Form.create()(EditSoftware)
