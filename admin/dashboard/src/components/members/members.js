import React, { useState } from "react"
import { Layout, message, Table, Divider, Modal, Tag, Popconfirm } from "antd"
import TopNavbar from "../navbar/top-navbar"
import LeftNavbar from "../navbar/left-navbar"
import PageFooter from "../footer"
import moment from "moment"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { Link } from "react-router-dom"

// ===== Query and Mutation Section =====
import { GET_MEMBERS } from "../../graphql/query"
import { DELETE_MEMBER } from "../../graphql/mutation"

const { Content } = Layout

function Members() {
  // ===== State Management =====
  const [visible, setVisible] = useState(false)

  // ===== Mutation Varile Section =====
  const [deleteMember] = useMutation(DELETE_MEMBER)
  const { refetch: memberRefetch } = useQuery(GET_MEMBERS)

  const columns = [
    {
      title: "Photo",
      dataIndex: "photo",
    },
    {
      title: "Full Name",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
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

  const hideModal = () => {
    setVisible(false)
  }

  const DisplayPost = () => {
    const { error, loading, data } = useQuery(GET_MEMBERS)
    if (error) console.log(error)
    if (loading) return <Table loading={true}></Table>
    if (data) {
      const DisplayTable = () => {
        return (
          <Table
            columns={columns}
            dataSource={data.members.map((member) => {
              const {
                id,
                fullname,
                phoneNumber,
                email,
                created_by,
                photo,
                department,
                created_at,
              } = member
              return {
                key: id,
                photo: (
                  <img
                    src={`https://admin-demo.koompi.com${photo}`}
                    alt="post"
                    height="50px"
                    width="50px"
                    style={{ borderRadius: "50%" }}
                  />
                ),
                fullname,
                department,
                email,
                phoneNumber,

                created_by: created_by,
                created_at: moment.unix(created_at / 1000).format("YYYY-MM-DD"),
                action: (
                  <div>
                    <Link to={`/admin/member/edit/${id}`}>
                      <Tag className="btn" color="#2db7f5">
                        Edit
                      </Tag>
                    </Link>
                    <Divider type="vertical" />
                    <Popconfirm
                      placement="topRight"
                      title="Are you sure to delete this member?"
                      okText="Yes"
                      cancelText="No"
                      onConfirm={() => {
                        deleteMember({ variables: { id: `${id}` } })
                          .then(async (res) => {
                            await message.success(res.data.delete_member.message)
                            await memberRefetch()
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
            pagination={visible ? false : true}
          />
        )
      }
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
              <h1 className="title_new_post">Members</h1>
              <DisplayPost />
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  )
}

export default Members
