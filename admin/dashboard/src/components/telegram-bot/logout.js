import React, { useState } from "react"

import three_dots from "../../assets/img/three-dots.svg"

// ===== Antd Section =====
import { Form, Icon, Input, Button, Row, Col, message } from "antd"
import axios from "axios"

const FormItem = Form.Item

function TelegramLogout(props) {
  const { getFieldDecorator } = props.form

  // ===== State Management =====
  const [loading] = useState(false)

  const handleVerify = (e) => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        axios
          .post(`https://bot.koompi.com/telegramlogout?phone=${values.phone}`)
          .then(async (res) => {
            message.success(res.data.message)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  }

  return (
    <Form className="login-form" onSubmit={handleVerify}>
      <h4>Logout</h4>
      <Row gutter={12}>
        <Col span={18}>
          <FormItem>
            {getFieldDecorator("phone", {
              rules: [
                {
                  required: true,
                  message: "The Phone Number is required",
                },
              ],
              initialValue: props.phone,
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

export default Form.create()(TelegramLogout)
