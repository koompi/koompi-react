import React, { useState, useEffect } from "react";
import useForm from "./useForm";
import validate from "./validateLogin";
import Navbar from "./navbar";
import Footer from "./footer";
import axios from "axios";

const Input = ({ name, label, value, onChange, errors, type }) => {
  return (
    <div className={errors ? "field error" : "field"}>
      <label>{label}</label>
      <input type={type} value={value} name={name} onChange={onChange} />
      {errors && (
        <div class="ui pointing basic label">{label + " is required"}</div>
      )}
    </div>
  );
};

const InputRadio = ({ value, checked, onChange, label }) => {
  return (
    <div class="field">
      <div class="ui big radio checkbox">
        <input
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <label>{label}</label>
      </div>
    </div>
  );
};

function PreOrder() {
  const {
    handlerCange,
    handleSubmit,
    values,
    errors,
    handleMethodColor,
    handldePaymet
  } = useForm(submit, validate);

  const [posts, setPost] = useState({ koompi: [] });

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/koompi"
      )
      .then(res => {
        console.log(res);
        setPost({ koompi: res.data.items });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  function submit() {
    console.log("submited sucessfully");
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="bannerPage">
        <div className="order-banner">
          <div className="bannerText">
            <h1 className="order-bannerTitle">order</h1>
          </div>
        </div>
      </div>

      <div>
        <div className="container-form ui text container">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="background-color-middle-form ui form"
          >
            <div className="field">
              <div className=" middle-form two fields">
                <div className="field">
                  {/* <label>FirstName</label> */}

                  <Input
                    // validators={['required']}
                    // errorMessages={['this field is required']}
                    label="First Name"
                    type="text"
                    name="firstname"
                    value={values.firstname}
                    onChange={handlerCange}
                    errors={errors.firstname}
                  />
                </div>
                <div className="field">
                  <div>
                    <Input
                      label="Last Name"
                      type="text"
                      name="lastname"
                      value={values.lastname}
                      onChange={handlerCange}
                      errors={errors.lastname}
                    />
                    {/* {errors.lastname && <p>{errors.lastname}</p>} */}
                  </div>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="middle-form two fields">
                <div className="field">
                  <div>
                    <Input
                      label="Email"
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handlerCange}
                      errors={errors.email}
                    />
                  </div>
                </div>
                <div className="field">
                  <div>
                    <Input
                      label="Phone"
                      type="number"
                      name="phonenumber"
                      value={values.phonenumber}
                      placeholder="Phone Number"
                      onChange={handlerCange}
                      errors={errors.phonenumber}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="middle-form field">
              <label>What is your favourite color?</label>
              <div class="ui form">
                <div class="inline fields">
                  <InputRadio
                    type="checkbox"
                    value="space_gray"
                    checked={values.color === "space_gray"}
                    onChange={handleMethodColor}
                    label="Space Gray"
                  />
                  <InputRadio
                    type="checkbox"
                    value="rose_gold"
                    checked={values.color === "rose_gold"}
                    onChange={handleMethodColor}
                    label="Rose Gold"
                  />
                </div>
              </div>
            </div>

            <div className="middle-form field">
              <label>Payment Options</label>
              <div class="ui form">
                <div class="inline fields">
                  <InputRadio
                    value="ABA"
                    checked={values.payment === "ABA"}
                    onChange={handldePaymet}
                    label="ABA"
                  />
                  <InputRadio
                    value="WING"
                    checked={values.payment === "WING"}
                    onChange={handldePaymet}
                    label="WING"
                  />
                  <InputRadio
                    value="Other"
                    checked={values.payment === "Other"}
                    onChange={handldePaymet}
                    label="Other"
                  />
                </div>
              </div>
            </div>

            <div className="middle-form field">
              <label>Message</label>
              <textarea
                name="Message"
                value={values.Message}
                onChange={handlerCange}
              />
            </div>

            <center className="submit-button">
              <button type="submit" className=" ui black center button">
                Submit
              </button>
            </center>
          </form>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default PreOrder;
