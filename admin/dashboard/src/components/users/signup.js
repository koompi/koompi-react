import React, { useState } from "react"
import { Form, Icon, Input, Button, message } from "antd"
import { Link } from "react-router-dom"
import { useMutation } from "@apollo/react-hooks"
import three_dots from "../../assets/img/three-dots.svg"
import Particles from "react-particles-js"

// ===== Create User =====
import { CREATE_USER } from "../../graphql/mutation"

function SignupForm(props) {
  const [createUser] = useMutation(CREATE_USER)

  // ===== State Section =====
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    props.form.validateFields(async (err, values) => {
      if (!err) {
        const { fullname, email, password } = values
        await createUser({
          variables: {
            fullname,
            email,
            password
          }
        })
          .then(async () => {
            setLoading(true)
            await message.success("Register Successfully.", 3)
            await window.location.replace("/login")
          })
          .catch((error) => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 3000)
            let err = JSON.parse(JSON.stringify(error))
            message.error(err.graphQLErrors[0].message)
          })
      } else {
        console.log(err)
      }
    })
  }

  const { getFieldDecorator } = props.form
  return (
    <>
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
        <h1 className="loginTitle">Register</h1>
        <Form onSubmit={handleSubmit} className="login-form">
          {/* Full Name */}
          <Form.Item>
            {getFieldDecorator("fullname", {
              rules: [{ required: true, message: "Please input your Full Name!" }]
            })(
              <Input
                size="large"
                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="Full Name"
              />
            )}
          </Form.Item>

          {/* Email */}
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

          {/* Password */}
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

          {/* Remember Me */}
          <Form.Item>
            {/* Button Submit */}
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
                "Sign Up"
              )}
            </Button>
            <br />
            Have an account? <Link to="/login">Login</Link>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default Form.create()(SignupForm)
