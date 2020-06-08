import React, { useState, useEffect, useContext } from "react"
import { Row, Col, Button, Modal, Form, Select, Table } from "antd"
import Cash from "../payments/cash-or-delivery"
import Footer from "../footer"
import Cookies from "js-cookie"
import Helmet from "react-helmet"
import AbaPayway from "../payments/aba-payway"
// import CashOrDelivery from "../payments/cash-or-delivery"

import { CartContext } from "../../CartContext"
import _ from "lodash"
import { render } from "@testing-library/react"
import Index from "../index"
import { FiX } from "react-icons/fi"

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
  const [qty, setQty] = useState(0)
  const result = Cookies.getJSON("kp-store-cache")

  const handleCloseModal = () => {
    setVisible(false)
  }
  const handleOpenModal = () => {
    setVisible(true)
  }

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
      title: "Items",
      dataIndex: "name",
      responsive: ["md"],
    },
    {
      title: "Quantity",
      responsive: ["md"],
      render: (key, data, index) => {
        return (
          <Select
            defaultValue={data.qty}
            style={{ width: "80px" }}
            onChange={(e) => {
              updateQty(e, index)
              setQty(data.qty)
            }}
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
      responsive: ["md"],
      render: (key, data, index) => {
        return currencyFormat(data.price * data.qty)
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

  const DisplayItem = () => {
    return (
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={16} xl={16}>
          {data.map((item, index) => {
            if (item.id === "koompie11") {
              return (
                <div className="shopping-cart" key={index}>
                  <div>
                    <Row gutter={16}>
                      <FiX
                        onClick={() => showDeleteConfirm(item.id)}
                        type="danger"
                        className="btnRemove"
                      />
                      <Col span={24}>
                        <Row gutter={16}>
                          <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                            <img
                              style={{ width: "100%" }}
                              src={item.image[0].image}
                              alt="koompi color"
                            />
                          </Col>
                          <Col xs={24} sm={24} md={24} lg={14} xl={14}>
                            <div className="shoppingCart_title">
                              <h1>{item.name}</h1>
                              {/* <p className="shopDesc">{item.desc}</p> */}
                              <h4 className="KoompiPRICE">
                                <b>{currencyFormat(item.price)}</b>
                              </h4>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              )
            }

            return (
              <div className="shopping-cart" key={index}>
                <div>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Row gutter={16}>
                        <FiX
                          onClick={() => showDeleteConfirm(item.id)}
                          type="danger"
                          className="btnRemove"
                        />
                        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
                          <img
                            style={{ width: "100%" }}
                            src={
                              koompiColor === "gray"
                                ? item.image[0].image
                                : item.image[1].image
                            }
                            alt="koompi color"
                          />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={14} xl={14}>
                          <div className="shoppingCart_title">
                            <h1>{item.name}</h1>
                            {/* <p className="shopDesc">{item.desc}</p> */}
                            <h4 className="KoompiPRICE">
                              <b>{currencyFormat(item.price)}</b>
                            </h4>

                            <Row gutter={16}>
                              <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                                <h6 style={{ fontSize: "16px" }}>
                                  Select your favorite color:{" "}
                                </h6>
                                <div className="switch-koompi-container-shopping-cart">
                                  <Row gutter={16}>
                                    <Col span={12}>
                                      <div
                                        className="speceGrayCircle"
                                        onClick={() => setKoompiColor("gray")}
                                      ></div>
                                    </Col>
                                    <Col span={12}>
                                      <div
                                        className="roseCircle"
                                        onClick={() => setKoompiColor("rose-gold")}
                                      ></div>
                                    </Col>
                                  </Row>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            )
          })}
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
              {qty === 10 && (
                <p className="contactUs">
                  Please contact use vai this email: koompi.com@gmail.com
                </p>
              )}
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
                <div className="payment_cart" onClick={handleOpenModal}>
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
                <div className="payment_cart" onClick={handleOpenModal}>
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
            handleOk={handleCloseModal}
            handleCancle={handleCloseModal}
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
