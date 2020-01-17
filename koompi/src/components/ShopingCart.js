import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Layout, Card, Select, Button, Modal } from "antd";
import { CartContext } from "../CartContext";
import Navbar from "./Navbar";

const { Option } = Select;

const { confirm } = Modal;

function formatPrice(price) {
  return `$${(price * 0.01).toFixed(2)}`;
}

function totalPrice(items) {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0);
}

export default function Cart({ stripeToken }) {
  const [stripe, setStripe] = useState(null);
  const ctx = useContext(CartContext);

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

  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe(stripeToken));
  }, [stripeToken]);

  function checkout() {
    stripe.redirectToCheckout({
      products: ctx.items.map(item => ({
        quantity: item.quantity,
        sku: item.sku
      })),
      successUrl: "https://your-website.com/success",
      cancelUrl: "https://your-website.com/canceled"
    });
  }

  return (
    <div>
      <Navbar />
      <br />
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col span={24}>
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
          {/* <Col span={7}>
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
              </div>
              <Button type="danger" className="btnBuy">
                Buy
              </Button>
            </div>
          </Col> */}
        </Row>
      </div>
    </div>
  );
}
