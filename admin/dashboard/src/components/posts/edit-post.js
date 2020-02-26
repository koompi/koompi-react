import React, { useState, useContext } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import LeftNavbar from "../navbar/left-navbar"
import TopNavbar from "../navbar/top-navbar"
import PageFooter from "../footer"
import { UserContext } from "../../context/userContext"
import three_dots from "../../assets/img/three-dots.svg"
// ===== Query and Mutation Section =====
import { GET_CATEGORIES, GET_POST, GET_POSTS } from "../../graphql/query"
import { UPDATE_POST } from "../../graphql/mutation"
import _ from "lodash"

// ===== Import EditorJS =====
import EditorJs from "react-editor-js"
import { EDITOR_JS_TOOLS } from "./tools"
import slugify from "slugify"
import { Form, Input, Button, Row, Col, Upload, Select, Layout, message } from "antd"

const FormItem = Form.Item
const { Content } = Layout
const { TextArea } = Input
const { Option } = Select

const children = []

function EditPost(props) {
  const { getFieldDecorator } = props.form
  //   ===== Global Data =====
  const { loading: postLoading, data: postData } = useQuery(GET_POST, {
    variables: { id: window.location.pathname.split("/")[4] }
  })

  // ===== State Management =====
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(null)

  // ===== User Context Section =====
  const userData = useContext(UserContext)

  // ===== EditorJS =====
  const editorJsRef = React.useRef(null)

  const { refetch: postRefetch } = useQuery(GET_POSTS)
  const [updatePost] = useMutation(UPDATE_POST)

  const DisplayCategories = () => {
    const { error, loading, data } = useQuery(GET_CATEGORIES)
    if (error) console.log(error)
    if (loading) return "Loading ..."

    const filtered_pages = _.filter(data.categories, function(p) {
      return _.includes(["news", "events"], p.slug)
    })
    return (
      <Form.Item label="Categories">
        {getFieldDecorator("category", {
          rules: [
            {
              required: true,
              message: "Please select your category!"
            }
          ],
          initialValue: postData.post.category.title
        })(
          <Select placeholder="Please select the category" size="large">
            {filtered_pages.map((cate) => {
              return (
                <Option value={cate.title} key={cate.id}>
                  {cate.title}
                </Option>
              )
            })}
          </Select>
        )}
      </Form.Item>
    )
  }

  const handleSubmit = React.useCallback(async () => {
    const savedData = await editorJsRef.current.save()
    props.form.validateFieldsAndScroll((err, values) => {
      console.log(slugify(values.title, { lower: true }))

      if (!err) {
        updatePost({
          variables: {
            id: window.location.pathname.split("/")[4],
            ...values,
            slug: slugify(values.title, { lower: true }),
            description: JSON.stringify(savedData)
          }
        })
          .then(async (res) => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 3000)
            postRefetch()
            await message.success(res.data.update_post.message, 3)
            await props.history.push("/admin/all-posts")
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   props.form.validateFieldsAndScroll((err, values) => {
  //     if (!err) {
  //       console.log(values);

  //       updatePost({
  //         variables: {
  //           id: window.location.pathname.split("/")[4],
  //           ...values
  //         }
  //       })
  //         .then(async () => {
  //           setLoading(true);
  //           setTimeout(() => {
  //             setLoading(false);
  //           }, 3000);
  //           postRefetch();
  //           await message.success("Post updated successfully.", 3);
  //           await props.history.push("/admin/all-posts");
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         });
  //     }
  //   });
  // };

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

  if (postLoading) {
    return "Loading..."
  }

  console.log("Result", postData.post.description)
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
              <h1 className="title_new_post">Update Post</h1>

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
                        initialValue: postData.post.title
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
                          postLoading
                            ? "Loading ..."
                            : JSON.parse(postData.post.description)
                        }
                      />
                    </FormItem>
                  </Col>

                  <Col span={8}>
                    {/* ======= Drag and Drop Image ======= */}

                    <FormItem label="Thumnail">
                      <Upload.Dragger {...uploadImage}>
                        {image === null ? (
                          <img
                            src={`${"https://admin.koompi.com" +
                              postData.post.thumnail}`}
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
                        {getFieldDecorator("thumnail", {
                          rules: [
                            {
                              required: true,
                              message: "Thumnail is required"
                            }
                          ],
                          initialValue:
                            image === null
                              ? postData.post.thumnail
                              : "/public/uploads/" + image
                        })(<Input size="large" />)}
                      </div>
                    </FormItem>

                    {/* ======= Category Sections ======= */}
                    <DisplayCategories />

                    {/* ======= Tags ======= */}
                    <FormItem label="Tags">
                      {getFieldDecorator("tags", {
                        rules: [
                          {
                            required: true,
                            message: "The tags is required"
                          }
                        ],
                        initialValue: postLoading ? "" : postData.post.tags
                      })(
                        <Select mode="tags" style={{ width: "100%" }} size="large">
                          {children}
                        </Select>
                      )}
                    </FormItem>

                    {/* ======= SEO and Keywords ======= */}
                    <FormItem label="SEO or Keywords">
                      {getFieldDecorator("keywords", {
                        rules: [
                          {
                            required: true,
                            message: "The keywords is required"
                          }
                        ],
                        initialValue: postLoading ? "" : postData.post.keywords
                      })(
                        <Select mode="tags" style={{ width: "100%" }} size="large">
                          {children}
                        </Select>
                      )}
                    </FormItem>

                    {/* ======= Post Description ======= */}
                    <FormItem label="Meta Description: ">
                      {getFieldDecorator("meta_desc", {
                        rules: [
                          {
                            required: true,
                            message: "The Meta Description is required"
                          }
                        ],
                        initialValue: postLoading ? "" : postData.post.meta_desc
                      })(<TextArea rows={4} />)}
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

export default Form.create()(EditPost)
