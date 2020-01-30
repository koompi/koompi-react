import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import parse from 'html-react-parser';
import renderHTML from './editorJsToHtml';
import NProgress from 'nprogress';
import { GET_SOCAIL_MEDIA } from './graphql/query';

function Footer() {
  const { error, loading, data } = useQuery(GET_SOCAIL_MEDIA);
  if (error) console.log('error');
  if (loading)
    return () => {
      NProgress.start();
      return null;
    };

  console.log('====================================');
  console.log(data);
  console.log('====================================');

  return (
    <div>
      <div className="footerBackground">
        <center>
          <img src="/img/sw-greens.png" />
        </center>

        <div className="footer-container">
          <p className="copyRight">
            Copyright © 2020 KOOMPI. All rights reserved <br></br> A brainchild
            of SmallWorld Venture
          </p>
          <Row gutter={16} className="footerPMagin">
            <Col span={6}>
              <h4>Help</h4>
              <Link to="">
                <p>Support</p>
              </Link>
              <Link to="">
                <p>FAQs</p>
              </Link>
            </Col>

            <Col span={6}>
              <h4>Information</h4>
              <Link to="/news-and-events">
                <p>News and Event</p>
              </Link>
              <Link to="/about-us">
                <p>About Us</p>
              </Link>

              <Link to="">
                <p>Become a contributor</p>
              </Link>
              <Link to="retailers">
                <p>Retailers</p>
              </Link>
            </Col>

            <Col span={6}>
              <h4>Legal</h4>
              <Link to="">
                <p>Terms & conditions</p>
              </Link>
              <Link to="">
                <p>License Agreement</p>
              </Link>
              <Link to="">
                <p>Privacy policy</p>
              </Link>
              <Link to="">
                <p>Copyright information</p>
              </Link>
            </Col>
            <Col span={6}>
              <h4>Connect With Us</h4>
              <div className="footer_socail_media">
                {data.socailMedia.map(res => {
                  return (
                    <Link to={res.link}>
                      <img src={`http://localhost:8080` + res.logo} />
                    </Link>
                  );
                })}
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer-project">
        <div className="footer-container">
          <Row gutter={12}>
            <Col span={6}>
              {' '}
              <p className="koompiProjectTitle"> KOOMPI Products</p>
            </Col>
            <Col span={18} className="koompiProjects">
              <Link to="">KOOMPI ACADEMY</Link>
              <Link to="">KOOMPI OS</Link>
              <Link to="">KOOMPI E13</Link>
              <Link to="">KOOMPI E11</Link>
              {/* <Link to="">KOOMPI B14</Link> */}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Footer;
