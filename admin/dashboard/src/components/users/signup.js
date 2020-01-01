import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

function SignupForm(props) {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      } else {
        console.log(err);
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
      <div className="loginContainer">
        <h1 className="loginTitle">Register</h1>
        <Form onSubmit={handleSubmit} className="login-form">
          {/* Full Name */}
          <Form.Item>
            {getFieldDecorator("fullname", {
              rules: [
                { required: true, message: "Please input your Full Name!" }
              ]
            })(
              <Input
                size="large"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
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
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
              />
            )}
          </Form.Item>

          {/* Password */}
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                size="large"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>

          {/* Remember Me */}
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <br />
            {/* Button Submit */}
            <Button
              size="small"
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Submit
            </Button>
            <br />
            Have an account? <Link to="/login">Login</Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Form.create()(SignupForm);
