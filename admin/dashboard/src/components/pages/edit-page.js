import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6
import LeftNavbar from "../navbar/left-navbar";
import TopNavbar from "../navbar/top-navbar";
import PageFooter from "../footer";
import { UserContext } from "../../context/userContext";
import three_dots from "../../assets/img/three-dots.svg";
// ===== Query and Mutation Section =====
import { GET_PAGE, GET_PAGES } from "../../graphql/query";
import { UPDATE_PAGE } from "../../graphql/mutation";
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
  message,
  Alert
} from "antd";

const FormItem = Form.Item;
const { Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const children = [];

function EditPage(props) {
  const { getFieldDecorator } = props.form;
  //   ===== Global Data =====
  const { loading: pageLoading, data: pageData } = useQuery(GET_PAGE, {
    variables: { id: window.location.pathname.split("/")[4] }
  });

  // ===== State Management =====
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // ===== User Context Section =====
  const userData = useContext(UserContext);

  const { refetch: pageRefetch } = useQuery(GET_PAGES);
  const [updatePage] = useMutation(UPDATE_PAGE);

  const handleDescChange = value => {
    console.log(value);

    setDescription(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);

        updatePage({
          variables: {
            id: window.location.pathname.split("/")[4],
            ...values
          }
        })
          .then(async () => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 3000);
            pageRefetch();
            await message.success("Page updated successfully.", 3);
            await props.history.push("/admin/all-pages");
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

  if (pageLoading) {
    return "Loading...";
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
              <h1 className="title_new_post">Update Page</h1>

              <Form className="login-form" onSubmit={handleSubmit}>
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
                        initialValue: pageData.page.title
                      })(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="SubTitle">
                      {getFieldDecorator("subTitle", {
                        initialValue: pageData.page.subTitle
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
                      {getFieldDecorator("description", {
                        rules: [
                          {
                            required: true
                          }
                        ],
                        initialValue:
                          description === ""
                            ? pageData.page.description
                            : description
                      })(
                        <div>
                          <ReactQuill
                            defaultValue={
                              pageLoading
                                ? "Loading ..."
                                : pageData.page.description
                            }
                            onChange={handleDescChange}
                          />
                        </div>
                      )}
                    </FormItem>
                    <div>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
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

                  <Col span={8}>
                    {/* ======= Drag and Drop Image ======= */}

                    <FormItem label="Image">
                      <Upload.Dragger {...uploadImage}>
                        {image === null ? (
                          <img
                            src={`${"http://localhost:8080" +
                              pageData.page.image}`}
                            alt="avatar"
                            style={{ width: "100%" }}
                          />
                        ) : (
                          <img
                            src={`${"http://localhost:8080/public/uploads/" +
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
                              message: "Imae is required"
                            }
                          ],
                          initialValue:
                            image === null
                              ? pageData.page.image
                              : "/public/uploads/" + image
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
                        ],
                        initialValue: pageLoading ? "" : pageData.page.keywords
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
                        ],
                        initialValue: pageLoading ? "" : pageData.page.meta_desc
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

export default Form.create()(EditPage);
