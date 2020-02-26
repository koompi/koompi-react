import React, { useContext } from "react"
import { Table, Tag, Layout, Popconfirm, message } from "antd"
import TopNavbar from "./navbar/top-navbar"
import LeftNavbar from "./navbar/left-navbar"
import PageFooter from "./footer"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { UserContext } from "../context/userContext"
import { GET_USERS } from "../graphql/query"
import { APPROVE_USER, DELETE_USER, ISADMIN } from "../graphql/mutation"

const { Content } = Layout

function Users() {
  const [approveUser] = useMutation(APPROVE_USER)
  const [deleteUser] = useMutation(DELETE_USER)
  const [makeAsAdmin] = useMutation(ISADMIN)
  const userContext = useContext(UserContext)
  const { isAdmin } = userContext.user

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
    }
  ]

  const adminColumns = [
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
      dataIndex: "action"
    }
  ]

  const DisplayUserAdmin = () => {
    const { error, loading, data, refetch } = useQuery(GET_USERS)
    if (loading) {
      return "Loading ..."
    }
    if (error) console.log(error)

    if (data) {
      refetch()
      return (
        <Table
          dataSource={data.users.map((user, index) => {
            const { id, fullname, email, isAdmin, approved } = user

            return {
              key: index,
              fullname,
              email,
              admin: isAdmin ? (
                <Popconfirm
                  placement="topRight"
                  title="Are you sure to make this user a normal user?"
                  onConfirm={() => {
                    makeAsAdmin({
                      variables: { id: `${id}`, isAdmin: false }
                    })
                    message.success(`${fullname} updated successfully `)
                  }}
                  okText="Yes"
                  cancelText="No"
                >
                  <Tag color="green" key={id} style={{ cursor: "pointer" }}>
                    Yes
                  </Tag>
                </Popconfirm>
              ) : (
                <Popconfirm
                  placement="topRight"
                  title="Are you sure to approve this user as Admin?"
                  onConfirm={() => {
                    makeAsAdmin({
                      variables: { id: `${id}`, isAdmin: true }
                    })

                    message.success(
                      `${fullname} has been aprroved as admin successfully `
                    )
                  }}
                  okText="Yes"
                  cancelText="No"
                >
                  <Tag color="red" key={id} style={{ cursor: "pointer" }}>
                    No
                  </Tag>
                </Popconfirm>
              ),
              approved: approved ? (
                <Popconfirm
                  disabled={isAdmin ? true : false}
                  placement="topRight"
                  title="Are you sure disable this user?"
                  onConfirm={() => {
                    approveUser({
                      variables: { id: `${id}`, approve: false }
                    })
                    message.success(`${fullname} is disable `)
                  }}
                  okText="Yes"
                  cancelText="No"
                >
                  <Tag color="green" key={id} style={{ cursor: "pointer" }}>
                    Approved
                  </Tag>
                </Popconfirm>
              ) : (
                <Popconfirm
                  disabled={isAdmin ? true : false}
                  placement="topRight"
                  title="Are you sure to approve this user?"
                  onConfirm={() => {
                    approveUser({
                      variables: { id: `${id}`, approve: true }
                    })
                    message.success(`${fullname} has been aprroved successfully `)
                    refetch()
                  }}
                  okText="Yes"
                  cancelText="No"
                >
                  <Tag color="orange" key={id} style={{ cursor: "pointer" }}>
                    Pending
                  </Tag>
                </Popconfirm>
              ),
              action: (
                <div>
                  <Popconfirm
                    disabled={isAdmin ? true : false}
                    placement="topRight"
                    title="Are you sure to delete this user?"
                    onConfirm={() => {
                      deleteUser({ variables: { id: id } })
                      message.success(`${fullname} Has been deleted `)
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
          columns={adminColumns}
        />
      )
    }
  }

  const DisplayUser = () => {
    const { error, loading, data } = useQuery(GET_USERS)
    if (loading) {
      return "Loading ..."
    }
    if (error) console.log(error)

    if (data) {
      return (
        <Table
          dataSource={data.users.map((user, index) => {
            const { id, fullname, email, isAdmin, approved } = user

            return {
              key: index,
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
                  Approved
                </Tag>
              ) : (
                <Tag color="orange" key={id}>
                  Pending
                </Tag>
              )
            }
          })}
          columns={columns}
        />
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
              <h1 className="title_new_post">Users</h1>
              {isAdmin ? <DisplayUserAdmin /> : <DisplayUser />}
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  )
}

export default Users
