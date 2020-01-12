import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Form, Input, Button, Radio } from 'antd';
import Navbar from './Navbar';
import { useForm } from 'react-hook-form';
function Contact() {
  const { TextArea } = Input;

  return (
    <div>
      <Navbar />
      <div className="container">
        <center>
          <h1>Contact Us</h1>
        </center>
        <div className="text-container">
          <form>
            <Row gutter={[48, 0]}>
              <Col sm={12}>
                <Form.Item>
                  <label>Firstname</label>
                  <Input size="large" placeholder="large size" />
                </Form.Item>
              </Col>
              <Col sm={12}>
                <Form.Item>
                  <label>Lastname</label>
                  <Input size="large" placeholder="large size" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[48, 0]}>
              <Col sm={12}>
                <Form.Item>
                  <label>Email</label>
                  <Input size="large" placeholder="large size" />
                </Form.Item>
              </Col>
              <Col sm={12}>
                <Form.Item>
                  <label>Phone</label>
                  <Input size="large" placeholder="large size" />
                </Form.Item>
              </Col>
            </Row>
            <div style={{ marginTop: '10px' }}>
              <label>Message</label>
              <TextArea rows={4} />
            </div>
            <Button type="primary"> Submit</Button>
          </form>
        </div>
        {/* <div style={{ marginTop: '10px' }}>
          <Row>
            <Col sm={8}>
              <div style={{ fontSize: '26px' }}>
                <div>
                  <img
                    style={{ height: '40px', paddingRight: '8px' }}
                    src="/img/icons8-location-52.png"
                  />
                  <span>
                    35 A/B, street 111, Khan 7makara, Phnom Penh, Cambodia{' '}
                  </span>
                </div>
                <div style={{ lineHeight: '101px' }}>
                  <img
                    style={{ paddingRight: '15px', height: '30px' }}
                    src="/img/icons8-email-52.png"
                  />
                  <span>koompi@gmail.com</span>
                </div>
                <div>
                  <img
                    style={{ height: '33px', paddingRight: '12px' }}
                    src="/img/icons8-call-52.png"
                  />
                  <span>086280018</span>
                </div>
              </div>
            </Col>
            <Col sm={16}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7795993257537!2d104.92431051474864!3d11.567651747253331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109515565654cc3%3A0x50e3c5f75018b3ff!2sKOOMPI%20Boran%20%26%20Research%20Lab!5e0!3m2!1sen!2skh!4v1578735272031!5m2!1sen!2skh"
                frameBorder="0"
                style={{ width: '100%', height: '23vw' }}
                allowfullscreen={true}
              />
            </Col>
          </Row>
        </div> */}
      </div>
      <div style={{ marginTop: '10px', padding: '24px' }}>
        <Row gutter={[48, 0]}>
          <Col style={{ padding: '66px' }} sm={8}>
            <div style={{ fontSize: '26px' }}>
              <div>
                <img
                  style={{ height: '40px', paddingRight: '8px' }}
                  src="/img/icons8-location-52.png"
                />
                <span>
                  35 A/B, street 111, Khan 7makara, Phnom Penh, Cambodia{' '}
                </span>
              </div>
              <div style={{ lineHeight: '101px' }}>
                <img
                  style={{ paddingRight: '15px', height: '30px' }}
                  src="/img/icons8-email-52.png"
                />
                <span>koompi@gmail.com</span>
              </div>
              <div>
                <img
                  style={{ height: '33px', paddingRight: '12px' }}
                  src="/img/icons8-call-52.png"
                />
                <span>086280018</span>
              </div>
            </div>
          </Col>
          <Col sm={16}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7795993257537!2d104.92431051474864!3d11.567651747253331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109515565654cc3%3A0x50e3c5f75018b3ff!2sKOOMPI%20Boran%20%26%20Research%20Lab!5e0!3m2!1sen!2skh!4v1578735272031!5m2!1sen!2skh"
              frameBorder="0"
              style={{ width: '100%', height: '23vw' }}
              allowfullscreen={true}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contact;
