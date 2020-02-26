import React, { useState } from "react"
import { Row, Col, Button, Modal, Input, Form, InputNumber, message } from "antd"
import { FiX } from "react-icons/fi"
import { useMutation } from "@apollo/react-hooks"

import { CREATE_PAYMENT } from "../graphql/mutation"
const { TextArea } = Input

function Cash(props) {
  // ===== State Management =====
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState({ form: false })
  const [createPayment] = useMutation(CREATE_PAYMENT)

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
        createPayment({
          variables: {
            ...values,
            phoneNumber: `${values.phoneNumber}`,
            product: ["KOOMPI E13"],
            price: 369.0
          }
        })
          .then(async (res) => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 3000)
            props.form.resetFields()
            await message.success(res.data.create_payment.message, 3)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  }

  return (
    <React.Fragment>
      <div className="payment_cart" onClick={showModal}>
        <img src="/img/riel.png" height="25px" width="25px" alt="" /> Pay later /
        Cash on delivery
      </div>

      <Modal
        footer={null}
        visible={visible.form}
        onCancel={handleCancel}
        closeIcon={<FiX />}
        className="paymentModal"
      >
        <h2>Pay later / Cash on delivery</h2>
        <Form onSubmit={handleSubmit}>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item>
                {getFieldDecorator("fname", {
                  rules: [
                    { required: true, message: "Please input your First Name!" }
                  ]
                })(<Input size="large" placeholder="First Name" autoFocus={true} />)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                {getFieldDecorator("lname", {
                  rules: [
                    { required: true, message: "Please input your Last Name!" }
                  ]
                })(<Input size="large" placeholder="Last Name" />)}
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid email!"
                },
                { required: true, message: "Please input your email!" }
              ]
            })(<Input size="large" placeholder="Email" />)}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("phoneNumber", {
              rules: [
                {
                  required: true,
                  message: "Please input your Phone Number!"
                }
              ]
            })(<InputNumber size="large" placeholder="Phone Number" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("message", {
              rules: [{ required: true, message: "Please input your Phone Number!" }]
            })(<TextArea rows={4} placeholder="Your awesome message" />)}
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
