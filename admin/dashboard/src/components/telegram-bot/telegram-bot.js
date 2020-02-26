import React, { useState } from "react"

import LeftNavbar from "../navbar/left-navbar"
import TopNavbar from "../navbar/top-navbar"
import PageFooter from "../footer"

import three_dots from "../../assets/img/three-dots.svg"
// ===== Antd Section =====
import { Form, Icon, Input, Button, Row, Col, Layout, message } from "antd"
import HandleVerify from "./handle-verify"
import HandleMessage from "./handle-message"
import axios from "axios"

const FormItem = Form.Item
const { Content } = Layout

function TelegramBot(props) {
  const { getFieldDecorator } = props.form

  // ===== State Management =====
  const [loading] = useState(false)
  const [phone, setPhone] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post(`http://127.0.0.1:8000/sendrequest?phone=${phone}`)
      .then(async () => {
        message.success("Hello World")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleChange = (e) => {
    setPhone(e.target.value)
  }

  console.log(phone)

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* =========Left Navbar ======= */}
      <LeftNavbar />
      <Layout>
        {/* =========Top Navbar ======= */}
        <TopNavbar />

        <Content style={{ margin: "20px 16px" }}>
          {/* ======= Display content ====== */}
          <div className="koompi container" style={{ width: "60%" }}>
            <div className="background_container">
              <h1 className="title_new_post">Telegram Bot</h1>
              <div style={{ marginBottom: "24px" }}>
                <h4>Login telegram</h4>
                <Form className="login-form" onSubmit={handleSubmit}>
                  <Row gutter={24}>
                    <Col span={24}>
                      <FormItem>
                        {getFieldDecorator("phone", {
                          rules: [
                            {
                              required: true,
                              message: "The Phone Number is required"
                            }
                          ]
                        })(
                          <Input
                            prefix={
                              <Icon
                                type="font-size"
                                style={{ color: "rgba(0,0,0,.25)" }}
                              />
                            }
                            size="large"
                            placeholder="Phone Number"
                            onChange={handleChange}
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
              </div>
              <div style={{ marginBottom: "24px" }}>
                <HandleVerify phone={phone} />
              </div>
              <div style={{ marginBottom: "24px" }}>
                <HandleMessage phone={phone} />
              </div>
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  )
}

export default Form.create()(TelegramBot)
