import React, { Fragment, useState } from "react"
import { Layout, message, Table, Tag, Popconfirm, Badge, Modal } from "antd"
import TopNavbar from "../navbar/top-navbar"
import LeftNavbar from "../navbar/left-navbar"
import PageFooter from "../footer"
import moment from "moment"
import { useQuery, useMutation } from "@apollo/react-hooks"

// ===== Query and Mutation Section =====
import { GET_CUSTOMERS, GET_PRODUCT } from "../../graphql/query"
import { DELETE_CUSTOMER } from "../../graphql/mutation"
import { CSVLink, CSVDownload } from "react-csv"

const { Content } = Layout
const { Column, ColumnGroup } = Table

function currencyFormat(num) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

function Payment() {
  const [productData, setProductData] = React.useState(null)
  // ===== Mutation Varile Section =====
  const [deleteCustomer] = useMutation(DELETE_CUSTOMER)
  const { refetch: paymentRefetch } = useQuery(GET_CUSTOMERS)
  const [state, setState] = useState({ visible: false })
  const { error, loading, data } = useQuery(GET_CUSTOMERS)

  const showModal = () => {
    setState({
      visible: true,
    })
  }

  const handleOk = (e) => {
    console.log(e)
    setState({
      visible: false,
    })
  }

  const handleCancel = (e) => {
    console.log(e)
    setState({
      visible: false,
    })
  }

  const columns = [
    {
      title: "No",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "User Info",
      children: [
        {
          title: "Full Name",
          render: (data) => {
            const { firstname, lastname } = data
            return `${firstname} ${lastname}`
          },
        },
        {
          title: "Email",
          dataIndex: "email",
        },
        {
          title: "Phone",
          dataIndex: "phone",
        },
      ],
    },
    {
      title: "Product",
      children: [
        {
          title: "Items",
          render: (data) => {
            const result = JSON.parse(data.products)
            return result.map((res) => <div>{res.name}</div>)
          },
        },
        {
          title: "Qty",
          render: (data) => {
            const result = JSON.parse(data.products)
            return result.map((res) => <div>{res.qty}</div>)
          },
        },
        {
          title: "Unit Price",
          render: (data) => {
            const result = JSON.parse(data.products)
            return result.map((res) => <div>{currencyFormat(res.price)}</div>)
          },
        },
        {
          title: "Total",
          render: (data) => {
            const result = JSON.parse(data.products)
            return result.map((res) => (
              <div>{currencyFormat(res.price * res.qty)}</div>
            ))
          },
        },
        {
          title: "Pay by",
          dataIndex: "payBy",
          key: "payBy",
        },
      ],
    },
    {
      title: "Purchase At",
      dataIndex: "created_at",
      render: (data) => {
        return moment.unix(data / 1000).format("YYYY-MM-DD")
      },
    },
    {
      title: "Action",
      render: (data) => {
        return (
          <Fragment>
            <Popconfirm
              placement="topRight"
              title="Are you sure to delete this payment?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => {
                deleteCustomer({ variables: { id: `${data.id}` } })
                  .then(async (res) => {
                    await message.success(res.data.delete_customer.message)
                    await paymentRefetch()
                  })
                  .catch((error) => {
                    console.log(error)
                    return null
                  })
              }}
            >
              <Tag color="red" style={{ cursor: "pointer" }}>
                Delete
              </Tag>
            </Popconfirm>
          </Fragment>
        )
      },
    },
  ]

  const DisplayPayment = () => {
    if (error) console.log(error)
    if (loading) return <Table loading={true}></Table>
    if (data) {
      return (
        <div>
          <CSVLink data={data.customers}> Download CSV</CSVLink>
          <Table
            bordered
            columns={columns}
            dataSource={data.customers}
            pagination={{ pageSize: 20 }}
          />

          {/* {JSON.stringify(JSON.parse(data.customers[0].products), 0, 2)} */}
        </div>
      )
    }
    return null
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

              {/* <ProductInfo /> */}
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  )
}

export default Payment
