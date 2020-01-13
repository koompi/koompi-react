import React, { useState } from "react";
import { Row, Col, message } from "antd";
import { Form, Input, Typography, Divider } from "antd";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
const { Title, Paragraph, Text } = Typography;
// import { useForm } from 'react-hook-form';
function Contact() {
  const { TextArea } = Input;
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }} className="container">
        <div>
          <Row
            style={{
              // backgroundColor: "#fafafa",
              borderRadius: "12px",
              boxShadow:
                " 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)"
            }}
            gutter={[48, 0]}
          >
            <Col sm={12}>
              <div style={{ marginTop: "56px", marginBottom: "56px" }}>
                <center>
                  <Title>Information</Title>
                </center>
                <Paragraph style={{ fontSize: "20px" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </Paragraph>
                <div>
                  <Title level={3}>Location</Title>
                  <Text style={{ fontSize: "20px" }}>
                    35 A/B, street 111, Khan 7makara, Phnom Penh, Cambodia
                  </Text>
                  <Title level={3}>Email</Title>
                  <Text style={{ fontSize: "20px" }}>koompi@gmail.com</Text>
                  <Title level={3}>Phone</Title>
                  <Text style={{ fontSize: "20px" }}>086280018</Text>
                </div>
              </div>
            </Col>
            <Col sm={12}>
              <div style={{ marginTop: "56px", marginBottom: "56px" }}>
                <center>
                  <Title>Contact Us</Title>
                </center>
                <div className="Form-Contact">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="lebel">FullName</label>
                    <input
                      className="input"
                      name="Fullname"
                      ref={register({ required: true, minLength: 5 })}
                    />
                    {errors.Fullname && (
                      <p style={{ color: "red" }}>This field is required</p>
                    )}
                    <label className="label">Email</label>
                    <input
                      className="input"
                      name="Email"
                      ref={register({ required: true, minLength: 5 })}
                    />
                    {errors.Email && (
                      <p style={{ color: "red" }}>This field is required</p>
                    )}
                    <label className="label">Phone</label>
                    <input
                      className="input"
                      name="Phone"
                      ref={register({ required: true, minLength: 5 })}
                    />
                    {errors.Phone && (
                      <p style={{ color: "red" }}>This field is required</p>
                    )}
                    <label>Message</label>
                    <TextArea style={{ border: "1px solid black" }} rows={4} />
                    <input type="submit" />
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div
        // className="container"
        style={{
          marginTop: "80px",
          width: "95%",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow:
            " 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)",
          borderRadius: "12px"
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7795993257537!2d104.92431051474864!3d11.567651747253331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109515565654cc3%3A0x50e3c5f75018b3ff!2sKOOMPI%20Boran%20%26%20Research%20Lab!5e0!3m2!1sen!2skh!4v1578735272031!5m2!1sen!2skh"
          frameBorder="0"
          style={{ width: "100%", height: "23vw" }}
          allowfullscreen={true}
        />
      </div>
    </div>
  );
}

export default Contact;
