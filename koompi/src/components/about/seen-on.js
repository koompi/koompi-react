import React from "react"
import { Carousel, Row } from "antd"
import data from "./data.json"

function SeenOn() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    swipeToSlide: true,
    autoplay: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <div className="seenOn">
      <div className="container">
        <center>
          <h2 className="seenOnTitle">Seen On</h2>
          <Row gutter={[24, 24]}>
            <Carousel {...settings} draggable={true} className="seenOnSlide">
              {data.map((res, index) => {
                return (
                  <div style={{ padding: "10px" }} key={index}>
                    <a href={res.link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={res.logo}
                        alt={res.name}
                        className="img-responsive seenOnImage"
                      />
                    </a>
                  </div>
                )
              })}
            </Carousel>
          </Row>
        </center>
      </div>
    </div>
  )
}

export default SeenOn
