import React, { useState } from "react";
import { Row, Col } from "antd";
import { Player, ControlBar } from "video-react";
import Modal from "react-responsive-modal";
import { BackTop } from "antd";
import Particles from "react-particles-js";
import { useQuery } from "@apollo/react-hooks";
import EditorJs from "react-editor-js";
import parse from "html-react-parser";
import {
  content,
  Layout,
  Button,
  Menu,
  Dropdown,
  Breadcrumb,
  Icon
} from "antd";
import Navbar from "./navbar";
import { Typography, Divider } from "antd";
import { GET_PAGES } from "./graphql/query";

const { Title, Paragraph, Text } = Typography;

const { Header, Content, Footer } = Layout;
const koompiPro = [{ img: "/img/Macbook.png" }];
const koompiE11 = [{ img: "/img/0.png" }];

function renderHTML(data) {
  let result = ``;
  for (let block of JSON.parse(data).blocks) {
    switch (block.type) {
      case "paragraph":
        result += `<p>${block.data.text}</p>`;
        break;
      case "header":
        result += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
        break;
    }
  }
  return result;
}

function Index() {
  const [state, setState] = useState(koompiPro);
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={() => setState(koompiE11)}>KOOMPI E11</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">KOOMPI B14</a>
      </Menu.Item>
      <Menu.Item key="3">KOOMPI B15</Menu.Item>
    </Menu>
  );

  const [stateModal, setStateModal] = useState([{ open: true }]);
  const onOpenModal = () => {
    setStateModal({ open: true });
  };
  const onCloseModal = () => {
    setStateModal({ open: false });
  };
  const { open } = stateModal;

  const Display_Frist_Section = () => {
    const { error, loading, data } = useQuery(GET_PAGES);
    if (error) console.log(error);
    if (loading) return "loading ...";
    if (data) {
      const res = renderHTML(data.pages[0].description);

      return (
        <>
          <h1 className="bossTittle-KoompiHome">{data.pages[0].title}</h1>
          <p className="text-koompi-section-banner">{parse(res)}</p>
        </>
      );
    }
  };

  return (
    <React.Fragment>
      <Navbar />

      <div className="banner">
        <div className="PhnomPenh"></div>
        <div className="container">
          <Row>
            <Col sm={12}>
              <center>
                <div className="banner_content">
                  {/* ========= KOOMPI SECTION =========  */}
                  <Display_Frist_Section />

                  <Dropdown overlay={menu} trigger={["click"]}>
                    <Button
                      className="btn-banner"
                      onClick={() => setState(koompiPro)}
                    >
                      KOOMPI PRO <Icon type="down" />
                    </Button>
                  </Dropdown>
                  <a className="readmore-a">Read More</a>
                  <div style={{ marginTop: "20px", cursor: "pointer" }}>
                    <h3 onClick={onOpenModal}>
                      <Icon type="play-circle" /> Watch The Video
                    </h3>
                    <Modal
                      styles={{
                        modal: {
                          maxWidth: "unset",
                          width: "1300px",
                          // height: '500px',
                          padding: "unset"
                        },
                        overlay: {
                          background: "rgba(0, 0, 0, 0.5)"
                        },
                        closeButton: {
                          background: "white",
                          borderRadius: "45px",
                          // color: 'white',
                          cursor: "pointer"
                        }
                      }}
                      open={open}
                      onClose={onCloseModal}
                      center
                    >
                      <Player autoPlay src="/video/khmersongs.mp4">
                        <ControlBar autoHide={false} className="my-class" />
                      </Player>
                    </Modal>
                  </div>
                </div>
              </center>
            </Col>
            <Col sm={12}>
              <center>
                {state.map(states => (
                  <div className="index_banner">
                    <img src={states.img}></img>
                  </div>
                ))}
              </center>
            </Col>
          </Row>
        </div>
      </div>

      {/* =============Big Section ===============*/}
      <div className="content1">
        <Particles
          className="banner1"
          params={{
            particles: {
              number: {
                value: 50
              },
              size: {
                value: 3
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
        />
        <div className="koompi_section_position">
          <center>
            <div className="koompi_content">
              <h1 className="tittle-koompiPro-banner">KOOMPI E11</h1>
              <p className="text-container-content1 text-koompiePro-banner">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
              <div>
                <Button type="primary" className="read_more">
                  Read More
                </Button>
              </div>
            </div>
            <div className="subBanner-koompiPro">
              <img src="/img/Macbook.png" />
            </div>
          </center>
        </div>
      </div>
      <div className="content1">
        <Particles
          className="banner2"
          params={{
            particles: {
              number: {
                value: 120,
                density: {
                  enable: true,
                  value_area: 1500
                }
              },
              line_linked: {
                enable: true,
                opacity: 0.02
              },
              move: {
                direction: "right",
                speed: 0.05
              },
              size: {
                value: 1
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05
                }
              }
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push"
                }
              },
              modes: {
                push: {
                  particles_nb: 1
                }
              }
            },
            retina_detect: true
          }}
        />
        <div className="koompi_section_position">
          <center>
            <div className="koompi_content">
              <h1 className="tittle-koompiPro-banner">KOOMPI E11</h1>
              <p className="text-container-content1 text-koompiePro-banner">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
              <div>
                <Button type="primary" className="read_more">
                  Read More
                </Button>
              </div>
            </div>
            <div className="subBanner-koompiPro">
              <img src="/img/Macbook.png" />
            </div>
          </center>
        </div>
      </div>
      {/* <div className="content1">
        <div className="banner1">
          <center>
            <div className="container">
              <div className="koompi_content">
                <h1 className="tittle-koompiPro-banner">KOOMPI E11</h1>
                <p className="container text-container-content1 text-koompiePro-banner">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <div>
                  <Button type="primary" className="read_more">
                    Read More
                  </Button>
                </div>
              </div>
              <div className="subBanner-koompiPro">
                <img src="/img/Macbook.png" />
              </div>
            </div>
          </center>
        </div>
      </div> */}
      {/* <div className='boss-show-all-section'>
				<div>
					<Typography>
						<center>
							<Title>Which KOOMPI Right For You?</Title>
						</center>
					</Typography>
					<div className='container subboss-show-all-section'>
						<Row>
							<Col sm={12}>
								<div className='img-show-all-section'>
									<center>
										<img src='/img/Macbook.png' />
									</center>
									<Title
										className='title-show-all-section'
										level={3}>
										KOOMPI Pro
									</Title>
									<Paragraph className='li-show-all-section'>
										
										<li>13.3-inch Retina display1</li>
										<li>2-core Intel Core i5 processor</li>
										<li>Up to 16GB memory </li>
										<li>Up to 1TB storage2 </li>
										<li>Up to 12 hours battery life3</li>
										<li>Backlit keyboard</li>
										<div className='button-show-all-section'>
											<Button type='primary'>Buy</Button>
											<a
												className='link-show-all-section'
												href='#'>
												readmore
												<Icon
													className='icon-right'
													type='right'
												/>
											</a>
										</div>
									</Paragraph>
								</div>
							</Col>
							<Col sm={12}>
								<div className='img-show-all-section'>
									<center>
										<img src='/img/Macbook.png' />
									</center>
									<Title
										className='title-show-all-section'
										level={3}>
										KOOMPI E11
									</Title>
									<Paragraph className='li-show-all-section'>
										
										<li>13.3-inch Retina display1</li>
										<li>2-core Intel Core i5 processor</li>
										<li>Up to 16GB memory </li>
										<li>Up to 1TB storage2 </li>
										<li>Up to 12 hours battery life3</li>
										<li>Backlit keyboard</li>
										<div className='button-show-all-section'>
											<Button type='primary'>Buy</Button>
											<a
												className='link-show-all-section'
												href='#'>
												readmore
												<Icon
													className='icon-right'
													type='right'
												/>
											</a>
										</div>
									</Paragraph>
								</div>
							</Col>
						</Row>
						<Row>
							<Col sm={12}>
								<div className='img-show-all-section'>
									<center>
										<img src='/img/Macbook.png' />
									</center>
									<Title
										className='title-show-all-section'
										level={3}>
										KOOMPI B14
									</Title>
									<Paragraph className='li-show-all-section'>
										
										<li>13.3-inch Retina display1</li>
										<li>2-core Intel Core i5 processor</li>
										<li>Up to 16GB memory </li>
										<li>Up to 1TB storage2 </li>
										<li>Up to 12 hours battery life3</li>
										<li>Backlit keyboard</li>
										<div className='button-show-all-section'>
											<Button type='primary'>Buy</Button>
											<a
												className='link-show-all-section'
												href='#'>
												readmore
												<Icon
													className='icon-right'
													type='right'
												/>
											</a>
										</div>
									</Paragraph>
								</div>
							</Col>
							<Col sm={12}>
								<div className='img-show-all-section'>
									<center>
										<img src='/img/Macbook.png' />
									</center>
									<Title
										className='title-show-all-section'
										level={3}>
										KOOMPI B15
									</Title>
									<Paragraph className='li-show-all-section'>
										
										<li>13.3-inch Retina display1</li>
										<li>2-core Intel Core i5 processor</li>
										<li>Up to 16GB memory </li>
										<li>Up to 1TB storage2 </li>
										<li>Up to 12 hours battery life3</li>
										<li>Backlit keyboard</li>
										<div className='button-show-all-section'>
											<Button type='primary'>Buy</Button>
											<a
												className='link-show-all-section'
												href='#'>
												readmore
												<Icon
													className='icon-right'
													type='right'
												/>
											</a>
										</div>
									</Paragraph>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</div> */}
    </React.Fragment>
  );
}

export default Index;
