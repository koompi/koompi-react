import React from "react";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginForm(props) {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        axios.post(`http://localhost:8080/login`, { ...values }).then(req => {
          message.success("Login successfully.");
          console.log(req.headers);
        });
      } else {
        console.log(err);
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <>
      <div className="loginContainer">
        <h1 className="loginTitle">Login</h1>
        <Form onSubmit={handleSubmit} className="login-form">
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
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <br />
            <Button
              size="small"
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <br />
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Form.create()(LoginForm);
