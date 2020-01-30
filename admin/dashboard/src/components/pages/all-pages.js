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
import { GET_PAGES } from "../../graphql/query";
import { DELETE_PAGE } from "../../graphql/mutation";

const { Content } = Layout;

function AllPages() {
  // ===== State Management =====
  const [visible, setVisible] = useState(false);

  // ===== Mutation Varile Section =====
  const [deletePage] = useMutation(DELETE_PAGE);
  const { refetch: pageRefetch } = useQuery(GET_PAGES);

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
      title: "SubTitle",
      dataIndex: "subTitle",
      key: "subTitle"
    },
    {
      title: "Page",
      dataIndex: "category",
      key: "category",
      sorter: (a, b) => a.category.length - b.category.length
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
      title: "Updated By",
      dataIndex: "updated_by"
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
    const { error, loading, data, refetch } = useQuery(GET_PAGES);
    if (error) console.log(error);
    if (loading) return <Table loading={true}></Table>;
    if (data) {
      const DisplayTable = () => {
        return (
          <Table
            columns={columns}
            dataSource={data.pages.map(page => {
              const {
                id,
                title,
                subTitle,
                category,
                image,
                created_at,
                created_by,
                updated_by
              } = page;

              return {
                key: parse(title.substring(0, 30)),
                image: (
                  <img
                    src={"http://localhost:8080" + image}
                    alt="post"
                    height="50px"
                    width="50px"
                    style={{ borderRadius: "50%" }}
                  />
                ),
                title:
                  title.substring().length > 25
                    ? parse(title.substring(0, 25) + "... ")
                    : parse(title),
                subTitle:
                  subTitle === null ? (
                    <Tag color="red">N/A</Tag>
                  ) : (
                    <Tag color="green">{subTitle.toUpperCase()}</Tag>
                  ),
                category: category === null ? "No category" : category.title,
                created_by,
                updated_by: updated_by === null ? "No Update" : updated_by,
                created_at: moment.unix(created_at / 1000).format("YYYY-MM-DD"),
                action: visible ? null : (
                  <div>
                    <Link to={`/admin/page/edit/${id}`}>
                      <Tag className="btn" color="#2db7f5">
                        Edit
                      </Tag>
                    </Link>
                    <Divider type="vertical" />
                    <Popconfirm
                      placement="topRight"
                      title="Are you sure to delete this Page?"
                      okText="Yes"
                      cancelText="No"
                      onConfirm={() => {
                        deletePage({ variables: { id: `${id}` } });
                        message.success("The Page has been Deleted");
                        pageRefetch();
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
            {/* ======= Display content ====== */}

            <div className="background_container">
              <h1 className="title_new_post">All Pages</h1>
              <DisplayPost />
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  );
}

export default AllPages;
