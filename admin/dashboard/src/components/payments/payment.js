import React from "react"
import { Layout, message, Table, Tag, Popconfirm } from "antd"
import TopNavbar from "../navbar/top-navbar"
import LeftNavbar from "../navbar/left-navbar"
import PageFooter from "../footer"
import moment from "moment"
import { useQuery, useMutation } from "@apollo/react-hooks"

// ===== Query and Mutation Section =====
import { GET_PAYMENTS } from "../../graphql/query"
import { DELETE_PAYMENT } from "../../graphql/mutation"

const { Content } = Layout

function Payment() {
  // ===== Mutation Varile Section =====
  const [deletePayment] = useMutation(DELETE_PAYMENT)
  const { refetch: paymentRefetch } = useQuery(GET_PAYMENTS)

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname"
    },
    {
      title: "Last Name",
      dataIndex: "lastname"
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Phone Number",
      dataIndex: "phone"
    },
    {
      title: "Product",
      dataIndex: "product"
    },
    {
      title: "Pay By",
      dataIndex: "payBy"
    },
    {
      title: "Color",
      dataIndex: "color"
    },
    {
      title: "Price",
      dataIndex: "price"
    },
    {
      title: "Cancle",
      dataIndex: "cancle"
    },
    {
      title: "Created At",
      dataIndex: "created_at"
    },
    {
      title: "Actions",
      dataIndex: "action"
    }
  ]

  const DisplayPayment = () => {
    const { error, loading, data } = useQuery(GET_PAYMENTS)
    if (error) console.log(error)
    if (loading) return <Table loading={true}></Table>
    if (data) {
      console.log(data)

      const DisplayTable = () => {
        return (
          <Table
            columns={columns}
            dataSource={data.payments.map((payment) => {
              const {
                id,
                firstname,
                lastname,
                email,
                created_at,
                phone,
                price,
                product,
                cancle,
                payBy,
                color
              } = payment
              return {
                key: id,
                firstname,
                lastname,
                email,
                phone,
                payBy,
                color,
                product: product.map((data) => {
                  return <Tag color="blue">{data}</Tag>
                }),
                price: `$${price}.00`,
                cancle: cancle ? (
                  <Tag color="red">Yes</Tag>
                ) : (
                  <Tag color="green">No</Tag>
                ),
                created_at: moment.unix(created_at / 1000).format("YYYY-MM-DD"),
                action: (
                  <div>
                    <Popconfirm
                      placement="topRight"
                      title="Are you sure to delete this payment?"
                      okText="Yes"
                      cancelText="No"
                      onConfirm={() => {
                        deletePayment({ variables: { id: `${id}` } })
                          .then(async (res) => {
                            await message.success(res.data.delete_payment.message)
                            await paymentRefetch()
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
              <h1 className="title_new_post">Payments</h1>
              <DisplayPayment />
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  )
}

export default Payment
