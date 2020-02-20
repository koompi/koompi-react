import React, { useState } from "react"
import { Row, Col, Button, Modal, Input, Form } from "antd"

const { TextArea } = Input

function Cash(props) {
  const [visible, setVisible] = useState({ form: false })

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
      console.log(values)
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
        title="Pay later / Cash on delivery"
        visible={visible.form}
        onCancel={handleCancel}
      >
        <Form onSubmit={handleSubmit}>
          <Row gutter={12}>
            <Col span={12}>
              <Form.Item>
                {getFieldDecorator("fname", {
                  rules: [
                    { required: true, message: "Please input your First Name!" }
                  ]
                })(<Input size="large" placeholder="First Name" />)}
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
            {getFieldDecorator("email address", {
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
              rules: [{ required: true, message: "Please input your Phone Number!" }]
            })(<Input size="large" placeholder="Phone Number" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("phoneNumber", {
              rules: [{ required: true, message: "Please input your Phone Number!" }]
            })(<TextArea rows={4} placeholder="Your awesome message" />)}
          </Form.Item>
          <center>
            <Button type="primary" htmlType="submit" className="paymentBtn">
              Submit
            </Button>
          </center>
        </Form>
      </Modal>
    </React.Fragment>
  )
}

export default Form.create()(Cash)
