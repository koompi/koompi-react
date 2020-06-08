import React, { useState, useEffect, useContext } from "react"
import { Row, Col, Button, Modal, Form, Select, Table, Carousel, Icon } from "antd"
import Cash from "../payments/cash-or-delivery"
import Footer from "../footer"
import Cookies from "js-cookie"
import Helmet from "react-helmet"
import AbaPayway from "../payments/aba-payway"
import _ from "lodash"
import { render } from "@testing-library/react"
import Index from "../index"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { CartContext } from "../../CartContext"

const { confirm } = Modal
const { Option } = Select

function currencyFormat(num) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

function initailState() {
  let initailData = Cookies.getJSON("kp-store-cache")
  return initailData
}

function Cart({ history }) {
  const [visible, setVisible] = useState(false)
  const [creditCardVisible, setHandleCreditCardVisible] = useState(false)
  const [data, setData] = useState(initailState)
  const [koompiColor, setKoompiColor] = useState("gray")
  const result = Cookies.getJSON("kp-store-cache")
  const [collapse, setCollapse] = useState(true)
  const cartCtx = useContext(CartContext)

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

  const Collapse = () => {
    setCollapse(!collapse)
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
        // window.location.reload()
      },
      onCancel() {
        console.log("Cancel")
      },
    })
  }

  const columns = [
    {
      title: "Items",
      dataIndex: "name",
    },
    {
      title: "Quantity",
      render: (key, data, index) => {
        return (
          <Select
            defaultValue={data.qty}
            style={{ width: "80px" }}
            onChange={(e) => updateQty(e, index)}
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
      title: "Amount",
      render: (key, data, index) => {
        return currencyFormat(data.price * data.qty)
      },
    },
    {
      title: "Action",
      render: (data) => {
        return <div onClick={() => showDeleteConfirm(data.id)}>Delete</div>
      },
      // render: async () => {
      //   const new_data = data
      //   _.remove(new_data, function (e) {
      //     return e.id === id
      //   })
      //   setData([...new_data])
      //   Cookies.set("kp-store-cache", data)
      //   window.location.reload()
      // },
    },
  ]

  const displayTotal = () => {
    let initialValue = 0
    let sum = data.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.price * currentValue.qty
    }, initialValue)
    return sum
  }

  const DisplayItem = () => {
    return (
      <Row gutter={24}>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <div>
            <Carousel autoplay>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <div className="item-background">
            <Carousel autoplay>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
            <div className="koompi-cart-detail">
              <h2 className="item-title">KOOMPI E11</h2>
              <h3>Price: $369</h3>
              <div className="item-hardware-detail">
                <div className="collapse-div" onClick={Collapse}>
                  <p>
                    {collapse ? "Hide" : "Show"} product details{" "}
                    {collapse ? (
                      <FiChevronUp className="icon" />
                    ) : (
                      <FiChevronDown className="icon" />
                    )}
                  </p>
                </div>
                {collapse && (
                  <div>
                    <p>Hardware</p>
                    <ul>
                      <li>Retina display with True Tone</li>
                      <li>Retina display with True Tone</li>
                      <li>Retina display with True Tone</li>
                      <li>Retina display with True Tone</li>
                      <li>Retina display with True Tone</li>
                    </ul>
                    <p>Software</p>
                    <ul>
                      <li>KOOMPI OS</li>
                    </ul>
                  </div>
                )}
                <center>
                  <div
                    onClick={async () => {
                      cartCtx.addToCart("koompi-e13", 1)
                      window.location.reload()
                    }}
                  >
                    <span className={"buyBtn"}>Pre-Order</span>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <div className="order_summary">
            <dvi>
              <h3 className="order_summary_title">Order Summary</h3>
              <p>Please take a moment to review your order.</p>
              <Table columns={columns} dataSource={data} pagination={false} />
            </dvi>
            {/* {JSON.stringify(
              (id === res.id) === "koompie11" ? { ...data, qty: 2 } : data
            )} */}
            <div className="subTotal">
              <Row gutter={16} className="subtotal">
                <Col span={12}>
                  <h5>Total:</h5>
                </Col>
                <Col span={12}>
                  <h5 style={{ textAlign: "right" }}>
                    {currencyFormat(displayTotal())}
                  </h5>
                </Col>
              </Row>
              <hr className="hrSummary" />

              <h4>Choose a payment to checkout</h4>
            </div>
            <Row gutter={16}>
              <Col span={24}>
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
              <Col span={24}>
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
              <Col span={24}>
                <Cash color={koompiColor} />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    )
  }
  // || data.length === 0
  const DisplayProduct = () => {
    if (data === null || data === undefined) {
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
            // amount={result === undefined ? 0 : result[0].quantity * result[0].price}
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
      <div className="cart-container">
        <DisplayProduct />
      </div>
      <br />
      <Footer />

      {/* === End Payment */}
    </div>
  )
}

export default Form.create()(Cart)
