import React, { useState } from "react";
import { Row, Col, Layout } from "antd";
import { useQuery } from "@apollo/react-hooks";

import user_img from "../assets/img/user.png";
import LeftNavbar from "./navbar/left-navbar";
import TopNavbar from "./navbar/top-navbar";
import PageFooter from "./footer";

import Chart from "react-apexcharts";

// ===== Query Section =====
import { GET_USERS } from "../graphql/query";

const { Content } = Layout;

function Admin() {
  const UserTotal = () => {
    const { error, loading, data } = useQuery(GET_USERS);
    if (loading) {
      return <p className="card_desc">loading ...</p>;
    }
    if (error) console.log(error);
    if (data) {
      console.log();
      return (
        <div>
          <center>{data.users.length} users</center>
        </div>
      );
    }
  };

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
                    <img src={user_img} alt="user" className="card_icon" />
                  </div>
                  <UserTotal />
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
            <Row gutter={[16, 16]}>
              <Col span={8}>
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
