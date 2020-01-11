import React, { useState, useContext } from "react";
import QuillTextEditor from "../QuillTextEditor";
import LeftNavbar from "../navbar/left-navbar";
import TopNavbar from "../navbar/top-navbar";
import PageFooter from "../footer";
import { UserContext } from "../../context/userContext";
import { useMutation } from "@apollo/react-hooks";
import three_dots from "../../assets/img/three-dots.svg";
import {
  Form,
  Icon,
  Input,
  Button,
  Row,
  Col,
  Upload,
  Select,
  Layout,
  message
} from "antd";

// ===== Query and Mutation Section =====
import { CREATE_PAGE } from "../../graphql/mutation";

const FormItem = Form.Item;
const { Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const children = [];

function NewPage(props) {
  const { getFieldDecorator } = props.form;

  const [createPage] = useMutation(CREATE_PAGE);

  // ===== state management =====
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");

  // ===== User Context Section =====
  const userData = useContext(UserContext);

  const handleSEOChange = value => {
    console.log(`selected ${value}`);
  };

  const handleDescChange = value => {
    setDescription(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        createPage({ variables: { description, ...values } })
          .then(async () => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 3000);
            props.form.resetFields();
            setDescription("");
            await message.success("Page created successfully.", 3);
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  };

  const uploadImage = {
    name: "file",
    multiple: false,
    action: "http://localhost:8080/upload/image",
    defaultFileList: image,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        setImage(info.file.name.replace(/\s+/g, "-").toLowerCase());
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };

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
              <h1 className="title_new_post">New Page</h1>
              <Form className="login-form" onSubmit={handleSubmit}>
                <Row gutter={[24, 8]}>
                  <Col span={16}>
                    <FormItem label="Title: ">
                      {getFieldDecorator("title", {
                        rules: [
                          {
                            required: true,
                            message: "The title is required"
                          }
                        ]
                      })(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="SubTitle: ">
                      {getFieldDecorator("subtitle")(<Input size="large" />)}
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
                      {getFieldDecorator("description", {
                        rules: [
                          {
                            required: true
                          }
                        ],
                        initialValue: description
                      })(
                        <div>
                          <QuillTextEditor
                            handleDescChange={handleDescChange}
                          />
                        </div>
                      )}
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
                    <FormItem label="Image">
                      <Upload.Dragger {...uploadImage}>
                        {image ? (
                          <img
                            src={`${"http://localhost:8080/public/uploads/" +
                              `${image}`}`}
                            alt="avatar"
                            style={{ width: "100%" }}
                          />
                        ) : (
                          <p className="ant-upload-drag-icon">
                            <Icon type="file-image" />
                            <p>Upload Image</p>
                          </p>
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

                    {/* ======= SEO and Keywords ======= */}
                    <FormItem label="SEO or Keywords">
                      {getFieldDecorator("keywords", {
                        rules: [
                          {
                            required: true,
                            message: "The keywords is required"
                          }
                        ]
                      })(
                        <Select
                          mode="tags"
                          style={{ width: "100%" }}
                          size="large"
                        >
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
                        ]
                      })(<TextArea rows={4} />)}
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
  );
}

export default Form.create()(NewPage);
