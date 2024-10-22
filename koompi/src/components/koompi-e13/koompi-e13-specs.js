import React, { useEffect } from "react"
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
    desc: "<p>Intel® Celeron CPU N4100 Processor</p>",
  },
  {
    title: "Storage",
    desc: "<p>M2 SATA3 SSD 128GB / 256GB </p>",
  },

  {
    title: "Memory",
    desc: "<p>8GB DDR4</p>",
  },
  {
    title: "Display",
    desc: ` <p>Screen Size: 13.3 inches</p>
            <p>Screen Type: IPS Anti-Glare</p>
            <p>Resolution: 1920 x 1080</p>
            <p>Screen-To-Body Ratio: 73.44%</p>
            <p>Aspect Ratio: 16:9</p>
    `,
  },
  {
    title: "Dimension and Weight",
    desc: ` <p>Width    318mm</p>
            <p>Height    210mm</p>
            <p>Depth    14.2mm</p>
            <p>Weight    1.28kg</p>
          `,
  },
  {
    title: "Material",
    desc: "<p>Full Aluminum alloy</p>",
  },
  {
    title: "Colour",
    desc: "<p>Rose Gold / Space Grey</p>",
  },

  {
    title: "WebCam",
    desc: "<p>0.3MP</p>",
  },
  {
    title: "Audio",
    desc: "<p>Built-in 1W Stereo Speaker</p>",
  },
  {
    title: "Battery",
    desc: "<p>Li-polymer battery 5000mAH</p>",
  },
]
function Koompi_E_Spec(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <SubNavbar title="KOOMPI E13" history={props.history} />
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
