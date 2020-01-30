import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Player, ControlBar } from 'video-react';
import Modal from 'react-responsive-modal';
import Particles from 'react-particles-js';
import { useQuery } from '@apollo/react-hooks';
import parse from 'html-react-parser';
import NProgress from 'nprogress';
import { Link } from 'react-router-dom';
import { Button, Icon, Result } from 'antd';
import Navbar from './navbar';
import { GET_PAGES } from './graphql/query';
import Footer from './footer';
import _ from 'lodash';

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
  const [stateModal, setStateModal] = useState([{ open: true }]);

  const { data } = useQuery(GET_PAGES);

  const onOpenModal = () => {
    setStateModal({ open: true });
  };
  const onCloseModal = () => {
    setStateModal({ open: false });
  };
  const { open } = stateModal;

  const { error, loading } = useQuery(GET_PAGES);
  if (error) {
    if (error.networkError) {
      return (
        <Result
          status="500"
          title="500"
          subTitle="Sorry, the server is wrong."
        />
      );
    }
  }
  if (loading) {
    NProgress.start();
    return null;
  }
  NProgress.done();

  const dataIndex = data.pages.filter(res => res.category.slug === 'index');
  const result = _.orderBy(dataIndex, 'sectionNumber', 'asc');

  return (
    <React.Fragment>
      <Navbar />
      {result.map((data, index) => {
        const description = renderHTML(data.description);
        if (data.sectionNumber === '1') {
          return (
            <div className="banner">
              <div className="PhnomPenh"></div>
              <div className="container">
                <Row>
                  <Col sm={12}>
                    <center>
                      <div className="banner_content">
                        {/* ========= KOOMPI SECTION =========  */}
                        <h1 className="bossTittle-KoompiHome">{data.title}</h1>
                        <div className="text-koompi-section-banner">
                          {description.substring().length > 350
                            ? parse(description.substring(0, 350) + '... ')
                            : parse(description)}

                          <Button className="koompiBtn">
                            <Link to="/koompi-e">Read More</Link>{' '}
                            <Icon type="arrow-right" />
                          </Button>
                        </div>
                        <div onClick={onOpenModal}>
                          <Icon
                            type="play-circle"
                            className="indexPlayButton"
                          />
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
                              <ControlBar
                                autoHide={false}
                                className="my-class"
                              />
                            </Player>
                          </Modal>
                        </div>
                      </div>
                    </center>
                  </Col>
                  <Col sm={12}>
                    <center>
                      <div className="index_banner">
                        <img src={`http://localhost:8080` + data.image}></img>
                      </div>
                    </center>
                  </Col>
                </Row>
              </div>
            </div>
          );
        }
        if (data.sectionNumber === '2') {
          const description = renderHTML(data.description);
          return (
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
                  <div className="koompi_content">
                    <h1 className="tittle-koompiPro-banner">{data.title}</h1>
                    <div className="text-container-content1 text-koompiePro-banner">
                      {description.substring().length > 350
                        ? parse(description.substring(0, 350) + '... ')
                        : parse(description)}
                      <Button className="koompiBtn">
                        <Link to="/koompi-e">Read More</Link>{' '}
                        <Icon type="arrow-right" />
                      </Button>
                    </div>
                  </div>
                  <div className="subBanner-koompiPro">
                    <img src={`http://localhost:8080` + data.image} />
                  </div>
                </center>
              </div>
            </div>
          );
        }
        if (data.sectionNumber === '3') {
          const description = renderHTML(data.description);
          return (
            <div className="koompi-os-index">
              <div className="koompi-logo-koompi-os-section"></div>
              <div className="container">
                <center>
                  <div className="koompi_content">
                    <h1 className="bossTittle-KoompiHome">{data.title}</h1>
                    <p className="koompi-os-index-desc">
                      {parse(description.substring(0, 50))}
                    </p>
                    <div>
                      <Button type="primary" className="koompiBtn">
                        Read More <Icon type="arrow-right" />
                      </Button>
                    </div>
                  </div>
                  <div className="subBanner-koompiPro">
                    <img src={`http://localhost:8080` + data.image} />
                  </div>
                </center>
              </div>
            </div>
          );
        }
      })}

      {/* =============Big Section ===============*/}

      {/* <div className="koompi-pro-index">
        <div className="container">
          <center>
            <Display_Pro_Section />
          </center>
        </div>
        <div className="koompi-logo-koompi-pro-section"></div>
      </div> */}
      <Footer />
    </React.Fragment>
  );
}

export default Index;
