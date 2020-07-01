import React, { useState } from "react"
import { Layout, message, Table, Divider, Modal, Tag, Popconfirm } from "antd"
import TopNavbar from "../navbar/top-navbar"
import LeftNavbar from "../navbar/left-navbar"
import PageFooter from "../footer"
import moment from "moment"
import { useQuery, useMutation } from "@apollo/react-hooks"
import parse from "html-react-parser"
import { Link } from "react-router-dom"

// ===== Query and Mutation Section =====
import { GET_RETAILERS } from "../../graphql/query"
import { DELETE_RETAILER } from "../../graphql/mutation"

const { Content } = Layout

function Retailers() {
  // ===== State Management =====
  const [visible, setVisible] = useState(false)

  // ===== Mutation Varile Section =====
  const [deleteRetailer] = useMutation(DELETE_RETAILER)
  const { refetch: retailerRefetch } = useQuery(GET_RETAILERS)

  const columns = [
    {
      title: "Logo",
      dataIndex: "logo",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
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
    const { error, loading, data } = useQuery(GET_RETAILERS)
    if (error) console.log(error)
    if (loading) return <Table loading={true}></Table>
    if (data) {
      const DisplayTable = () => {
        return (
          <Table
            columns={columns}
            dataSource={data.retailers.map((retailer) => {
              const {
                id,
                name,
                phoneNumber,
                email,
                created_by,
                logo,
                created_at,
              } = retailer
              return {
                key: parse(name),
                logo: (
                  <img
                    src={`https://admin-demo.koompi.com${logo}`}
                    alt={name}
                    height="30px"
                    width="auto"
                  />
                ),
                name,
                email: email === null ? "Null" : email,
                phoneNumber: phoneNumber === null ? "Null" : phoneNumber,

                created_by: created_by,
                created_at: moment
                  .unix(created_at / 1000)
                  .format("YYYY-MM-DD HH:mm:ss"),
                action: (
                  <div>
                    <Link to={`/admin/retailer/edit/${id}`}>
                      <Tag className="btn" color="#2db7f5">
                        Edit
                      </Tag>
                    </Link>
                    <Divider type="vertical" />
                    <Popconfirm
                      placement="topRight"
                      title="Are you sure to delete this retailer?"
                      okText="Yes"
                      cancelText="No"
                      onConfirm={() => {
                        deleteRetailer({ variables: { id: `${id}` } })
                          .then(async (res) => {
                            await message.success(res.data.delete_retailer.message)
                            await retailerRefetch()
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
              <h1 className="title_new_post">Retailers</h1>
              <DisplayPost />
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  )
}

export default Retailers
