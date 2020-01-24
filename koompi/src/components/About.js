import React, { useState } from "react";
import { Row, Col, Typography, Card } from "antd";
import Navbar from "./navbar";
import Footer from "./footer";
const { Title, Paragraph, Text } = Typography;

function About() {
  const [state, setState] = useState([
    {
      id: 0,
      name: "Rithy THUL",
      position: "PR and Partnership",
      image: "img/team/rithy.png",
      category: 1
    },
    {
      id: 1,
      name: "Sela THUL",
      position: "Linux Developer",
      image: "img/team/sela.png",
      category: 2
    },
    {
      id: 3,
      name: "Hongsea HENG",
      position: "Junior System Engineer",
      image: "img/team/Hongsea.png",
      category: 2
    },
    {
      id: 4,
      name: "Veasna MA",
      position: "Linux Developer",
      image: "img/team/veasna.png",
      category: 2
    },
    {
      id: 5,
      name: "Sereyvathana AING",
      position: "Linux Developer",
      image: "img/team/Chheng.png",
      category: 2
    },
    {
      id: 6,
      name: "Brilliant PHAL",
      position: "Linux Administrator",
      image: "img/team/brillaint.png",
      category: 2
    },
    {
      id: 7,
      name: "Lykheang MOEURN",
      position: "Backend Developer",
      image: "img/team/lykhhean.png",
      category: 2
    },
    {
      id: 8,
      name: "Nath LAY ",
      position: "Backend Developer",
      image: "img/team/net.png",
      category: 2
    },
    {
      id: 9,
      name: "Vuthy SAN",
      position: "Full Stack Web Developer",
      image: "img/team/vuthy_san.png",
      category: 2
    },
    {
      id: 10,
      name: "Sovanden SARIM ",
      position: "Frontend Web Developer",
      image: "img/team/Den.png",
      category: 2
    },
    {
      id: 11,
      name: "Sophal LOEM",
      position: "Web Designer",
      image: "img/team/sophal.png",
      category: 2
    },
    // {
    //   id: 12,
    //   name: "Sovannchornai SO",
    //   position: "Web Designer",
    //   image: "img/team/chorernai.png",
    //   category: 2
    // },
    {
      id: 13,
      name: "Shenshing LY",
      position: "Research and Development (Pionium)",
      image: "img/team/Shing.png",
      category: 2
    },
    {
      id: 14,
      name: "Thith THIN",
      position: "Research and Development (Pionium)",
      image: "img/team/Thith.png",
      category: 2
    },
    {
      id: 15,
      name: "Kalin LEOB",
      position: "Research and Development (Pionium)",
      image: "img/team/Kalin.png",
      category: 2
    },
    {
      id: 16,
      name: "Sophim PHIN",
      position: "Mobile Developer",
      image: "img/team/Phim.png",
      category: 2
    },
    {
      id: 17,
      name: "Panha Sok",
      position: "Graphic Designer",
      image: "img/team/panha.png",
      category: 2
    },
    {
      id: 18,
      name: "Chandara VIREAK",
      position: "Head of Design",
      image: "img/team/dara.png",
      category: 2
    },
    {
      id: 19,
      name: "Visai TRY ",
      position: "Technician",
      image: "img/team/sai.png",
      category: 3
    },
    {
      id: 20,
      name: "Sivyean SUY",
      position: "Technician",
      image: "img/team/sivyean.png",
      category: 3
    },
    {
      id: 21,
      name: "Mesa MENG",
      position: "Technician",
      image: "img/team/Mesa.png",
      category: 3
    },
    {
      id: 22,
      name: "Makara SANN",
      position: "Facilitator",
      image: "img/team/Makra.png",
      category: 4
    },
    {
      id: 23,
      name: "Kimhong HIENG",
      position: "Mathematician",
      image: "img/team/Hong.png",
      category: 4
    },
    {
      id: 24,
      name: "Phearin HAY",
      position: "KOOMPI FORCE Content Producer",
      image: "img/team/Phearin.png",
      category: 4
    },
    {
      id: 25,
      name: "Panha YOU",
      position: "Sale & Marketing Manager",
      image: "img/team/panha_you.png",
      category: 5
    },
    {
      id: 26,
      name: "Sreyneang SOKHA",
      position: "Sale & Marketing",
      image: "img/team/sreyneang.png",
      category: 5
    },
    {
      id: 27,
      name: "Raksme VEN",
      position: "Accountant",
      image: "img/team/reaksmie.png",
      category: 5
    },
    {
      id: 28,
      name: "Sofy THY",
      position: "Business Development officer",
      image: "img/team/sofy.png",
      category: 6
    },
    {
      id: 29,
      name: "Monika VIRAK",
      position: "Community Manager",
      image: "img/team/Molika.png",
      category: 6
    },
    {
      id: 30,
      name: "Hengsrun SEANG",
      position: " Communication & Marketing ",
      image: "img/team/Srun.png",
      category: 6
    }
  ]);
  const businessDev = state.filter(user => user.category === 1);
  const softwareTeam = state.filter(user => user.category === 2);
  const hardwareTeam = state.filter(user => user.category === 3);
  const steamTeam = state.filter(user => user.category === 4);
  const saleTeam = state.filter(user => user.category === 5);
  const communicationTeam = state.filter(user => user.category === 6);

  return (
    <React.Fragment>
      <Navbar />
      <div className="backgroud-about">
        <div className="container">
          <Row className="Row-about" gutter={[48, 0]}>
            <Col sm={12}>
              <Title>About Us</Title>
              <Paragraph className="about-paragraph">
                KOOMPI is a practical, affordable and effective entry-level
                notebook computer specifically designed for performing all daily
                tasks required for work and school.
                <br></br>
                <br></br>
                We've created a customized operating system of our own called
                PionuxOS based on the well-known open-source Linux software.
              </Paragraph>
            </Col>
            <Col sm={12}>
              <img
                style={{ maxWidth: "100%" }}
                src="/img/undraw_work_together_h63l.svg"
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className="container top-sections">
        <center>
          <Title>What we believe</Title>
          <Paragraph className="text-container about-paragraph">
            KOOMPI is a practical, affordable and effective entry-level notebook
            computer specifically designed for performing all daily tasks
            required for work and school.
          </Paragraph>
        </center>
        <div className="text-container what-we-do">
          <Row gutter={[48, 0]}>
            <Col sm={8}>
              <Card className="ant-cart-border">
                <Title level={3}>Education</Title>
                <Paragraph>
                  We've created a customized operating system of our own called
                  PionuxOS based on the well-known
                </Paragraph>
              </Card>
            </Col>
            <Col sm={8}>
              <Card className="ant-cart-border">
                <Title level={3}>Buesness</Title>
                <Paragraph>
                  We've created a customized operating system of our own called
                  PionuxOS based on the well-known
                </Paragraph>
              </Card>
            </Col>
            <Col sm={8}>
              <Card className="ant-cart-border">
                <Title level={3}>Technology</Title>
                <Paragraph>
                  We've created a customized operating system of our own called
                  PionuxOS based on the well-known
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <center style={{ marginTop: "130px" }}>
        <Title>Meet Our Team</Title>
      </center>
      <div className="container">
        <div className="boss-of-about">
          {businessDev.map(members => (
            <div className="">
              <center>
                <h2 style={{ fontWeight: "700" }}>Business Development</h2>
                <Row>
                  <Col sm={8}>
                    <img className="veasna-pic" src={members.image}></img>
                    <h3 className="name-of-memeber">{members.name}</h3>
                    <p>{members.position}</p>
                  </Col>
                </Row>
              </center>
            </div>
          ))}
        </div>
        <div>
          <center>
            <h2 className="title-big-name">HardWare Team</h2>
          </center>
          {hardwareTeam.map(members => (
            <div className="">
              <center>
                <Row type="3">
                  <Col sm={8}>
                    <img className="veasna-pic" src={members.image}></img>
                    <h3 className="name-of-memeber">{members.name}</h3>
                    <p>{members.position}</p>
                  </Col>
                </Row>
              </center>
            </div>
          ))}
        </div>

        <div>
          <center>
            <h2 className="title-big-name">Koompi FORCE</h2>
          </center>
          {steamTeam.map(members => (
            <div className="">
              <center>
                <Row type="3">
                  <Col sm={8}>
                    <img className="veasna-pic" src={members.image}></img>
                    <h3 className="name-of-memeber">{members.name}</h3>
                    <p>{members.position}</p>
                  </Col>
                </Row>
              </center>
            </div>
          ))}
        </div>

        <div>
          <center>
            <h2 className="title-big-name">Sales and Supplier Relation</h2>
          </center>
          {saleTeam.map(members => (
            <div className="">
              <center>
                <Row type="3">
                  <Col sm={8}>
                    <img className="veasna-pic" src={members.image}></img>
                    <h3 className="name-of-memeber">{members.name}</h3>
                    <p>{members.position}</p>
                  </Col>
                </Row>
              </center>
            </div>
          ))}
        </div>

        <div>
          <center>
            <h2 className="title-big-name">Communication and Marketing</h2>
          </center>
          {communicationTeam.map(members => (
            <div className="">
              <center>
                <Row type="3">
                  <Col sm={8}>
                    <img className="veasna-pic" src={members.image}></img>
                    <h3 className="name-of-memeber">{members.name}</h3>
                    <p>{members.position}</p>
                  </Col>
                </Row>
              </center>
            </div>
          ))}
        </div>

        <div>
          <center>
            <h2 className="title-big-name">SoftWare Teams</h2>
          </center>
          {softwareTeam.map(members => (
            <div className="">
              <center>
                <Row type="4">
                  <Col sm={6}>
                    <img className="veasna-pic" src={members.image}></img>
                    <h3 className="name-of-memeber">{members.name}</h3>
                    <p>{members.position}</p>
                  </Col>
                </Row>
              </center>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
