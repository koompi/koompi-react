import React, { useState } from "react";
import { Table, Divider, Tag, Button, Layout } from "antd";
import TopNavbar from "./navbar/top-navbar";
import LeftNavbar from "./navbar/left-navbar";
import PageFooter from "./footer";
import { useQuery } from "@apollo/react-hooks";

import { GET_USERS } from "../graphql/query";

const { Content } = Layout;

function Users() {
  const DisplayUser = () => {
    const { error, loading, data } = useQuery(GET_USERS);
    if (loading) {
      return "Loading ...";
    }
    if (error) console.log(error);

    if (data) {
      return (
        <Table
          dataSource={data.users.map(user => {
            const { id, fullname, email, isAdmin, approved } = user;

            return {
              key: id,
              fullname,
              email,
              admin: isAdmin ? (
                <Tag color="green" key={id}>
                  Yes
                </Tag>
              ) : (
                <Tag color="red" key={id}>
                  No
                </Tag>
              ),
              approved: approved ? (
                <Tag color="green" key={id}>
                  Ppproved
                </Tag>
              ) : (
                <Tag color="orange" key={id}>
                  Pedding
                </Tag>
              )
            };
          })}
          columns={columns}
        />
      );
    }
  };
  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullname",
      key: "fullname"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Admin",
      key: "admin",
      dataIndex: "admin"
    },
    {
      title: "Approved",
      key: "approved",
      dataIndex: "approved"
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
              <DisplayUser />
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  );
}

export default Users;
