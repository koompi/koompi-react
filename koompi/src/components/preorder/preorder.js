import React, { useState, useEffect } from "react"
import { Row, Col, Button, Modal, Input, Form, InputNumber, message } from "antd"
import { FiX } from "react-icons/fi"
import { useMutation } from "@apollo/react-hooks"

import { CREATE_PAYMENT } from "../graphql/mutation"
import Footer from "../footer"
import { useRecaptcha, Badge } from "react-recaptcha-hook"
import Axios from "axios"

const { TextArea } = Input

function PreOrder(props) {
  // ===== State Management =====
  const [loading, setLoading] = useState(false)

  const { getFieldDecorator } = props.form

  const handleSubmit = (e) => {
    e.preventDefault()
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
      }
    })
  }

  return (
    <React.Fragment>
      <div className="container-preoder">
        <h2>Pre-Order KOOMPI E11</h2>
        <p>
          number of units Rich Text HTML Copy Lorem ipsum dolor sit amet consectetur
          adipiscing elit fermentum vehicul.
        </p>
        <Form onSubmit={handleSubmit}>
          <Row gutter={12}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item>
                {getFieldDecorator("firstname", {
                  rules: [
                    { required: true, message: "Please input your First Name!" },
                  ],
                })(<Input size="large" placeholder="First Name" autoFocus={true} />)}
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item>
                {getFieldDecorator("lastname", {
                  rules: [
                    { required: true, message: "Please input your Last Name!" },
                  ],
                })(<Input size="large" placeholder="Last Name" />)}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item>
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Phone Number!",
                    },
                  ],
                })(
                  <InputNumber
                    size="large"
                    placeholder="Phone Number"
                    style={{ width: "100%", padding: "0px 10px" }}
                  />
                )}
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid email!",
                    },
                    { required: true, message: "Please input your email!" },
                  ],
                })(<Input size="large" placeholder="Email" />)}
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <TextArea rows={4} placeholder="Your awesome message" />
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
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Form.create()(PreOrder)
