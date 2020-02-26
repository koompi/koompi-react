import React, { useState } from "react"

import three_dots from "../../assets/img/three-dots.svg"

// ===== Antd Section =====
import { Form, Icon, Input, Button, Row, Col, message } from "antd"
import axios from "axios"

const FormItem = Form.Item

function HandleVerify(props) {
  const { getFieldDecorator } = props.form

  // ===== State Management =====
  const [loading] = useState(false)

  const handleVerify = (e) => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        axios
          .post(
            `http://127.0.0.1:8000/telegramlogin?phone=${
              values.phone
            }&code=${parseInt(values.code)}`
          )
          .then(async () => {
            message.success("Hello World")
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  }

  return (
    <Form className="login-form" onSubmit={handleVerify}>
      <Row gutter={24}>
        <Col span={18}>
          <FormItem>
            {getFieldDecorator("phone", {
              rules: [
                {
                  required: true,
                  message: "The Phone Number is required"
                }
              ],
              initialValue: props.phone
            })(
              <Input
                prefix={
                  <Icon type="font-size" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="Phone Number"
              />
            )}
          </FormItem>
        </Col>

        <Col span={6}>
          <FormItem>
            {getFieldDecorator("code", {
              rules: [
                {
                  required: true,
                  message: "The Code is required"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="font-size" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="Code"
              />
            )}
          </FormItem>
        </Col>

        <Col span={24}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="btnSubmit"
            disabled={loading ? true : false}
          >
            {loading ? (
              <img src={three_dots} alt="btn-loading" height="10" />
            ) : (
              "Submit"
            )}
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default Form.create()(HandleVerify)
