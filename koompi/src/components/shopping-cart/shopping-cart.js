import React, { useState, useContext, useEffect } from "react"
import { Row, Col, Select, Button, Modal, Input, Form } from "antd"
import { CartContext } from "../../CartContext"
import Axios from "axios"
import Cash from "../payments/cash-or-delivery"
import Footer from "../footer"
import Cookies from "js-cookie"
import { FiX } from "react-icons/fi"
import Helmet from "react-helmet"

// import Bongloy from "bongloyjs";

const { Option } = Select

const { confirm } = Modal

const transactionId = Date.now()
const amount = "369"
const firstName = "Loeurt"
const lastName = "Chenda"
const phone = "016884415"
const email = "loeurt.chenda@ababank.com"
const shipping = "2.00"

function Cart(props) {
  const ctx = useContext(CartContext)

  const [visible, setVisible] = useState({
    aba: false
  })
  const [hash, setHash] = useState("")
  const [data, setData] = useState(null)
  const [koompiColor, setKoompiColor] = useState("gray")
  const { getFieldDecorator } = props.form

  const handleTest = async () => {
    // await Axios.post("`http://localhost:8080/helloworld", {
    //   amount: "369",
    //   transactionId: `${transactionId}`
    // })
    window.AbaPayway.checkout()
  }

  useEffect(() => {
    setData(Cookies.getJSON("koompi"))
    Axios.post("http://localhost:8080/payment/option/create", {
      transactionId,
      amount
    })
      .then((res) => {
        setHash(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  const hideModal = () => {
    setVisible(false)
  }

  // ===== Chage KOOMPI Color =====
  // const handleToPink = setKoompiColor("pink")
  // const handleToGray = setKoompiColor("gray")

  const handleABA = (e) => {
    e.preventDefault()

    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // Axios.post("https://payway-staging.ababank.com/api/pwkoompik/", values)
        //   .then(console.log("Start POST Request to ABA ..."))
        //   .catch((e) => console.log(e))
        // window.AbaPayway.checkout()
        // console.log(values)
        console.log("====================================")
        // console.log(window.AbaPayway.checkout())
        console.log("====================================")
      }
    })
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
        setData(null)
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
          {data.map((item, index) => {
            return (
              <div className="shopping-cart" key={index}>
                <div>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Row gutter={16}>
                        <Col span={12}>
                          <img
                            style={{ width: "100%" }}
                            src={
                              koompiColor === "gray"
                                ? item.image[0].image
                                : item.image[1].image
                            }
                            alt=""
                          />
                        </Col>
                        <Col span={12}>
                          <h1>{item.name}</h1>
                          {/* <p className="shopDesc">{item.desc}</p> */}
                          <h4 className="KoompiPRICE">
                            USD <b>${item.price}</b>
                          </h4>
                          Select your favarite color:
                          <Row
                            gutter={16}
                            style={{ width: "100%", marginTop: "20px" }}
                          >
                            <Col span={3}>
                              <div
                                onClick={() => setKoompiColor("gray")}
                                className="speceGrayCircle"
                              ></div>
                            </Col>
                            <Col span={3}>
                              <center>
                                <div
                                  className="roseCircle"
                                  onClick={() => setKoompiColor("pink")}
                                ></div>
                              </center>
                            </Col>
                          </Row>
                          <br />
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
                <Cash />
              </Col>
              <Col span={24}>
                <div className="payment_cart" onClick={handleTest}>
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
                <div className="payment_cart">
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
      </div>
      <br />
      <Footer />

      {/* === Payment === */}

      <div className="container">
        {/* <Form target="aba_webservice" onSubmit={handleABA}>
          <Form.Item label="Hash">
            {getFieldDecorator("hash", {
              rules: [{ required: true, message: "File is required" }],
              initialValue:
                "Oq+rorJQbHQuhsZ6qBaXBign300hAU1XumuLMYk96Sds8iIYA7z+h1CTyYANf63sqQTM3dSmkP84mnttszmfPA=="
            })(<Input size="large" />)}
          </Form.Item>
          <Form.Item label="tran_id">
            {getFieldDecorator("tran_id", {
              rules: [{ required: true, message: "File is required" }],
              initialValue: transactionId
            })(<Input size="large" placeholder="KOOMPI" />)}
          </Form.Item>
          <Form.Item label="amount">
            {getFieldDecorator("amount", {
              rules: [{ required: true, message: "File is required" }],
              initialValue: amount
            })(<Input size="large" placeholder="KOOMPI" />)}
          </Form.Item>
          <Form.Item label="firstname">
            {getFieldDecorator("firstName", {
              rules: [{ required: true, message: "File is required" }],
              initialValue: firstName
            })(<Input size="large" placeholder="KOOMPI" />)}
          </Form.Item>
          <Form.Item label="lastname">
            {getFieldDecorator("lastName", {
              rules: [{ required: true, message: "File is required" }],
              initialValue: lastName
            })(<Input size="large" placeholder="KOOMPI" />)}
          </Form.Item>
          <Form.Item label="phone">
            {getFieldDecorator("phone", {
              rules: [{ required: true, message: "File is required" }],
              initialValue: phone
            })(<Input size="large" placeholder="KOOMPI" />)}
          </Form.Item>
          <Form.Item label="email">
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "File is required" }],
              initialValue: email
            })(<Input size="large" placeholder="KOOMPI" />)}
          </Form.Item>

          <center>
            <Button type="primary" htmlType="submit" className="paymentBtn">
              Submit
            </Button>
          </center>
        </Form>
        <br />
        <br /> */}
      </div>
      <div className="container">
        <div id="aba_main_modal" class="aba-modal">
          <div class="aba-modal-content">
            <form
              method="POST"
              target="aba_webservice"
              action="https://payway-staging.ababank.com/api/pwkoompik/"
              id="aba_merchant_request"
            >
              <input type="text" name="hash" value={hash} id="hash" />
              <input type="text" name="tran_id" value={transactionId} id="tran_id" />
              <input type="text" name="amount" value={amount} id="amount" />
              <input type="text" name="firstname" value={firstName} />
              <input type="text" name="lastname" value={lastName} />
              <input type="text" name="phone" value={phone} />
              <input type="text" name="email" value={email} />
            </form>
          </div>
        </div>
      </div>
      {/* === End Payment */}
    </div>
  )
}

export default Form.create()(Cart)
