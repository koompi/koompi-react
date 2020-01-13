import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import LeftNavbar from "../navbar/left-navbar";
import TopNavbar from "../navbar/top-navbar";
import PageFooter from "../footer";
import moment from "moment";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/userContext";
import three_dots from "../../assets/img/three-dots.svg";

// ===== Query and Mutation Section =====
import { GET_CATEGORIES } from "../../graphql/query";
import { CREATE_CATEGORY, DELETE_CATEGORY } from "../../graphql/mutation";

// ===== Antd Section =====
import {
  Form,
  Icon,
  Input,
  Button,
  Row,
  Col,
  Layout,
  message,
  Table,
  Divider,
  Modal,
  Tag,
  Popconfirm
} from "antd";

const FormItem = Form.Item;
const { Content } = Layout;

function Category(props) {
  const { getFieldDecorator } = props.form;

  // ===== State Management =====
  const [loading, setLoading] = useState(false);

  // ===== User Context Section =====
  const userData = useContext(UserContext);

  // ===== Mutation Varile Section =====
  const [createCategory] = useMutation(CREATE_CATEGORY);
  const [deleteCategory] = useMutation(DELETE_CATEGORY);
  const { refetch: categoryRefetch } = useQuery(GET_CATEGORIES);

  // ===== Display Column in the Table Section =====
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      onFilter: (value, record) => record.title.indexOf(value) === 0,
      sorter: (a, b) => a.title.length - b.title.length
    },
    {
      title: "Author",
      dataIndex: "created_by",
      sorter: (a, b) => a.created_by.length - b.created_by.length
    },

    {
      title: "Date",
      dataIndex: "created_at"
    },
    {
      title: "Updated By",
      dataIndex: "updated_by"
    },
    {
      title: "Updated At",
      dataIndex: "updated_at"
    },
    {
      title: "Actions",
      dataIndex: "action"
    }
  ];

  // ===== Display Category Section =====
  const DisplayCategory = () => {
    const { error, loading, data, refetch } = useQuery(GET_CATEGORIES);
    if (error) console.log(error);
    if (loading) return <Table loading={true}></Table>;
    if (data) {
      return (
        <Table
          columns={columns}
          dataSource={data.categories.map(cate => {
            return {
              key: cate.id,
              title: cate.title,
              created_by: cate.created_by,
              updated_by:
                cate.updated_by === "" ? "No Update" : cate.updated_by,
              created_at: moment
                .unix(cate.created_at / 1000)
                .format("YYYY-MM-DD HH:mm:ss"),
              updated_at:
                cate.updated_at === null
                  ? "No Update"
                  : moment
                      .unix(cate.updated_at / 1000)
                      .format("YYYY-MM-DD HH:mm:ss"),
              action: (
                <div>
                  <Link to={`/admin/category/edit/${cate.id}`}>
                    <Tag className="btn" color="#2db7f5">
                      Edit
                    </Tag>
                  </Link>
                  <Divider type="vertical" />

                  <Popconfirm
                    placement="topRight"
                    title="Are you sure to delete this category?"
                    onConfirm={() => {
                      deleteCategory({ variables: { id: `${cate.id}` } });
                      message.success("The Category has been Deleted");
                      categoryRefetch();
                    }}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Tag color="#f50" className="btn">
                      Delete
                    </Tag>
                  </Popconfirm>
                </div>
              )
            };
          })}
        />
      );
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        createCategory({ variables: { ...values } })
          .then(async () => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 3000);
            categoryRefetch();
            props.form.resetFields();
            await message.success("The Category created successfully.", 3);
          })
          .catch(error => {
            message.error(error.graphQLErrors[0].message, 5);
          });
      }
    });
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  // =====  make the first letter of a string uppercase =====
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
              <h1 className="title_new_post">Categories</h1>
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
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="font-size"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          size="large"
                          placeholder="Title"
                        />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={4}>
                    <FormItem>
                      {getFieldDecorator("created_by", {
                        initialValue: userData.user.fullname,
                        rules: [
                          {
                            required: true,
                            message: "User name  is required"
                          }
                        ]
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="user"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          size="large"
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
                      className="btnSubmit"
                      disabled={loading ? true : false}
                    >
                      {loading ? (
                        <img src={three_dots} alt="btn-loading" height="10" />
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </Col>
                </Row>
              </Form>

              <DisplayCategory />
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  );
}

export default Form.create()(Category);
