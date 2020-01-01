import React from "react";
import { Table, Divider, Tag, Button, Layout } from "antd";
import TopNavbar from "./navbar/top-navbar";
import LeftNavbar from "./navbar/left-navbar";
import PageFooter from "./footer";

const { Content } = Layout;

function AllPosts() {
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image"
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Created By",
      dataIndex: "created_by",
      key: "created_by"
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Button type="primary" size="small">
            Edit
          </Button>
          <Divider type="vertical" />
          <Button type="danger" size="small">
            Delete
          </Button>
        </span>
      )
    }
  ];
  const data = [
    {
      key: "1",
      image: "Hello Worl",
      title: 32,
      created_by: "New York No. 1 Lake Park",
      description: "Hello World"
    }
  ];
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
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  );
}

export default AllPosts;
