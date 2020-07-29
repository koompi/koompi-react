import React, { useState } from "react"
import { Row, Col, Modal, Form, Select, Tag, Table } from "antd"
import Footer from "../footer"
import Cookies from "js-cookie"
import Helmet from "react-helmet"
import AbaPayway from "../payments/aba-payway"
import CashOrDelivery from "../payments/cash-or-delivery"
import _ from "lodash"
import { useTranslation } from "react-i18next"

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
  const { i18n } = useTranslation()

  // Language Context
  const lang = i18n.language

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
      onOk: () => {
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
      title: lang === "en" ? "Image" : "រូបភាព",
      dataIndex: "image",
      render: (data) => {
        return <img src={data} alt={data} height="40px" />
      },
    },
    {
      title: lang === "en" ? "Items" : "ប្រភេទទំនិញ",
      dataIndex: "name",
      responsive: ["md"],
    },
    {
      title: lang === "en" ? "Purchasing Type" : "ប្រភេទទិញ",
      dataIndex: "purchasingType",
      render: (data) => {
        return !data ? "Buy" : "Pre-Order"
      },
    },

    {
      title: lang === "en" ? "Quantity" : "បរិមាណ",
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
      title: lang === "en" ? "Unit Price" : "តម្លៃ​ឯកតា",
      dataIndex: "price",
      render: (data) => currencyFormat(data),
    },
    {
      title: lang === "en" ? "Amount" : "តម្លៃសរុប",
      render: (data) => currencyFormat(data.qty * data.price),
    },
    {
      title: lang === "en" ? "Action" : "សកម្មភាព",
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
  // const displayTotalDeposit = () => {
  //   let initialValue = 0
  //   let sum = data.reduce(function (accumulator, currentValue) {
  //     return accumulator + currentValue.deposit * currentValue.qty
  //   }, initialValue)
  //   return sum
  // }

  const DisplayItem = () => {
    return (
      <React.Fragment>
        <h2 className="yourShopping">
          {lang === "en" ? "Your shopping cart:" : "បញ្ជីរទំនិញ"}{" "}
        </h2>
        <Table
          scroll={{ x: true }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
        <div className="shoppingCartContainer">
          <Row gutter={[20, 20]}>
            {/* <Col xs={24} sm={24} md={16} lg={16} xl={16}>
              <p className="koompiSummary">
                <b>{lang === "en" ? "Order Summary" : "សង្ខេបការបញ្ជាទិញ"}</b>
              </p>
              <div className="kp-cart">
                <p>
                  {lang === "en" ? "Total" : "សរុប"}:{" "}
                  <b>{currencyFormat(displayTotal())}</b>
                </p>
                <p>
                  {lang === "en" ? "Total Deposit" : "ប្រាក់កក់សរុប"}:{" "}
                  <b>{currencyFormat(displayTotalDeposit())}</b>
                </p>
                <p>
                  {lang === "en" ? "Total remain" : "ប្រាក់ដែលត្រូវបង់បន្ថែម"}:{" "}
                  <b>{currencyFormat(displayTotal() - displayTotalDeposit())}</b>
                </p>
                <div className="pp-back"></div>
              </div>
            </Col> */}
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <p className="koompiSummary">
                <b>{lang === "en" ? "Payment Options" : "ជម្រើសទូទាត់ប្រាក់"}</b>
              </p>
              <Row gutter={[24, 24]}>
                <Col span={8}>
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
                </Col>
                <Col span={8}>
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
                </Col>
                <Col span={8}>
                  <CashOrDelivery cashLang={lang === "en" ? "Cash" : "សាច់ប្រាក់"} />
                </Col>
              </Row>
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
            amount={displayTotal()}
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
          content="KOOMPI, together with KOOMPI OS, are value-added learning and productivity tools built upon the acclaimed Linux operating system."
        />
        <meta
          name="description"
          content="KOOMPI, together with KOOMPI OS, are value-added learning and productivity tools built upon the acclaimed Linux operating system."
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
