import React, { useState } from "react"
import { Row, Col, Button, Modal, Input, Form, InputNumber, message } from "antd"
import { FiX } from "react-icons/fi"
import { useMutation } from "@apollo/react-hooks"
import Cookies from "js-cookie"
import phoneValidation from "./phoneValidation"

import { CREATE_CUSTOMER } from "../graphql/mutation"
import Axios from "axios"

function initailState() {
  let initailData = Cookies.getJSON("kp-store-cache")
  return initailData
}

function Cash(props) {
  // ===== State Management =====
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState({ form: false })
  const [createCustomer] = useMutation(CREATE_CUSTOMER)

  const showModal = () => {
    setVisible({ form: true })
  }
  const handleCancel = () => {
    setVisible({ form: false })
  }

  const { getFieldDecorator } = props.form

  const handleSubmit = (e) => {
    e.preventDefault()
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { firstname, lastname, email, products } = values
        if (!phoneValidation(`${values.phone}`)) {
          message.error("Your phone number is invalid")
        } else {
          Axios.post("https://admin.koompi.com/koompi/mail/comfirm-order-items", {
            email,
            firstname,
            lastname,
            items: `${products}`,
          })
            .then((res) => message.success(res.data.message, 5))
            .then(() =>
              createCustomer({
                variables: {
                  ...values,
                  phone: `${values.phone}`,
                  payBy: `Cash`,
                  products: `${values.products}`,
                },
              })
                .then(async () => {
                  setLoading(true)
                  setTimeout(() => {
                    setLoading(false)
                  }, 3000)
                  await props.form.resetFields()
                  // await openNotificationWithIcon(res.data.create_payment.message)
                  await setVisible(false)
                })
                .catch((error) => {
                  console.log(error)
                })
            )
            .catch((e) => {
              console.log(e)
              message.error(e)
            })
        }
      }
    })
  }

  return (
    <React.Fragment>
      <div className="payment_cart" onClick={showModal}>
        <Row gutter={12}>
          <Col span={6}>
            <center>
              <img
                src="/img/riel.png"
                height="28px"
                width="25px"
                alt="koompi pay by Cash"
                className="payByCashImg"
              />
            </center>
          </Col>
          <Col span={18}>
            <div className="PayCashDelivery">{props.cashLang}</div>
            {/* <div>Pay by cash</div> */}
          </Col>
        </Row>
      </div>

      <Modal
        footer={null}
        visible={visible.form}
        onCancel={handleCancel}
        closeIcon={<FiX />}
        className="paymentModal"
      >
        <h2>Pay on delivery</h2>
        <Form onSubmit={handleSubmit}>
          <Row gutter={12}>
            {/* ===== First Name */}
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item label="First Name">
                {getFieldDecorator("firstname", {
                  rules: [{ required: true, message: "First Name is required!" }],
                })(<Input size="large" autoFocus={true} autoComplete="off" />)}
              </Form.Item>
            </Col>
            {/* ===== Last Name */}
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Form.Item label="Last Name">
                {getFieldDecorator("lastname", {
                  rules: [{ required: true, message: "Last Name is required!" }],
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
                  type: "number",
                  message: "The input is not valid number!",
                },
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ],
            })(<InputNumber size="large" autoComplete="off" />)}
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

          <center>
            <Button type="primary" htmlType="submit" className="paymentBtn">
              {loading ? (
                <img
                  src="/img/three-dots.svg"
                  alt="koompi-steam-loading"
                  height="12"
                />
              ) : (
                "Submit"
              )}
            </Button>
          </center>
        </Form>
      </Modal>
    </React.Fragment>
  )
}

export default Form.create()(Cash)
