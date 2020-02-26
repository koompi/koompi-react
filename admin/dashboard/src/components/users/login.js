import React, { useState } from "react"
import { Form, Icon, Input, Button, Checkbox, message, notification } from "antd"
import { Link } from "react-router-dom"
import axios from "axios"
import three_dots from "../../assets/img/three-dots.svg"
import Cookie from "js-cookie"
import Particles from "react-particles-js"

function LoginForm(props) {
  const [loading, setLoading] = useState(false)

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: `Hello there!`,
      description:
        "You don't permission to access it yet. Please ask the admin to approve your user.",
      closeIcon: true,
      duration: 10
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values.remember)

        axios
          .post(`https://admin.koompi.com/login`, { ...values })
          .then(async (res) => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 3000)
            Cookie.set(
              "token",
              res.data.token,
              values.remember ? { expires: 7 } : null
            )
            await message.success("Login successfully.", 3)
            window.location.replace("/admin/dashboard")
          })
          .catch((error) => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 3000)
            if (
              error.response.data.message ===
              "You don't have a permission to access it"
            ) {
              openNotificationWithIcon("info")
            } else {
              message.error(error.response.data.message, 10)
            }
          })
      } else {
        console.log(err)
      }
    })
  }

  const { getFieldDecorator } = props.form
  return (
    <div>
      {/* <div className="loginBackground"></div> */}
      <Particles
        className="loginBackground"
        params={{
          particles: {
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
      <div className="loginContainer">
        <h1 className="loginTitle">Login</h1>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Please input your Email!" }]
            })(
              <Input
                size="large"
                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="Email"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Please input your Password!" }]
            })(
              <Input
                size="large"
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            {/* <a className="login-form-forgot" href="">
              Forgot password
            </a> */}
            <br />
            <Button
              size="small"
              type="primary"
              htmlType="submit"
              className="login-form-button"
              disabled={loading ? true : false}
            >
              {loading ? (
                <img src={three_dots} alt="koompi-steam-loading" height="10" />
              ) : (
                "Login"
              )}
            </Button>
            <br />
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Form.create()(LoginForm)
