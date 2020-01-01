import React from "react";
import { Row, Col, Layout } from "antd";
import user_img from "../assets/img/user.png";
import LeftNavbar from "./navbar/left-navbar";
import TopNavbar from "./navbar/top-navbar";
import PageFooter from "./footer";

const { Content } = Layout;

function Admin() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* =========Left Navbar ======= */}
      <LeftNavbar />
      <Layout>
        <Content>
          {/* =========Top Navbar ======= */}
          <TopNavbar />

          <div style={{ padding: "0px 50px " }}>
            {/* ======= Display content ====== */}
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <div className="card_back">
                  <div className="icons_back">
                    <img src={user_img} alt="user" className="card_icon" />
                  </div>
                  <p className="card_desc">1000 users</p>
                </div>
              </Col>
              <Col span={6}>
                <div className="card_back">Hello World</div>
              </Col>
              <Col span={6}>
                <div className="card_back">Hello World</div>
              </Col>
              <Col span={6}>
                <div className="card_back">Hello World</div>
              </Col>
            </Row>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  );
}

export default Admin;
