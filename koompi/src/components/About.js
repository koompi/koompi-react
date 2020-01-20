import React, { useState } from "react";
import { Row, Col, Typography, Card } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer";
const { Title, Paragraph, Text } = Typography;

function About() {
  const [state, setState] = useState([
    {
      id: 0,
      name1: "Rithy THUL",
      position1: "PR and Partnership",
      image1: "img/rithy.png",
      category: 1
    },
    {
      id: 1,
      name2: "Sela THUL",
      position2: "Linux Developer",
      image2: "img/sela.png",
      category: 2
    },
    {
      id: 3,
      name4: "Hongsea HENG",
      position4: "Junior System Engineer",
      image4: "img/Hongsea.png",
      category: 2
    },
    {
      id: 4,
      name5: "Veasna MA",
      position5: "Linux Developer",
      image5: "img/veasna.png",
      category: 2
    },
    {
      id: 5,
      name6: "Sereyvathana AING",
      position6: "Linux Developer",
      image6: "img/Chheng.png",
      category: 2
    },
    {
      id: 6,
      name7: "Brilliant PHAL",
      position7: "Linux Administrator",
      image7: "img/brillaint.png",
      category: 2
    },
    {
      id: 7,
      name8: "Lykheang MOEURN",
      position8: "Backend Developer",
      image8: "img/lykhhean.png",
      category: 2
    },
    {
      id: 8,
      name9: "Nath LAY ",
      position9: "Backend Developer",
      image9: "img/net.png",
      category: 2
    },
    {
      id: 9,
      name10: "Vuthy SAN",
      position10: "Full Stack Web Developer",
      image10: "img/vuthy_san.png",
      category: 2
    },
    {
      id: 10,
      name11: "Sovanden SARIM ",
      position11: "Frontend Web Developer",
      image11: "img/Den.png",
      category: 2
    },
    {
      id: 11,
      name12: "Sophal LOEM",
      position12: "Web Designer",
      image12: "img/sophal.png",
      category: 2
    },
    {
      id: 12,
      name13: "Sovannchornai SO",
      position13: "Web Designer",
      image13: "img/chorernai.png",
      category: 2
    },
    {
      id: 13,
      name14: "Shenshing LY",
      position14: "Research and Development (Pionium)",
      image14: "img/Shing.png",
      category: 2
    },
    {
      id: 14,
      name15: "Thith THIN",
      position15: "Research and Development (Pionium)",
      image15: "img/Thith.png",
      category: 2
    },
    {
      id: 15,
      name16: "Kalin LEOB",
      position16: "Research and Development (Pionium)",
      image16: "img/Kalin.png",
      category: 2
    },
    {
      id: 16,
      name17: "Sophim PHIN",
      position17: "Mobile Developer",
      image17: "img/Phim.png",
      category: 2
    },
    {
      id: 17,
      name18: "Panha Sok",
      position18: "Graphic Designer",
      image18: "img/panha.png",
      category: 2
    },
    {
      id: 18,
      name19: "Chandara VIREAK",
      position19: "Head of Design",
      image19: "img/dara.png",
      category: 2
    },
    {
      id: 19,
      name20: "Visai TRY ",
      position20: "Technician",
      image20: "img/sai.png",
      category: 3
    },
    {
      id: 20,
      name21: "Sivyean SUY",
      position21: "Technician",
      image21: "img/sivyean.png",
      category: 3
    },
    {
      id: 21,
      name22: "Mesa MENG",
      position22: "Technician",
      image22: "img/Mesa.png",
      category: 3
    },
    {
      id: 22,
      name23: "Makara SANN",
      position23: "Facilitator",
      image23: "img/Makra.png",
      category: 4
    },
    {
      id: 23,
      name24: "Kimhong HIENG",
      position24: "Mathematician",
      image24: "img/Hong.png",
      category: 4
    },
    {
      id: 24,
      name25: "Phearin HAY",
      position25: "KOOMPI FORCE Content Producer",
      image25: "img/Phearin.png",
      category: 4
    },
    {
      id: 25,
      name26: "Panha YOU",
      position26: "Sale & Marketing Manager",
      image26: "img/panha_you.png",
      category: 5
    },
    {
      id: 26,
      name27: "Sreyneang SOKHA",
      position27: "Sale & Marketing",
      image27: "img/sreyneang.png",
      category: 5
    },
    {
      id: 27,
      name28: "Raksme VEN",
      position28: "Accountant",
      image28: "img/reaksmie.png",
      category: 5
    },
    {
      id: 28,
      name29: "Sofy THY",
      position29: "Business Development officer",
      image29: "img/sofy.png",
      category: 6
    },
    {
      id: 29,
      name30: "Monika VIRAK",
      position30: "Community Manager",
      image30: "img/Molika.png",
      category: 6
    },
    {
      id: 30,
      name31: "Hengsrun SEANG",
      position31: " Communication & Marketing ",
      image31: "img/Srun.png",
      category: 6
    }
  ]);
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
      <div>
        <center>
          <Title>Meet Our Team</Title>
        </center>

        {/* <Title level={3}>HardWare Teams</Title>
      <Row>
        <Col sm={8}>
          <img className="veasna-pic" src="/img/veasna.png" />
          <Title level={4}>Ma Veasna</Title>
          <Paragraph>Linux </Paragraph>
        </Col>
        <Col sm={8}>
          <img className="veasna-pic" src="/img/veasna.png" />
          <Title level={4}>Ma Veasna</Title>
          <Paragraph>Linux </Paragraph>
        </Col>
        <Col sm={8}>
          <img className="veasna-pic" src="/img/veasna.png" />
          <Title level={4}>Ma Veasna</Title>
          <Paragraph>Linux </Paragraph>
        </Col>
      </Row> */}
        {state.map(members => (
          <div className="text-container">
            <Row gutter={[48, 0]}>
              <Col sm={8}>
                <img className="veasna-pic" src={members.image1}></img>
                <h3>{members.name1}</h3>
                <p>{members.position1}</p>
              </Col>
              <Col sm={8}>
                <img className="veasna-pic" src={members.image1}></img>
                <h3>{members.name1}</h3>
                <p>{members.position1}</p>
              </Col>
              <Col sm={8}>
                <img className="veasna-pic" src={members.image1}></img>
                <h3>{members.name1}</h3>
                <p>{members.position1}</p>
              </Col>
            </Row>
          </div>
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default About;
