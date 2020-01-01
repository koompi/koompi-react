import React, { useState } from "react";
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

import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6
import LeftNavbar from "./navbar/left-navbar";
import TopNavbar from "./navbar/top-navbar";
import PageFooter from "./footer";

const FormItem = Form.Item;
const { Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const children = [];

function NewPage(props) {
  const { getFieldDecorator } = props.form;

  const handleSEOChange = value => {
    console.log(`selected ${value}`);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
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
              <h1 className="title_new_post">Add New Page</h1>
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

                    <FormItem label="Description: ">
                      {getFieldDecorator("description", {
                        initialValue: "KOOMPI",
                        rules: [
                          {
                            required: true
                          }
                        ]
                      })(
                        <div>
                          <ReactQuill setFieldsValue="" />
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
                        Submit
                      </Button>
                    </div>
                  </Col>

                  <Col span={8}>
                    {/* ======= Drag and Drop Image ======= */}
                    <FormItem label="Feaure Image">
                      {getFieldDecorator("image", {
                        rules: [
                          {
                            required: true,
                            message: "The Feature Image is required"
                          }
                        ]
                      })(
                        <section>
                          <Upload.Dragger name="files" action="#">
                            <p className="ant-upload-drag-icon">
                              <Icon type="inbox" />
                            </p>
                            <p className="ant-upload-text">
                              Click or drag file to this area to upload
                            </p>
                            <p className="ant-upload-hint">
                              Support for a single or bulk upload.
                            </p>
                          </Upload.Dragger>
                        </section>
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
                        ]
                      })(
                        <Select
                          mode="tags"
                          style={{ width: "100%" }}
                          onChange={handleSEOChange}
                          size="large"
                        >
                          {children}
                        </Select>
                      )}
                    </FormItem>

                    {/* ======= Post Description ======= */}
                    <FormItem label="Page Description: ">
                      {getFieldDecorator("pageDescription", {
                        rules: [
                          {
                            required: true,
                            message: "The Page Description is required"
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
