import React, { useState, useEffect, useContext } from "react";
import {
  Row,
  Col,
  Layout,
  Card,
  Select,
  Button,
  Modal,
  Input,
  Icon,
  Form
} from "antd";
import { CartContext } from "../CartContext";
import Navbar from "./navbar";

// import Bongloy from "bongloyjs";

const { Option } = Select;

const { confirm } = Modal;

function formatPrice(price) {
  return `$${(price * 0.01).toFixed(2)}`;
}

function totalPrice(items) {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0);
}

function Cart(props) {
  const ctx = useContext(CartContext);
  const [visible, setVisible] = useState({
    aba: false
  });

  const { getFieldDecorator } = props.form;

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const handleABA = () => {
    setVisible({ aba: true });
  };

  // =====  Show Delete Comfirm  =====
  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this task?",
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  return (
    <div>
      <Navbar />
      <br />
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col span={17}>
            <div className="shopping-cart">
              <center>
                <h1>Your bag total is ${totalPrice(ctx.items)}.</h1>
                <br />
                <Button type="primary">Check out</Button>
              </center>
            </div>

            {ctx.items.map(item => {
              return (
                <div className="shopping-cart">
                  <div>
                    <Row gutter={16}>
                      <Col span={24}>
                        <Row gutter={16}>
                          <Col span={8}>
                            <img
                              style={{ width: "100%" }}
                              src="https://cdn.vox-cdn.com/thumbor/xgWDnHYZHps8Qn2dJVIdeCBAfd0=/0x0:2000x1500/1200x800/filters:focal(840x590:1160x910)/cdn.vox-cdn.com/uploads/chorus_image/image/66027726/02_Legion_Y740S_Hero_Front_Facing_Left.0.png"
                              alt=""
                            />
                          </Col>
                          <Col span={16}>
                            <h1>{item.name}</h1>
                            <p className="shopDesc">
                              Get up to three years of technical support and
                              accidental damage coverage.
                            </p>
                            <h4 className="KoompiPRICE">
                              USD <b>${item.price}</b>
                            </h4>
                            <Row gutter={16}>
                              <Col span={12}>
                                <div>
                                  <span className="quantity">Quantity: </span>
                                  <Select
                                    value={item.quantity}
                                    placeholder="Select a option and change input text above"
                                    style={{ width: "80px" }}
                                  >
                                    <Option value={1}>1</Option>
                                    <Option value={2}>2</Option>
                                    <Option value={3}>3</Option>
                                    <Option value={4}>4</Option>
                                    <Option value={5}>5+</Option>
                                  </Select>
                                </div>
                              </Col>
                              <Col span={12}>
                                <Button
                                  onClick={showDeleteConfirm}
                                  type="danger"
                                  className="btnRemove"
                                >
                                  Remove
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              );
            })}
          </Col>
          <Col span={7}>
            <div className="order_summary">
              <h3 className="order_summary_title">Order Summary</h3>
              <div className="subTotal">
                <Row gutter={16} className="subtotal">
                  <Col span={12}>
                    <h5>Subtotal</h5>
                  </Col>
                  <Col span={12}>
                    <h5 style={{ textAlign: "right" }}>
                      US ${totalPrice(ctx.items)}
                    </h5>
                  </Col>
                </Row>
                <hr className="hrSummary" />
                <Row gutter={16} className="subtotal">
                  <Col span={8}>
                    <h3 className="total">Total</h3>
                  </Col>
                  <Col span={16}>
                    <h3 className="totalPrice">US ${totalPrice(ctx.items)}</h3>
                  </Col>
                </Row>
                <h4>Choose a payment to checkout</h4>
              </div>
              <Row gutter={16}>
                <Col span={24}>
                  <div className="payment_cart">
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/currency-40/512/cambodian-riel-currency-money-exchange-512. "
                      height="25px"
                      width="25px"
                      alt=""
                    />{" "}
                    Pay later / Cash on delivery
                  </div>
                </Col>
                <Col span={24}>
                  <div className="payment_cart" onClick={handleABA}>
                    <img
                      src="https://brandslogo.net/wp-content/uploads/2016/07/mastercard-vector-logo.png"
                      height="25px"
                      width="25px"
                      alt=""
                    />{" "}
                    Master/Visa Card
                  </div>
                </Col>
                <Col span={24}>
                  <div className="payment_cart" onClick={handleABA}>
                    <img
                      src="https://lh3.googleusercontent.com/aAOBfkMHGEoOvMvLkNYEc7KJ-W863_e42bmyKN9sZmdgYAs39M_SA38bjH4jVDM0jzM"
                      height="25px"
                      width="25px"
                      alt=""
                    />{" "}
                    Wing
                  </div>
                </Col>
                <Col span={24}>
                  <div className="payment_cart" onClick={handleABA}>
                    <img
                      src="http://kirimall.com/img/smartluy.jpg"
                      height="25px"
                      width="25px"
                      alt=""
                    />{" "}
                    SmartLuy
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      {/* === Payment === */}
      <Modal
        footer={null}
        title="Master/Visa Card"
        visible={visible.aba}
        onCancel={hideModal}
      >
        <Form>
          <h2 className="payment_title">Personal Information</h2>
          <Form.Item>
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Please input your name!" }]
            })(
              <Input
                size="large"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Name"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("email address", {
              rules: [{ required: true, message: "Please input your email!" }]
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
            {getFieldDecorator("phoneNumber", {
              rules: [
                { required: true, message: "Please input your Phone Number!" }
              ]
            })(
              <Input
                size="large"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Phone Number"
              />
            )}
          </Form.Item>

          <h2 className="payment_title">Payment Information</h2>
          <Form.Item label="Card Number">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Please input your name!" }]
            })(<Input size="large" placeholder="1234 1234 1234 1234" />)}
          </Form.Item>
          <Form.Item label="Card Holder Name">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Please input your name!" }]
            })(<Input size="large" placeholder="KOOMPI" />)}
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Expiration Date">
                {getFieldDecorator("name", {
                  rules: [
                    { required: true, message: "Please input your name!" }
                  ]
                })(<Input size="large" placeholder="MM / YY" />)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="CVC Code">
                {getFieldDecorator("name", {
                  rules: [
                    { required: true, message: "Please input your name!" }
                  ]
                })(<Input size="large" placeholder="CVC" />)}
              </Form.Item>
            </Col>
          </Row>
          <center>
            <Button type="primary" className="paymentBtn">
              Submit
            </Button>
          </center>
        </Form>
      </Modal>

      {/* === End Payment */}
    </div>
  );
}

export default Form.create()(Cart);
