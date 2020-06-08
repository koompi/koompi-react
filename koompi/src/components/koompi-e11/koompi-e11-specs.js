import React from "react"
import { Row, Col } from "antd"
import SubNavbar from "./subNavbar"
import Footer from "../footer"
import parse from "html-react-parser"
import ScrollAnimation from "react-animate-on-scroll"

const dataSpacs = [
  {
    title: "Operating System",
    desc: "<p>KOOMPI OS</p>",
  },
  {
    title: "Processor",
    desc: "<p>Intel Celeron N3350, Dual Cores</p>",
  },
  {
    title: "Storage",
    desc: "<p>eMMC 128GB</p>",
  },

  {
    title: "Memory",
    desc: "<p>4GB</p>",
  },
  {
    title: "Display",
    desc: ` <p>Screen Size: 11.6 inches</p>
            <p>Screen Type: IPS Anti-Glare</p>
            <p>Resolution: 1920 x 1080</p>
            <p>Screen-To-Body Ratio: 73.44%</p>
            <p>Aspect Ratio: 16:9</p>
    `,
  },
  {
    title: "Dimension and Weight",
    desc: ` <p>Width:    190.3mm</p>
            <p>Height:    277mm</p>
            <p>Slim:    16.9mm</p>
            <p>Weight:    0.93kg</p>
          `,
  },
  {
    title: "Material",
    desc: "<p>Full Aluminum alloy</p>",
  },
  {
    title: "Colour",
    desc: "<p>Blue</p>",
  },

  {
    title: "WebCam",
    desc: "<p>0.3MP</p>",
  },
  {
    title: "Audio",
    desc: "<p>Built-in 1W Stereo Speaker *2</p>",
  },
  {
    title: "Battery",
    desc: "<p>Li-polymer battery 5000mAH up to 8H</p>",
  },
]
function Koompi_E_Spec() {
  return (
    <div>
      <SubNavbar title="KOOMPI E11" />
      <div className="spec-background">
        <div className="container">
          <ScrollAnimation animateIn="fadeIn">
            {dataSpacs.map((res, index) => {
              if (index % 2 === 0) {
                return (
                  <div style={{ padding: "5px 0px" }} className="specsBackground1">
                    <Row gutter={12} type="flex">
                      <Col xs={24} sm={12} md={8} lg={7} xl={7}>
                        <h2 className="spacTitle">{res.title}</h2>
                      </Col>
                      <Col xs={24} sm={12} md={16} lg={17} xl={17}>
                        <div className="specDesc">{parse(res.desc)}</div>
                      </Col>
                    </Row>
                  </div>
                )
              } else {
                return (
                  <div className="specsBackground2" style={{ padding: "5px 0px" }}>
                    <Row gutter={12} type="flex">
                      <Col xs={24} sm={12} md={8} lg={7} xl={7}>
                        <h2 className="spacTitle">{res.title}</h2>
                      </Col>
                      <Col xs={24} sm={12} md={16} lg={17} xl={17}>
                        <div className="specDesc">{parse(res.desc)}</div>
                      </Col>
                    </Row>
                  </div>
                )
              }
            })}
          </ScrollAnimation>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Koompi_E_Spec
