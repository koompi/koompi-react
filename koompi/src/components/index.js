import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Player, ControlBar } from 'video-react';
import Modal from 'react-responsive-modal';
import { BackTop } from 'antd';
import Particles from 'react-particles-js';
import { useQuery } from '@apollo/react-hooks';
import EditorJs from 'react-editor-js';
import parse from 'html-react-parser';
import {
  content,
  Layout,
  Button,
  Menu,
  Dropdown,
  Breadcrumb,
  Icon
} from 'antd';
import Navbar from './navbar';
import { Typography, Divider } from 'antd';
import { GET_PAGES } from './graphql/query';
import { Link } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

const { Header, Content, Footer } = Layout;
const koompiPro = [{ img: '/img/Macbook.png' }];
const koompiE11 = [{ img: '/img/0.png' }];

function renderHTML(data) {
  let result = ``;
  for (let block of JSON.parse(data).blocks) {
    switch (block.type) {
      case 'paragraph':
        result += `<p>${block.data.text}</p>`;
        break;
      case 'header':
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

  // ===== Handle Display KOOMPI E =====
  const Display_Koompi_E = () => {
    const { error, loading, data } = useQuery(GET_PAGES);
    if (error) console.log(error);
    if (loading) return 'loading ...';
    if (data) {
      const res = renderHTML(data.pages[0].description);
      return (
        <>
          <Col sm={12}>
            <center>
              <div className="banner_content">
                {/* ========= KOOMPI SECTION =========  */}
                <h1 className="bossTittle-KoompiHome">{data.pages[0].title}</h1>
                <p className="text-koompi-section-banner">{parse(res)}</p>
                <div onClick={onOpenModal}>
                  <Icon type="play-circle" className="indexPlayButton" />
                </div>
                <div
                  style={{
                    cursor: 'pointer'
                  }}
                >
                  <Modal
                    styles={{
                      modal: {
                        maxWidth: 'unset',
                        width: '70vw',
                        padding: 'unset'
                      },
                      overlay: {
                        background: 'rgba(0, 0, 0, 0.5)'
                      },
                      closeButton: {
                        background: 'white',
                        borderRadius: '45px',
                        // color: 'white',
                        cursor: 'pointer'
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
              <div className="index_banner">
                <img src={`http://localhost:8080` + data.pages[0].image}></img>
              </div>
            </center>
          </Col>
        </>
      );
    }
  };

  // ===== Handle to Display KOOMPI E11 =====
  const Display_Koompi_E11 = () => {
    const { error, loading, data } = useQuery(GET_PAGES);
    if (error) console.log(error);
    if (loading) return 'loading...';
    if (data) {
      const res = renderHTML(data.pages[2].description);
      return (
        <>
          <div className="koompi_content">
            <h1 className="tittle-koompiPro-banner">{data.pages[2].title}</h1>
            <p className="text-container-content1 text-koompiePro-banner">
              {parse(res)}
            </p>
            <div>
              <Button type="primary" className="read_more">
                Read More
              </Button>
            </div>
          </div>
          <div className="subBanner-koompiPro">
            <img src={`http://localhost:8080` + data.pages[2].image} />
          </div>
        </>
      );
    }
  };

  // ===== Handle to Display KOOMPI OS =====
  const Display_OS_Section = () => {
    const { error, loading, data } = useQuery(GET_PAGES);
    if (error) console.log(error);
    if (loading) return 'loading...';
    if (data) {
      const res = renderHTML(data.pages[1].description);
      return (
        <>
          <div className="koompi_content">
            <h1 className="koompi-os-title-index">{data.pages[1].title}</h1>
            <p className="koompi-os-index-desc">{parse(res)}</p>
            <div>
              <Button type="primary" className="read_more">
                Read More
              </Button>
            </div>
          </div>
          <div className="subBanner-koompiPro">
            <img src={`http://localhost:8080` + data.pages[1].image} />
          </div>
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
            <Display_Koompi_E />
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
                  mode: 'repulse'
                }
              }
            }
          }}
        />
        <div className="koompi_section_position">
          <center>
            <Display_Koompi_E11 />
          </center>
        </div>
      </div>
      <div className="koompi-os-index">
        <div className="koompi-logo-koompi-os-section"></div>
        <div className="container">
          <center>
            <Display_OS_Section />
          </center>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
