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
import { GET_MEMBERS, GET_MEMBER } from "../../graphql/query";
import { UPDATE_MEMBER } from "../../graphql/mutation";
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

function EditMember(props) {
  const { getFieldDecorator } = props.form;

  // ===== State Management =====
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  //   ===== Global Data =====
  const { loading: postLoading, data: memberData } = useQuery(GET_MEMBER, {
    variables: { id: window.location.pathname.split("/")[4] }
  });

  // ===== User Context Section =====
  const userData = useContext(UserContext);

  const { refetch: memberRefetch } = useQuery(GET_MEMBERS);
  const [updateMember] = useMutation(UPDATE_MEMBER);

  const handleDescChange = value => {
    setDescription(value);
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

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);

        updateMember({
          variables: { id: window.location.pathname.split("/")[4], ...values }
        })
          .then(async () => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 3000);
            props.form.resetFields();
            memberRefetch();
            await message.success("Member updated successfully.", 3);
            await props.history.push("/admin/members");
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  };

  if (postLoading) {
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
              <h1 className="title_new_post">Add Member</h1>

              <Form className="login-form" onSubmit={handleSubmit}>
                <Row gutter={[24, 8]}>
                  <Col span={16}>
                    <FormItem label="Full Name">
                      {getFieldDecorator("fullname", {
                        rules: [
                          {
                            required: true,
                            message: "The fullname is required"
                          }
                        ],
                        initialValue: memberData.member.fullname
                      })(<Input size="large" />)}
                    </FormItem>
                    {/* ======= Deparment Sections ======= */}
                    <Form.Item label="Department">
                      {getFieldDecorator("department", {
                        rules: [
                          {
                            required: true,
                            message: "Please select member department!"
                          }
                        ],
                        initialValue: "software-team"
                      })(
                        <Select defaultValue="software-team">
                          <Option value="business-development">
                            Business Development
                          </Option>
                          <Option value="hardware-team">
                            KOOMPI Hardware Team
                          </Option>
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
                            message: "Position is required"
                          }
                        ],
                        initialValue: memberData.member.position
                      })(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="Phone Number: ">
                      {getFieldDecorator("phoneNumber", {
                        rules: [
                          {
                            required: true,
                            message: "Phone Number is required"
                          }
                        ],
                        initialValue: memberData.member.phoneNumber
                      })(<Input size="large" />)}
                    </FormItem>

                    <FormItem label="Email: ">
                      {getFieldDecorator("email", {
                        rules: [
                          {
                            required: true,
                            message: "Email is required"
                          }
                        ],
                        initialValue: memberData.member.email
                      })(<Input size="large" />)}
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
                            src={`${"http://localhost:8080" +
                              memberData.member.photo}`}
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
                        {getFieldDecorator("photo", {
                          rules: [
                            {
                              required: true,
                              message: "Thumnail is required"
                            }
                          ],
                          initialValue:
                            image === null
                              ? memberData.member.photo
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
  );
}

export default Form.create()(EditMember);
