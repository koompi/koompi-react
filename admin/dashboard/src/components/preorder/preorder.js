import React from "react"
import { Layout, message, Table, Tag, Popconfirm } from "antd"
import TopNavbar from "../navbar/top-navbar"
import LeftNavbar from "../navbar/left-navbar"
import PageFooter from "../footer"
import moment from "moment"
import { useQuery, useMutation } from "@apollo/react-hooks"

// ===== Query and Mutation Section =====
// import { GET_CUSTOMERS } from "../../graphql/query"
import { DELETE_PAYMENT } from "../../graphql/mutation"

const { Content } = Layout

function Preorder() {
  // ===== Mutation Varile Section =====
  // const [deletePayment] = useMutation(DELETE_PAYMENT)
  // const { refetch: paymentRefetch } = useQuery(GET_CUSTOMERS)

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      title: "Message",
      dataIndex: "message",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
    },
    {
      title: "Actions",
      dataIndex: "action",
    },
  ]

  // const DisplayPayment = () => {
  //   const { error, loading, data } = useQuery(GET_CUSTOMERS)
  //   if (error) console.log(error)
  //   if (loading) return <Table loading={true}></Table>
  //   if (data) {
  //     console.log(data)

  //     const DisplayTable = () => {
  //       return (
  //         <Table
  //           columns={columns}
  //           dataSource={data.payments.map((payment) => {
  //             const { id, firstname, lastname, email, created_at } = payment
  //             return {
  //               key: id,
  //               firstname,
  //               lastname,
  //               email,
  //               created_at: moment.unix(created_at / 1000).format("YYYY-MM-DD"),
  //               action: <div></div>,
  //             }
  //           })}
  //           pagination={true}
  //         />
  //       )
  //     }
  //     return (
  //       <div>
  //         <DisplayTable />
  //       </div>
  //     )
  //   }
  // }

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
              <h1 className="title_new_post">Pre-Order</h1>
              {/* <DisplayPayment /> */}
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  )
}

export default Preorder
