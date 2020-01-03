import React, { useState } from "react";
import { Row, Col } from "antd";
import {
  content,
  Layout,
  Button,
  Menu,
  Dropdown,
  Breadcrumb,
  Icon
} from "antd";

const { Header, Content, Footer } = Layout;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">KOOMPI PRO</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">KOOMPI E</a>
    </Menu.Item>
    {/* <Menu.Divider />
        <Menu.Item key="3">KOOMPI OS</Menu.Item> */}
  </Menu>
);
function Index() {
  return (
    <React.Fragment>
      <div className="banner">
        <Content style={{ padding: "100px" }}>
          <Row>
            <Col sm={12}>
              <center>
                <h1>KOOMPI PRO</h1>
                <p className="text-container text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>

                <Dropdown overlay={menu} trigger={["click"]}>
                  <Button>
                    Button <Icon type="down" />
                  </Button>
                </Dropdown>
              </center>
            </Col>
            <Col sm={12}>
              <center>
                <img className="laptop-img" src="./img/laptop.webp"></img>
              </center>
            </Col>
          </Row>
        </Content>
      </div>
      <div className="content1">
        <center>
          <h1>KOOMPI E11</h1>
          <p className="text-container-content1 text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <div className="readmore">
            <a href="#"> Read More</a>
          </div>
          {/* <img className="laptop-img" src="./img/laptop.webp"></img> */}
        </center>
        <div className="banner1">he</div>
      </div>
    </React.Fragment>
  );
}

export default Index;
