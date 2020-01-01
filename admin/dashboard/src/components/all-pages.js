import React from "react";
import { Table, Divider, Tag, Button, Layout } from "antd";
import TopNavbar from "./navbar/top-navbar";
import LeftNavbar from "./navbar/left-navbar";
import PageFooter from "./footer";

const { Content } = Layout;

function AllPages() {
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
      title: "SubTitle",
      dataIndex: "subtitle",
      key: "subtitle"
    },
    {
      title: "Description",
      key: "description",
      dataIndex: "description"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Button type="primary" size="small" onClick={() => alert("Hello")}>
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
      title: "John Brown",
      subtitle: 32,
      description: "New York No. 1 Lake Park",
      image: "Hello World"
    },
    {
      key: "2",
      title: "Hell World",
      subtitle: 32,
      description: "New York No. 1 Lake Park",
      image: "Hello World"
    },
    {
      key: "3",
      title: "John Brown",
      subtitle: 32,
      description: "New York No. 1 Lake Park",
      image: "Hello World"
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
              <h1 className="title_new_post">All Pages</h1>
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  );
}

export default AllPages;
