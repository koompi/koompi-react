import React, { useState } from "react"
import { Layout, message, Table, Divider, Modal, Tag, Popconfirm } from "antd"
import TopNavbar from "../navbar/top-navbar"
import LeftNavbar from "../navbar/left-navbar"
import PageFooter from "../footer"
import moment from "moment"
import { useQuery, useMutation } from "@apollo/react-hooks"
import parse from "html-react-parser"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

// ===== Query and Mutation Section =====
import { GET_PAGES } from "../../graphql/query"
import { DELETE_PAGE } from "../../graphql/mutation"

const { Content } = Layout

function AllPages() {
  // ===== State Management =====
  const [visible, setVisible] = useState(false)

  // ===== Mutation Varile Section =====
  const [deletePage] = useMutation(DELETE_PAGE)
  const { refetch: pageRefetch } = useQuery(GET_PAGES)

  const columns = [
    {
      key: `${uuidv4()}`,
      title: "Image",
      dataIndex: "image",
      render: (data) => {
        return (
          <img
            src={
              data === "/public/uploads/"
                ? "/images/Error-01.png"
                : "https://admin-demo.koompi.com" + data
            }
            alt="post"
            width="60px"
          />
        )
      },
    },
    {
      key: `${uuidv4()}`,
      title: "Title",
      dataIndex: "title",
    },
    {
      key: `${uuidv4()}`,
      title: "SubTitle",
      dataIndex: "subTitle",
      render: (data) => {
        return data === null ? (
          <Tag color="red">N/A</Tag>
        ) : (
          <Tag color="green">{data}</Tag>
        )
      },
    },
    {
      key: `${uuidv4()}`,
      title: "Lang",
      dataIndex: "lang",
      sorter: (a, b) => {
        return a.lang.lang.localeCompare(b.lang.lang)
      },
      render: (data) => {
        return data.lang
      },
    },
    {
      key: `${uuidv4()}`,
      title: "Page",
      dataIndex: "category",
      sorter: (a, b) => a.category.title.length - b.category.title.length,
      render: (data) => {
        return data === null ? "No category" : data.title
      },
    },
    {
      key: `${uuidv4()}`,
      title: "Author",
      dataIndex: "created_by",
      render: (data) => {
        return data
      },
    },
    {
      key: `${uuidv4()}`,
      title: "Date",
      dataIndex: "created_at",
      render: (data) => {
        return moment.unix(data / 1000).format("DD, MMM YYYY")
      },
    },
    {
      key: `${uuidv4()}`,
      title: "Updated By",
      dataIndex: "updated_by",
      render: (data) => {
        return data === null ? "No Update" : data
      },
    },
    {
      key: `${uuidv4()}`,
      title: "Actions",
      dataIndex: "action",
      render: (index, data) => {
        // console.log(data)
        const { id } = data
        return (
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
                deletePage({ variables: { id: `${id}` } })
                  .then(async (res) => {
                    await message.success(res.data.delete_page.message)
                    await pageRefetch()
                  })
                  .catch((error) => {
                    console.log(error)
                    return null
                  })
              }}
            >
              <Tag color="#f50" className="btn">
                Delete
              </Tag>
            </Popconfirm>
          </div>
        )
      },
    },
  ]

  const hideModal = () => {
    setVisible(false)
  }

  const DisplayPost = () => {
    const { error, loading, data } = useQuery(GET_PAGES)
    if (error) console.log(error)
    if (loading) return <Table loading={true}></Table>
    if (data) {
      return (
        <div>
          <Table
            rowKey={() => uuidv4()}
            columns={columns}
            dataSource={data.pages}
            pagination={{
              defaultCurrent: 1,
              total: data.pages.length,
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} items`,
              pageSize: 20,
            }}
          />
        </div>
      )
    }
  }

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
  )
}

export default AllPages
