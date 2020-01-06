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
  message,
  Table,
  Divider,
  Modal,
  Tag,
  Breadcrumb,
  Popconfirm
} from "antd";
import TopNavbar from "../navbar/top-navbar";
import LeftNavbar from "../navbar/left-navbar";
import PageFooter from "../footer";
import moment from "moment";
import { useQuery, useMutation } from "@apollo/react-hooks";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

// ===== Query and Mutation Section =====
import { GET_POSTS } from "../../graphql/query";
import { DELETE_POST } from "../../graphql/mutation";

// =====  make the first letter of a string uppercase =====
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const { Content } = Layout;

function AllPosts() {
  // ===== State Management =====
  const [visible, setVisible] = useState(false);

  // ===== Mutation Varile Section =====
  const [deletePost] = useMutation(DELETE_POST);
  const { refetch: postRefetch } = useQuery(GET_POSTS);

  const columns = [
    {
      title: "Image",
      dataIndex: "image"
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category"
    },
    {
      title: "Author",
      dataIndex: "created_by",
      key: "created_by"
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags"
    },
    {
      title: "Date",
      dataIndex: "created_at",
      key: "created_at"
    },

    {
      title: "Actions",
      dataIndex: "action"
    }
  ];

  const hideModal = () => {
    setVisible(false);
  };

  const DisplayPost = () => {
    const { error, loading, data, refetch } = useQuery(GET_POSTS);
    if (error) console.log(error);
    if (loading) return <Table loading={true}></Table>;
    if (data) {
      const DisplayTable = () => {
        return (
          <Table
            columns={columns}
            dataSource={data.posts.map(post => {
              return {
                key: parse(post.title.substring(0, 30)),
                image: (
                  <img
                    src={"http://localhost:8080" + post.thumnail}
                    alt="post"
                    height="30px"
                    width="30px"
                    style={{ borderRadius: "50%" }}
                  />
                ),
                title: post.title,
                category: <Tag color="green">{post.category.title}</Tag>,
                tags: post.tags.map(tag => <Tag color="blue">{tag}</Tag>),
                created_by: post.created_by,
                created_at: moment
                  .unix(post.created_at / 1000)
                  .format("YYYY-MM-DD HH:mm:ss"),
                action: visible ? null : (
                  <div>
                    <Link to={`/admin/post/edit/${post.id}`}>
                      <Tag className="btn" color="#2db7f5">
                        Edit
                      </Tag>
                    </Link>
                    <Divider type="vertical" />
                    <Popconfirm
                      placement="topRight"
                      title="Are you sure to delete this Post?"
                      okText="Yes"
                      cancelText="No"
                      onConfirm={() => {
                        deletePost({ variables: { id: `${post.id}` } });
                        message.success("The Post has been Deleted");
                        postRefetch();
                      }}
                    >
                      <Tag color="#f50" className="btn">
                        Delete
                      </Tag>
                    </Popconfirm>
                  </div>
                )
              };
            })}
            pagination={visible ? false : true}
          />
        );
      };
      return (
        <div>
          <Modal
            title={"Details Informtion"}
            visible={visible}
            onOk={hideModal}
            onCancel={hideModal}
            footer={null}
            width="98%"
          >
            <DisplayTable />
          </Modal>
          <DisplayTable />
        </div>
      );
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* =========Left Navbar ======= */}
      <LeftNavbar />
      <Layout>
        <Content>
          {/* =========Top Navbar ======= */}
          <TopNavbar />

          <div className="koompi container">
            <Breadcrumb style={{ margin: "16px 0" }}>
              {window.location.pathname.split("/").map(data => {
                return (
                  <Breadcrumb.Item>
                    {capitalizeFirstLetter(data)}
                  </Breadcrumb.Item>
                );
              })}
            </Breadcrumb>
            {/* ======= Display content ====== */}

            <div className="background_container">
              <h1 className="title_new_post">All Posts</h1>
              <DisplayPost />
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  );
}

export default AllPosts;
