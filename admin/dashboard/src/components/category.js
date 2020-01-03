import React, { useState, useContext } from "react";
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
  Table
} from "antd";

import "react-quill/dist/quill.snow.css"; // ES6
import LeftNavbar from "./navbar/left-navbar";
import TopNavbar from "./navbar/top-navbar";
import PageFooter from "./footer";
import { UserContext } from "../context/userContext";

const FormItem = Form.Item;
const { Content } = Layout;

function Category(props) {
  const { getFieldDecorator } = props.form;
  const userData = useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",

      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length
    },
    {
      title: "Age",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age
    },
    {
      title: "Address",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London"
        },
        {
          text: "New York",
          value: "New York"
        }
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"]
    }
  ];

  const data = [
    {
      key: "1",
      name: "Vuthy SAN",
      age: 32,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park"
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park"
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park"
    }
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
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
              <h1 className="title_new_post">Add Category</h1>
              <Form className="login-form" onSubmit={handleSubmit}>
                <Row gutter={[16, 16]}>
                  <Col span={16}>
                    <FormItem>
                      {getFieldDecorator("title", {
                        rules: [
                          {
                            required: true,
                            message: "The title is required"
                          }
                        ]
                      })(<Input size="large" placeholder="Cateogry Title" />)}
                    </FormItem>
                  </Col>
                  <Col span={4}>
                    {" "}
                    <FormItem>
                      {getFieldDecorator("title", {
                        initialValue: userData.user.fullname,
                        rules: [
                          {
                            required: true,
                            message: "The title is required"
                          }
                        ]
                      })(
                        <Input
                          size="large"
                          placeholder="Cateogry Title"
                          disabled
                        />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={4}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      style={{ width: "100%" }}
                      // disabled=
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Table
                    columns={columns}
                    dataSource={data}
                    onChange={onChange}
                  />
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

export default Form.create()(Category);
