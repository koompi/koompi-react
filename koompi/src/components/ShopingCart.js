import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { Row, Col, Layout, Card, Select, Button, Modal } from "antd";
import Navbar from "./Navbar";

const { Option } = Select;

const { confirm } = Modal;

const ShopingCart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce(
    (acc, curr) => parseFloat(acc) + parseFloat(curr.price),
    0
  );

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
          <Col span={18}>
            <div className="shopping-cart">
              <center>
                <h1>Your bag total is $2,648.00.</h1>
              </center>
            </div>
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
                        <h1>KOOMPI PRO</h1>
                        <p className="shopDesc">
                          Get up to three years of technical support and
                          accidental damage coverage.
                        </p>
                        <h4 className="KoompiPRICE">
                          USD <b>$369</b>
                        </h4>
                        <Row gutter={16}>
                          <Col span={12}>
                            <div>
                              <span className="quantity">Quantity: </span>
                              <Select
                                defaultValue="1"
                                placeholder="Select a option and change input text above"
                                style={{ width: "80px" }}
                              >
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                              </Select>
                            </div>
                          </Col>
                          <Col span={12}>
                            <Button
                              onClick={showDeleteConfirm}
                              style={{ float: "right" }}
                              type="danger"
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

            {/* {cart.map(data => {
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
                            <h1>KOOMPI PRO</h1>
                            <p>
                              Get up to three years of technical support and
                              accidental damage coverage.
                            </p>
                            <h4>USD $369</h4>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              );
            })} */}
          </Col>
          <Col span={6}>
            <div className="order_summary">
              <h3>Order Summary</h3>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ShopingCart;
