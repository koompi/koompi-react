import React from "react"
import { Layout, message, Table, Divider, Tag, Popconfirm } from "antd"
import TopNavbar from "../navbar/top-navbar"
import LeftNavbar from "../navbar/left-navbar"
import PageFooter from "../footer"
import moment from "moment"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { Link } from "react-router-dom"

// ===== Query and Mutation Section =====
import { GET_SOFTWARES } from "../../graphql/query"
import { DELETE_SOFTWARE } from "../../graphql/mutation"

const { Content } = Layout

function AllSoftwares() {
  // ===== Mutation Varile Section =====
  const [deleteSoftware] = useMutation(DELETE_SOFTWARE)

  const { refetch: refetchSoftware } = useQuery(GET_SOFTWARES)

  const columns = [
    {
      title: "Logo",
      dataIndex: "logo",
    },
    {
      title: "Image",
      dataIndex: "image",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "created_by",
      key: "created_by",
    },
    {
      title: "Date",
      dataIndex: "created_at",
      key: "created_at",
    },

    {
      title: "Actions",
      dataIndex: "action",
    },
  ]

  const DisplayPost = () => {
    const { error, loading, data } = useQuery(GET_SOFTWARES)
    if (error) console.log(error)
    if (loading) return <Table loading={true}></Table>
    if (data) {
      const DisplayTable = () => {
        return (
          <Table
            columns={columns}
            dataSource={data.softwares.map((software) => {
              const { id, title, created_at, user } = software
              return {
                key: id,
                logo: (
                  <img
                    src={"https://admin.koompi.com" + software.logo}
                    alt="software"
                    height="50px"
                    width="50px"
                  />
                ),
                image: (
                  <img
                    src={"https://admin.koompi.com" + software.image}
                    alt="software"
                    height="50px"
                    width="50px"
                    style={{ borderRadius: "50%" }}
                  />
                ),
                title: title.length <= 25 ? title : title.substring(0, 25) + " ...",

                created_by: user === null ? "Null" : user.fullname,
                created_at: moment.unix(created_at / 1000).format("YYYY-MM-DD"),
                action: (
                  <div>
                    <Link to={`/admin/software/edit/${id}`}>
                      <Tag className="btn" color="#2db7f5">
                        Edit
                      </Tag>
                    </Link>
                    <Divider type="vertical" />
                    <Popconfirm
                      placement="topRight"
                      title="Are you sure to delete this software?"
                      okText="Yes"
                      cancelText="No"
                      onConfirm={() => {
                        deleteSoftware({ variables: { id: `${id}` } })
                          .then(async (res) => {
                            await message.success(res.data.delete_software.message)
                            await refetchSoftware()
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
                ),
              }
            })}
            pagination={true}
          />
        )
      }
      return (
        <div>
          <DisplayTable />
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
              <h1 className="title_new_post">All softwares</h1>
              <DisplayPost />
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  )
}

export default AllSoftwares
