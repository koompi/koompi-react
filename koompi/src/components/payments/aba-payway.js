import React, { useState, useEffect } from "react"
import { Row, Col, Button, Modal, Input, Form, InputNumber, message } from "antd"
import Axios from "axios"
import { useMutation } from "@apollo/react-hooks"
import { CREATE_CUSTOMER } from "../graphql/mutation"
import { FiX } from "react-icons/fi"
import phoneValidation from "./phoneValidation"
import Cookies from "js-cookie"

function initailState() {
  let initailData = Cookies.getJSON("kp-store-cache")
  return initailData
}

function AbaPayway({
  visible,
  form,
  handleOk,
  handleCancle,
  amount,
  color,
  paymentOption,
}) {
  const { getFieldDecorator } = form
  const [createCustomer] = useMutation(CREATE_CUSTOMER)
  const [loading, setLoading] = useState(false)

  //   ===== State Management =====
  const [abaData, setAbaData] = useState({
    transactionId: Date.now(),
    amount: amount,
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  })
  const [hash, setHash] = useState("")

  useEffect(() => {
    const { transactionId, amount } = abaData
    Axios.post("https://admin.koompi.com/payment/option/create", {
      transactionId,
      amount,
    })
      .then((res) => {
        setHash(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [abaData])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await form.validateFieldsAndScroll(async (err, values) => {
      const { firstname, lastname, phone, email } = values
      if (!phoneValidation(`${values.phone}`)) {
        message.error("Your phone number is invalid")
      } else {
        if (!err) {
          await setAbaData({ firstname, lastname, phone, email })
          await window.AbaPayway.checkout()
          console.log(values)
          await createCustomer({
            variables: {
              ...values,
              phone: `${values.phone}`,
              products: `${values.products}`,
            },
          })
            .then(async () => {
              setLoading(true)
              setTimeout(() => {
                setLoading(false)
              }, 3000)
              form.resetFields()
            })
            .catch((error) => {
              console.log(error)
            })
        }
      }
    })
  }

  return (
    <div>
      {/* =====  ABA FORM ===== */}
      <div className="container">
        <div id="aba_main_modal" className="aba-modal">
          <div className="aba-modal-content">
            <form
              method="POST"
              target="aba_webservice"
              action="https://payway.ababank.com/api/pwkoompik/"
              id="aba_merchant_request"
            >
              <input type="text" name="hash" defaultValue={hash} id="hash" />
              <input
                type="text"
                name="tran_id"
                defaultValue={abaData.transactionId}
                id="tran_id"
              />
              <input
                type="text"
                name="amount"
                defaultValue={abaData.amount}
                id="amount"
              />
              <input type="text" name="firstname" defaultValue={abaData.firstname} />
              <input type="text" name="lastname" defaultValue={abaData.lastname} />
              <input type="text" name="phone" defaultValue={abaData.phone} />
              <input type="text" name="email" defaultValue={abaData.email} />
              <input
                type="hidden"
                name="payment_option"
                defaultValue={paymentOption}
              />
            </form>
          </div>
        </div>
      </div>
      {/* ===== End ABA FORM ===== */}
      <Modal
        title={null}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancle}
        closeIcon={<FiX />}
        className="abaPaywayModal paymentModal"
        footer={false}
      >
        <Form onSubmit={handleSubmit}>
          <h2>Enter your personal information</h2>
          {/* ===== Hash Data =====*/}
          <Form.Item label="Hash" className="formDisplayNone">
            {getFieldDecorator("hash", {
              rules: [{ required: true, message: "This field is required!" }],
              initialValue: hash,
            })(<Input size="large" />)}
          </Form.Item>

          {/* ===== Transition ID =====*/}
          <Form.Item label="tran_id" className="formDisplayNone">
            {getFieldDecorator("tran_id", {
              rules: [{ required: true, message: "This field is required!" }],
              initialValue: abaData.transactionId,
            })(<Input size="large" />)}
          </Form.Item>

          {/* ===== Amount =====*/}
          <Form.Item label="amount" className="formDisplayNone">
            {getFieldDecorator("amount", {
              rules: [{ required: true, message: "This field is required!" }],
              initialValue: abaData.amount,
            })(<Input size="large" />)}
          </Form.Item>

          {/* ===== Pay By =====*/}
          <Form.Item label="payBy" className="formDisplayNone">
            {getFieldDecorator("payBy", {
              rules: [{ required: true, message: "This field is required!" }],
              initialValue: paymentOption === "abapay" ? "ABA Pay" : "Credit Card",
            })(<Input size="large" />)}
          </Form.Item>

          <Form.Item label="Products" style={{ display: "none" }}>
            {getFieldDecorator("products", {
              rules: [
                {
                  required: true,
                  message: "Please input your products!",
                },
              ],
              initialValue: JSON.stringify(initailState()),
            })(<Input size="large" autoComplete="off" />)}
          </Form.Item>

          <Row gutter={12}>
            {/* ===== First Name */}
            <Col span={12}>
              <Form.Item label="First Name">
                {getFieldDecorator("firstname", {
                  rules: [{ required: true, message: "This field is required!" }],
                })(<Input size="large" autoFocus={true} autoComplete="off" />)}
              </Form.Item>
            </Col>
            {/* ===== Last Name */}
            <Col span={12}>
              <Form.Item label="Last Name">
                {getFieldDecorator("lastname", {
                  rules: [{ required: true, message: "This field is required!" }],
                })(<Input size="large" autoComplete="off" />)}
              </Form.Item>
            </Col>
          </Row>

          {/* ===== Email */}
          <Form.Item label="Email">
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid email!",
                },
                {
                  required: true,
                  message: "Please input your email!",
                },
              ],
            })(<Input size="large" autoComplete="off" />)}
          </Form.Item>

          {/* ===== Phone Number */}
          <Form.Item label="Phone Number">
            {getFieldDecorator("phone", {
              rules: [
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ],
            })(<InputNumber size="large" autoComplete="off" />)}
          </Form.Item>

          <center>
            <Button type="primary" htmlType="submit" className="paymentBtn">
              {loading ? "Processing..." : "Next"}
            </Button>
          </center>
        </Form>
      </Modal>
    </div>
  )
}

export default Form.create()(AbaPayway)
