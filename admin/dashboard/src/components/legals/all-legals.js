import React from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import LeftNavbar from "../navbar/left-navbar"
import TopNavbar from "../navbar/top-navbar"
import PageFooter from "../footer"
import moment from "moment"
import { Link } from "react-router-dom"

// ===== Query and Mutation Section =====
import { GET_LEGALS } from "../../graphql/query"
import { DELETE_LEGAL } from "../../graphql/mutation"

// ===== Antd Section =====
import { Form, Layout, message, Table, Divider, Tag, Popconfirm } from "antd"

const { Content } = Layout

function Legals() {
  // ===== Mutation Varile Section =====
  const [deleteLegal] = useMutation(DELETE_LEGAL)
  const { refetch: legalRefetch } = useQuery(GET_LEGALS)

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
      title: "Actions",
      dataIndex: "action"
    }
  ]

  // ===== Display Category Section =====
  const DisplayCategory = () => {
    const { error, loading, data } = useQuery(GET_LEGALS)
    if (error) console.log(error)
    if (loading) return <Table loading={true}></Table>
    if (data) {
      return (
        <Table
          columns={columns}
          dataSource={data.legals.map((data) => {
            return {
              key: data.id,
              title: data.title,
              created_by: data.created_by,
              created_at: moment.unix(data.created_at / 1000).format("YYYY-MM-DD"),
              action: (
                <div>
                  <Link to={`/admin/legal/edit/${data.id}`}>
                    <Tag className="btn" color="#2db7f5">
                      Edit
                    </Tag>
                  </Link>
                  <Divider type="vertical" />

                  <Popconfirm
                    placement="topRight"
                    title="Are you sure to delete this legal?"
                    onConfirm={() => {
                      deleteLegal({ variables: { id: `${data.id}` } })
                      message.success("The Legal has been Deleted")
                      legalRefetch()
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
            }
          })}
        />
      )
    }
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
              <h1 className="title_new_post">Legals</h1>
              <DisplayCategory />
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  )
}

export default Form.create()(Legals)
