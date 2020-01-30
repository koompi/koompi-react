import React from 'react';
import { Row, Col, Typography, Icon } from 'antd';
import Navbar from './navbar';
import Footer from './footer';
import { useQuery } from '@apollo/react-hooks';
import parse from 'html-react-parser';
import renderHTML from './editorJsToHtml';
import NProgress from 'nprogress';
import { GET_MEMBERS, GET_PAGES } from './graphql/query';
import _ from 'lodash';
const { Title, Paragraph } = Typography;

function About() {
  const DisplayTeamwork = () => {
    const { error, loading, data } = useQuery(GET_MEMBERS);
    if (error) console.log(error);
    if (loading) {
      NProgress.start();
      return null;
    }
    NProgress.done();

    const businessDevelopment = _.filter(
      data.members,
      member => member.department === 'business-development'
    );
    const software = _.filter(
      data.members,
      member => member.department === 'software-team'
    );
    const hardware = _.filter(
      data.members,
      member => member.department === 'hardware-team'
    );
    const communication = _.filter(
      data.members,
      member => member.department === 'communication-and-marketing'
    );
    const sales = _.filter(
      data.members,
      member => member.department === 'sales-and-supplier-relation'
    );
    const koompiAcademy = _.filter(
      data.members,
      member => member.department === 'academy'
    );

    return (
      <div className="container">
        {/* ===== Business Development ===== */}
        <Row gutter={16}>
          <h2 className="teamDepartment">
            <Icon type="double-right" style={{ marginRight: '10px' }} />
            Business Development
          </h2>
          {businessDevelopment.map(member => {
            return (
              <Col sm={6}>
                <center>
                  <img
                    src={`http://localhost:8080` + member.photo}
                    className="memberPhoto"
                  ></img>
                </center>
                <center>
                  <h3 className="memberName">{member.fullname}</h3>
                  <p>{member.position}</p>
                </center>
              </Col>
            );
          })}
        </Row>

        {/* ===== Hardware Team ===== */}
        <Row gutter={16}>
          <h2 className="teamDepartment">
            <Icon type="double-right" style={{ marginRight: '10px' }} />
            Hardware Teams
          </h2>
          {hardware.map(member => {
            return (
              <Col sm={6}>
                <center>
                  <img
                    src={`http://localhost:8080` + member.photo}
                    className="memberPhoto"
                  ></img>
                </center>
                <center>
                  <h3 className="memberName">{member.fullname}</h3>
                  <p>{member.position}</p>
                </center>
              </Col>
            );
          })}
        </Row>

        {/* ===== KOOMPI ACADEMY Team ===== */}
        <Row gutter={16}>
          <h2 className="teamDepartment">
            <Icon type="double-right" style={{ marginRight: '10px' }} />
            KOOMPI ACADEMY
          </h2>
          {koompiAcademy.map(member => {
            return (
              <Col sm={6}>
                <center>
                  <img
                    src={`http://localhost:8080` + member.photo}
                    className="memberPhoto"
                  ></img>
                </center>
                <center>
                  <h3 className="memberName">{member.fullname}</h3>
                  <p>{member.position}</p>
                </center>
              </Col>
            );
          })}
        </Row>

        {/* ===== Sales and Supplier Relation Team ===== */}
        <Row gutter={16}>
          <h2 className="teamDepartment">
            <Icon type="double-right" style={{ marginRight: '10px' }} />
            Sales and Supplier Relation
          </h2>
          {sales.map(member => {
            return (
              <Col sm={6}>
                <center>
                  <img
                    src={`http://localhost:8080` + member.photo}
                    className="memberPhoto"
                  ></img>
                </center>
                <center>
                  <h3 className="memberName">{member.fullname}</h3>
                  <p>{member.position}</p>
                </center>
              </Col>
            );
          })}
        </Row>

        {/* ===== Communication Team ===== */}
        <Row gutter={16}>
          <h2 className="teamDepartment">
            <Icon type="double-right" style={{ marginRight: '10px' }} />
            Communication and Marketing
          </h2>
          {communication.map(member => {
            return (
              <Col sm={6}>
                <center>
                  <img
                    src={`http://localhost:8080` + member.photo}
                    className="memberPhoto"
                  ></img>
                </center>
                <center>
                  <h3 className="memberName">{member.fullname}</h3>
                  <p>{member.position}</p>
                </center>
              </Col>
            );
          })}
        </Row>

        {/* ===== Software Development ===== */}
        <Row gutter={16}>
          <h2 className="teamDepartment">
            <Icon type="double-right" style={{ marginRight: '10px' }} />
            Software Teams
          </h2>
          {software.map(member => {
            return (
              <Col sm={6}>
                <center>
                  <img
                    src={`http://localhost:8080` + member.photo}
                    className="memberPhoto"
                  ></img>
                </center>
                <center>
                  <h3 className="memberName">{member.fullname}</h3>
                  <p>{member.position}</p>
                </center>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  };

  const DisplayAboutUs = () => {
    const { error, loading, data } = useQuery(GET_PAGES);
    if (error) console.log(error);
    if (loading) {
      NProgress.start();
      return null;
    }
    NProgress.done();
    const onlyAboutUs = _.filter(
      data.pages,
      page => page.category.slug === 'about-us'
    );

    console.log(onlyAboutUs);

    return onlyAboutUs.map(about => {
      const description = renderHTML(about.description);
      return (
        <Row className="Row-about" gutter={24}>
          <Col sm={12}>
            <div className="aboutPosition">{parse(description)}</div>
          </Col>
          <Col sm={12}>
            <img
              style={{ maxWidth: '100%' }}
              src={`http://localhost:8080` + about.image}
            />
          </Col>
        </Row>
      );
    });
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="backgroud-about">
        <div className="container" style={{ position: 'relative' }}>
          <DisplayAboutUs />
        </div>

        <div>
          <center>
            <h2 className="teamMember">Team Member</h2>
          </center>
          <DisplayTeamwork />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default About;
