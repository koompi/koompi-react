import React, { useState, useEffect } from "react"
import { Row, Col, Button, Modal, Form } from "antd"
import Cash from "../payments/cash-or-delivery"
import Footer from "../footer"
import Cookies from "js-cookie"
import Helmet from "react-helmet"
import AbaPayway from "../payments/aba-payway"

const { confirm } = Modal

function Cart() {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState(null)
  const [koompiColor, setKoompiColor] = useState("gray")
  const result = Cookies.getJSON("koompi")

  const handleCancle = () => {
    setVisible(false)
  }

  const handleOk = () => {
    setVisible(false)
  }
  const handleVisible = () => {
    setVisible(true)
  }

  useEffect(() => {
    setData(Cookies.getJSON("koompi"))
  }, [])

  // =====  Show Delete Comfirm  =====
  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this task?",
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        Cookies.remove("koompi")
        setData(null)
      },
      onCancel() {
        console.log("Cancel")
      }
    })
  }

  const DisplayItem = () => {
    return (
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={17} xl={17}>
          {data.map((item, index) => {
            return (
              <div className="shopping-cart" key={index}>
                <div>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Row gutter={16}>
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
                              USD <b>${item.price}</b>
                            </h4>
                            <Row gutter={16}>
                              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                <h6 style={{ fontSize: "18px" }}>
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
                                {/* <div>
                                <span className="quantity">Quantity: </span>
                                <Select
                                  value={item.quantity}
                                  placeholder="Select a option and change input text above"
                                  style={{ width: "80px" }}
                                >
                                  <Option value={1}>1</Option>
                                  <Option value={2}>2</Option>
                                  <Option value={3}>3</Option>
                                  <Option value={4}>4</Option>
                                  <Option value={5}>5+</Option>
                                </Select>
                              </div> */}
                              </Col>
                              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                                <Button
                                  onClick={showDeleteConfirm}
                                  type="danger"
                                  className="btnRemove"
                                >
                                  Remove
                                </Button>
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
        <Col xs={24} sm={24} md={24} lg={7} xl={7}>
          <div className="order_summary">
            <h3 className="order_summary_title">Order Summary</h3>
            <div className="subTotal">
              <Row gutter={16} className="subtotal">
                <Col span={12}>
                  <h5>Subtotal</h5>
                </Col>
                <Col span={12}>
                  <h5 style={{ textAlign: "right" }}>US ${result[0].price}</h5>
                  {/* <h5 style={{ textAlign: "right" }}>US ${totalPrice(ctx.items)}</h5> */}
                </Col>
                <Col span={12}>
                  <h5>Quantity</h5>
                </Col>
                <Col span={12}>
                  <h5 style={{ textAlign: "right" }}>{result[0].quantity}</h5>
                  {/* <h5 style={{ textAlign: "right" }}>US ${totalPrice(ctx.items)}</h5> */}
                </Col>
              </Row>
              <hr className="hrSummary" />
              <Row gutter={16} className="subtotal">
                <Col span={8}>
                  <h3 className="total">Total</h3>
                </Col>
                <Col span={16}>
                  <h3 className="totalPrice">
                    US ${result[0].quantity * result[0].price}
                  </h3>
                </Col>
              </Row>
              <h4>Choose a payment to checkout</h4>
            </div>
            <Row gutter={16}>
              <Col span={24}>
                <Cash color={koompiColor} />
              </Col>
              <Col span={24}>
                <div className="payment_cart" onClick={handleVisible}>
                  <img
                    src="/img/master-card.png"
                    height="25px"
                    width="25px"
                    alt="master card"
                  />
                  Master/Visa Card
                </div>
              </Col>
              {/* <Col span={24}>
                <div className="payment_cart">
                  <img src="/img/wing.png" height="25px" width="25px" alt="" /> Wing
                </div>
              </Col> */}
            </Row>
          </div>
        </Col>
      </Row>
    )
  }

  const DisplayProduct = () => {
    // console.log(Cookies.getJSON("koompi") === undefined)

    if (data === null || data === undefined) {
      return (
        <center>
          <div className="emptyCart">
            <img src="/img/shopping-cart.svg" alt="shopping-cart" height="150px" />
            <h2 className="bagIsEmpty">Your bag is empty.</h2>
          </div>
        </center>
      )
    } else return <DisplayItem />
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
      </Helmet>
      <br />
      <div className="container">
        <DisplayProduct />
        <AbaPayway
          visible={visible}
          handleOk={handleOk}
          handleCancle={handleCancle}
          amount={result === undefined ? 0 : result[0].quantity * result[0].price}
          color={koompiColor}
        />
      </div>
      <br />
      <Footer />

      {/* === End Payment */}
    </div>
  )
}

export default Form.create()(Cart)
