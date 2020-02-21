import React, { useState, useContext } from "react"
import { Row, Col, Select, Button, Modal, Input, Form } from "antd"
import { CartContext } from "../../CartContext"
import Navbar from "../navbar"
import Axios from "axios"
import Cash from "../payments/cash-or-delivery"
import Footer from "../footer"
import Cookies from "js-cookie"
// import Bongloy from "bongloyjs";

const { Option } = Select

const { confirm } = Modal

function totalPrice(items) {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0)
}

function Cart(props) {
  const ctx = useContext(CartContext)

  const [visible, setVisible] = useState({
    aba: false
  })

  const { getFieldDecorator } = props.form

  const hideModal = () => {
    setVisible(false)
  }

  const handleABA = () => {
    setVisible({ aba: true })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.form.validateFieldsAndScroll((err) => {
      if (!err) {
        var cardObject = {
          number: "6200000000000005",
          exp_month: 12,
          exp_year: 21,
          cvc: 123
        }

        // console.log(values);
        window.Bongloy.setPublishableKey(
          "pk_test_Tbch5Re5EfwhmsZKWqCD0VxTGblcFgGkiWgvp-ivsbk"
        )

        window.Bongloy.createToken("card", cardObject, function(
          statusCode,
          response
        ) {
          if (statusCode === 201) {
            console.log("response", response.id)

            Axios.post("https://admin.koompi.com/charge", {
              bongloyToken: response.id
            }).then(console.log(response))
          } else {
            console.log("err")
          }
        })
      }
    })
  }

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
      },
      onCancel() {
        console.log("Cancel")
      }
    })
  }

  const DisplayItem = () => {
    const result = Cookies.getJSON("koompi")
    return (
      <Row gutter={[16, 16]}>
        <Col span={17}>
          {result.map((item) => {
            return (
              <div className="shopping-cart">
                <div>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Row gutter={16}>
                        <Col span={8}>
                          <img style={{ width: "100%" }} src={item.image} alt="" />
                        </Col>
                        <Col span={16}>
                          <h1>{item.name}</h1>
                          {/* <p className="shopDesc">{item.desc}</p> */}
                          <h4 className="KoompiPRICE">
                            USD <b>${item.price}</b>
                          </h4>
                          <Row gutter={16}>
                            <Col span={12}>
                              <div>
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
                              </div>
                            </Col>
                            <Col span={12}>
                              <Button
                                onClick={showDeleteConfirm}
                                type="danger"
                                className="btnRemove"
                              >
                                Remove
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            )
          })}
        </Col>
        <Col span={7}>
          <div className="order_summary">
            <h3 className="order_summary_title">Order Summary</h3>
            <div className="subTotal">
              <Row gutter={16} className="subtotal">
                <Col span={12}>
                  <h5>Subtotal</h5>
                </Col>
                <Col span={12}>
                  <h5 style={{ textAlign: "right" }}>US ${totalPrice(ctx.items)}</h5>
                </Col>
              </Row>
              <hr className="hrSummary" />
              <Row gutter={16} className="subtotal">
                <Col span={8}>
                  <h3 className="total">Total</h3>
                </Col>
                <Col span={16}>
                  <h3 className="totalPrice">US ${totalPrice(ctx.items)}</h3>
                </Col>
              </Row>
              <h4>Choose a payment to checkout</h4>
            </div>
            <Row gutter={16}>
              <Col span={24}>
                <Cash />
              </Col>
              <Col span={24}>
                <div className="payment_cart" onClick={handleABA}>
                  <img
                    src="/img/master-card.png"
                    height="25px"
                    width="25px"
                    alt=""
                  />{" "}
                  Master/Visa Card
                </div>
              </Col>
              <Col span={24}>
                <div className="payment_cart" onClick={handleABA}>
                  <img src="/img/wing.png" height="25px" width="25px" alt="" /> Wing
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    )
  }

  const DisplayProduct = () => {
    // console.log(Cookies.getJSON("koompi") === undefined)

    if (ctx.items.length === 0 && Cookies.getJSON("koompi") === undefined) {
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
      <Navbar />
      <br />
      <div className="container">
        <DisplayProduct />
      </div>
      <Footer />

      {/* === Payment === */}
      <Modal
        footer={null}
        title="Master/Visa Card"
        visible={visible.aba}
        onCancel={hideModal}
      >
        <Form onSubmit={handleSubmit}>
          <h2 className="payment_title">Personal Information</h2>
          {/* <Form.Item>
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Please input your name!" }]
            })(
              <Input
                size="large"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Name"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("email address", {
              rules: [{ required: true, message: "Please input your email!" }]
            })(
              <Input
                size="large"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("phoneNumber", {
              rules: [
                { required: true, message: "Please input your Phone Number!" }
              ]
            })(
              <Input
                size="large"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Phone Number"
              />
            )}
          </Form.Item> */}

          <h2 className="payment_title">Payment Information</h2>
          <Form.Item label="Card Number">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Please input your name!" }]
            })(<Input size="large" placeholder="1234 1234 1234 1234" />)}
          </Form.Item>
          <Form.Item label="Card Holder Name">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Please input your name!" }]
            })(<Input size="large" placeholder="KOOMPI" />)}
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Expiration Date">
                {getFieldDecorator("name", {
                  rules: [{ required: true, message: "Please input your name!" }]
                })(<Input size="large" placeholder="MM / YY" />)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="CVC Code">
                {getFieldDecorator("name", {
                  rules: [{ required: true, message: "Please input your name!" }]
                })(<Input size="large" placeholder="CVC" />)}
              </Form.Item>
            </Col>
          </Row>
          <center>
            <Button type="primary" htmlType="submit" className="paymentBtn">
              Submit
            </Button>
          </center>
        </Form>
      </Modal>

      {/* === End Payment */}
    </div>
  )
}

export default Form.create()(Cart)
