import React, { useState } from "react";
import { Row, Col, Layout } from "antd";

import LeftNavbar from "./navbar/left-navbar";
import TopNavbar from "./navbar/top-navbar";
import PageFooter from "./footer";
import { UserTotal } from "./data/admin";

import Chart from "react-apexcharts";

const { Content } = Layout;

function Admin() {
  const [chart, setChart] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00",
          "2018-09-19T01:30:00",
          "2018-09-19T02:30:00",
          "2018-09-19T03:30:00",
          "2018-09-19T04:30:00",
          "2018-09-19T05:30:00",
          "2018-09-19T06:30:00"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    }
  });

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
                    <img
                      src="/images/icons/User.svg"
                      alt="user"
                      className="card_icon"
                    />
                  </div>
                  <UserTotal />
                </div>
              </Col>
              <Col span={6}>
                <div className="card_back">
                  <div className="icons_back">
                    <img
                      src="/images/icons/Post.svg"
                      alt="user"
                      className="card_icon"
                    />
                  </div>
                  <UserTotal />
                </div>
              </Col>
              <Col span={6}>
                <div className="card_back">
                  <div className="icons_back">
                    <img
                      src="/images/icons/Page.svg"
                      alt="user"
                      className="card_icon"
                    />
                  </div>
                  <UserTotal />
                </div>
              </Col>
              <Col span={6}>
                <div className="card_back">
                  <div className="icons_back">
                    <img
                      src="/images/icons/Retailers.svg"
                      alt="user"
                      className="card_icon"
                    />
                  </div>
                  <UserTotal />
                </div>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <h5>KOOMPI </h5>
                <div className="card_back">
                  <Chart
                    series={chart.series}
                    options={chart.options}
                    type="area"
                  ></Chart>
                </div>
              </Col>
              <Col span={8}>
                <div className="card_back">
                  <Chart
                    series={chart.series}
                    options={chart.options}
                    type="line"
                  ></Chart>
                </div>
              </Col>
              <Col span={8}>
                <div className="card_back">
                  <Chart
                    series={chart.series}
                    options={chart.options}
                    type="area"
                  ></Chart>
                </div>
              </Col>
            </Row>
          </div>

          <div></div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  );
}

export default Admin;
