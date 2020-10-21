import React, { useState } from "react"
import { Layout, message, Table, Divider, Modal, Tag, Popconfirm } from "antd"
import TopNavbar from "../navbar/top-navbar"
import LeftNavbar from "../navbar/left-navbar"
import PageFooter from "../footer"
import moment from "moment"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { Link } from "react-router-dom"

// ===== Query and Mutation Section =====
import { GET_AMAS } from "../../graphql/query"
import { DELETE_AMA } from "../../graphql/mutation"

const { Content } = Layout

function AllAMA() {
  // ===== State Management =====
  const [visible, setVisible] = useState(false)

  // ===== Mutation Varile Section =====
  const [deleteAMA] = useMutation(DELETE_AMA)

  const { error, loading, data, refetch } = useQuery(GET_AMAS)
  if (error) console.log(error)
  if (loading) return <Table loading={true}></Table>
  const columns = [
    {
      title: "Photo",
      dataIndex: "image",
      key: "image",
      render: (data) => {
        return <img src={`https://admin.koompi.com${data}`} height="30px" alt="" />
      },
    },
    {
      title: "Speaker",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Topic",
      dataIndex: "title",
      ellipsis: true,
      key: "title",
      render: (data) => {
        return data
      },
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Date",
      dataIndex: "created_at",
      key: "created_at",
      render: (data) => {
        return moment.unix(data / 1000).format("YYYY-MM-DD")
      },
    },

    {
      title: "Actions",
      render: (data) => {
        return (
          <div>
            <Link to={`/admin/ama/edit/${data.id}`}>
              <Tag className="btn" color="#2db7f5">
                Edit
              </Tag>
            </Link>
            <Divider type="vertical" />

            <Popconfirm
              placement="topRight"
              title="Are you sure to delete this AMA?"
              onConfirm={() => {
                deleteAMA({ variables: { id: `${data.id}` } })
                message.success("The AMA deleted with successful.")
                refetch()
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
      },
    },
  ]

  const hideModal = () => {
    setVisible(false)
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
              <h1 className="title_new_post">AMA</h1>
              <Table
                columns={columns}
                dataSource={data.amas}
                pagination={visible ? false : true}
              />
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  )
}

export default AllAMA
