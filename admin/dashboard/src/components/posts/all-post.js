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
      title: "Slug",
      dataIndex: "slug",
      key: "slug"
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
    const { error, loading, data } = useQuery(GET_POSTS);
    if (error) console.log(error);
    if (loading) return <Table loading={true}></Table>;
    if (data) {
      const DisplayTable = () => {
        return (
          <Table
            columns={columns}
            dataSource={data.posts.map(post => {
              const {
                id,
                title,
                category,
                tags,
                created_at,
                user,
                slug
              } = post;
              return {
                key: id,
                image: (
                  <img
                    src={"http://localhost:8080" + post.thumnail}
                    alt="post"
                    height="50px"
                    width="50px"
                    style={{ borderRadius: "50%" }}
                  />
                ),
                title:
                  title.length <= 25 ? title : title.substring(0, 25) + " ...",
                slug: slug.length <= 25 ? slug : slug.substring(0, 25) + " ...",
                category: (
                  <Tag color="green">
                    {category === null ? "No category" : category.title}
                  </Tag>
                ),

                created_by: user === null ? "Null" : user.fullname,
                created_at: moment.unix(created_at / 1000).format("YYYY-MM-DD"),
                action: (
                  <div>
                    <Link to={`/admin/post/edit/${id}`}>
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
                        deletePost({ variables: { id: `${id}` } });
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
            pagination={true}
          />
        );
      };
      return (
        <div>
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
