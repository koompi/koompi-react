import React, { useState } from "react"
import { Row, Col, Modal, Form, Select, Tag, Table } from "antd"
import Footer from "../footer"
import Cookies from "js-cookie"
import Helmet from "react-helmet"
import AbaPayway from "../payments/aba-payway"
import CashOrDelivery from "../payments/cash-or-delivery"

import _ from "lodash"

const { confirm } = Modal
const { Option } = Select

function currencyFormat(num) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

function initailState() {
  let initailData = Cookies.getJSON("kp-store-cache")
  return initailData
}

function Cart() {
  const [visible, setVisible] = useState(false)
  const [creditCardVisible, setHandleCreditCardVisible] = useState(false)
  const [data, setData] = useState(initailState)
  const [koompiColor] = useState("gray")
  const [, setQty] = useState(1)

  const handleCancle = () => {
    setVisible(false)
  }

  const handleOk = () => {
    setVisible(false)
  }

  const handleVisible = () => {
    setVisible(true)
  }

  const handleCardCancle = () => {
    setHandleCreditCardVisible(false)
  }

  const handleCardOk = () => {
    setHandleCreditCardVisible(false)
  }

  const handleCreditCardVisible = () => {
    setHandleCreditCardVisible(true)
  }

  const updateQty = (value, index) => {
    let new_data = data
    new_data[index].qty = value
    setData([...new_data])
    Cookies.set("kp-store-cache", JSON.stringify(data))
  }

  // =====  Show Delete Comfirm  =====
  const showDeleteConfirm = (id) => {
    confirm({
      title: "Are you sure delete this item?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        const new_data = data
        _.remove(new_data, function (e) {
          return e.id === id
        })
        setData([...new_data])
        Cookies.set("kp-store-cache", data)
        window.location.reload()
      },
      onCancel() {
        console.log("Cancel")
      },
    })
  }

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (data) => {
        return <img src={data} alt={data} height="40px" />
      },
    },
    {
      title: "Items",
      dataIndex: "name",
      responsive: ["md"],
    },
    {
      title: "Purchasing Type",
      dataIndex: "purchasingType",
      render: (data) => {
        return !data ? "Buy" : "Pre-Order"
      },
    },

    {
      title: "Quantity",
      dataIndex: "qty",
      render: (key, data, index) => {
        return (
          <Select
            defaultValue={data.qty}
            onChange={(e) => {
              updateQty(e, index)
              setQty(data.qty)
            }}
            style={{ width: "80px" }}
          >
            <Option value={1}>1</Option>
            <Option value={2}>2</Option>
            <Option value={3}>3</Option>
            <Option value={4}>4</Option>
            <Option value={5}>5</Option>
            <Option value={6}>6</Option>
            <Option value={7}>7</Option>
            <Option value={8}>8</Option>
            <Option value={9}>9</Option>
            <Option value={10}>10</Option>
          </Select>
        )
      },
    },
    {
      title: "Unit Price",
      dataIndex: "price",
      render: (data) => currencyFormat(data),
    },
    {
      title: "Deposit",
      render: (data) => {
        if (data.id === "koompie11") return currencyFormat(10)
        else return currencyFormat(369)
      },
    },
    {
      title: "Deposit Amount",
      render: (data) => {
        if (data.id === "koompie11") return currencyFormat(10 * data.qty)
        else return currencyFormat(369 * data.qty)
      },
    },
    {
      title: "Amount",
      render: (data) => currencyFormat(data.qty * data.price),
    },
    {
      title: "Action",
      render: (data) => {
        return (
          <div onClick={() => showDeleteConfirm(data.id)}>
            <Tag color="#f50">Remove</Tag>
          </div>
        )
      },
    },
  ]

  const displayTotal = () => {
    let initialValue = 0
    let sum = data.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.price * currentValue.qty
    }, initialValue)
    return sum
  }
  const displayTotalDeposit = () => {
    let initialValue = 0
    let sum = data.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.deposit * currentValue.qty
    }, initialValue)
    return sum
  }

  const DisplayItem = () => {
    return (
      <React.Fragment>
        <h2 className="yourShopping">Your shopping cart: </h2>
        <Table
          scroll={{ x: true }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
        <div className="shoppingCartContainer">
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
              <p className="koompiSummary">
                <b>Order Summary</b>
              </p>
              <div className="kp-cart">
                <p>
                  Total: <b>{currencyFormat(displayTotal())}</b>
                </p>
                <p>
                  Total Deposit: <b>{currencyFormat(displayTotalDeposit())}</b>
                </p>
                <p>
                  Total remain:{" "}
                  <b>{currencyFormat(displayTotal() - displayTotalDeposit())}</b>
                </p>
                <div className="pp-back"></div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <p className="koompiSummary">
                <b>Choose a payment to checkout</b>
              </p>
              <div className="payment_cart" onClick={handleCreditCardVisible}>
                <Row gutter={12}>
                  <Col span={6}>
                    <img
                      src="/img/payments/creditcard.png"
                      height="30px"
                      alt="master card"
                      className="mastercard"
                    />
                  </Col>
                  <Col span={18}>
                    <div className="CreditDebitCard">Credit/Debit Card</div>
                    <img
                      src="/img/payments/A-3Card_2x.png"
                      height="15px"
                      alt="Credit/Debit Card"
                    />
                  </Col>
                </Row>
              </div>
              <div className="payment_cart" onClick={handleVisible}>
                <Row gutter={12}>
                  <Col span={6}>
                    <img
                      src="/img/payments/aba-pay.svg"
                      height="30px"
                      alt="master card"
                      className="mastercard"
                    />
                  </Col>
                  <Col span={18}>
                    <div className="CreditDebitCard">ABA PAY</div>
                    <div>Scan to pay with ABA mobile</div>
                  </Col>
                </Row>
              </div>
              <CashOrDelivery />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
  // || data.length === 0
  const DisplayProduct = () => {
    if (data === null || data === undefined || data.length === 0) {
      return (
        <center>
          <div className="emptyCart">
            <img src="/img/shopping-cart.svg" alt="shopping-cart" height="150px" />
            <h2 className="bagIsEmpty">Your bag is empty.</h2>
          </div>
        </center>
      )
    } else
      return (
        <React.Fragment>
          <DisplayItem />
          <AbaPayway
            visible={visible ? visible : creditCardVisible}
            handleOk={visible ? handleOk : handleCardOk}
            handleCancle={visible ? handleCancle : handleCardCancle}
            amount={displayTotalDeposit()}
            color={koompiColor}
            paymentOption={visible ? "abapay" : "cards"}
          />
        </React.Fragment>
      )
  }
  return (
    <div>
      <Helmet>
        <title>Bag - KOOMPI</title>
        <meta
          name="keywords"
          content="KOOMPI, KOOMPI Bag, KOOMPI OS, KOOMPI ACADEMY, KHMER LAPTOP,koompi e13, koompi laptop, koompi computer, koompi os, koompi review"
        />
        <meta
          name="description"
          content="Immerse yourself into endless possibilities. Start with the classic KOOMPI, the E13. Built-in integrated software suite. Lightweight and compact."
        />
        <link rel="canonical" href="https://koompi.com/shop/bag" />
      </Helmet>
      <br />
      <div className="container">
        <DisplayProduct />
      </div>
      <br />
      <Footer />

      {/* === End Payment */}
    </div>
  )
}

export default Form.create()(Cart)
