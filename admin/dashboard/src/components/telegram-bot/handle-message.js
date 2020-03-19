import React, { useState } from "react"
import three_dots from "../../assets/img/three-dots.svg"

// ===== Antd Section =====
import { Form, Icon, Input, Button, Row, Col, message } from "antd"
import TextArea from "antd/lib/input/TextArea"
import axios from "axios"
import "react-mde/lib/styles/css/react-mde-all.css"

const FormItem = Form.Item

function HandleMessage(props) {
  const { getFieldDecorator } = props.form

  // ===== State Management =====
  const [loading] = useState(false)

  const handleMessage = (e) => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      console.log(err)

      if (!err) {
        console.log(values)

        axios
          .post(
            `http://127.0.0.1:8000/telegrammsg?phone=${values.phone}&channel=${values.channel}&msg=${values.msg}`
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
    <div style={{ marginBottom: "24px" }}>
      <h4>Send a telegram</h4>
      <Form className="login-form" onSubmit={handleMessage}>
        <Row gutter={12}>
          <Col span={12}>
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

          <Col span={12}>
            <FormItem>
              {getFieldDecorator("channel", {
                rules: [
                  {
                    required: true,
                    message: "The Channel is required"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="font-size" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  size="large"
                  placeholder="Channel"
                />
              )}
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem>
              {getFieldDecorator("msg", {
                rules: [
                  {
                    required: true,
                    message: "The message is required"
                  }
                ]
              })(<TextArea rows={5}></TextArea>)}
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
    </div>
  )
}

export default Form.create()(HandleMessage)
