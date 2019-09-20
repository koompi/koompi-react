import React, {useState, useEffect} from 'react'
import useForm from './useForm';
import validate from './validateLogin';
import Navbar from './navbar'
import Footer from './footer'
import axios from 'axios';

// import Popup from './popup'
//  import {Form,Input} from 'semantic-ui-react-form-validator'

function strip_html_tags(str) {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/<[^>]*>/g, "");
}



const Input = ({name, label, value, onChange, errors, type}) => {
  return(
    <div className={errors ? "field error" : "field"}>
    <label>{label}</label>
    <input type={type} value={value} name={name} onChange={onChange}></input>
    {errors && (
      <div class="ui pointing basic label">{label + " is required"}</div>
    )}
    </div> 
  ) ;
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



function preoder() {
  const {handlerCange, handleSubmit, values, errors, handleMethodColor, handldePaymet} = useForm(submit,validate);

  console.log('====================================');
  console.log(values);
  console.log('====================================');



const [posts, setPost] = useState({koompi:[]})

useEffect(() => {
  axios.get( "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/koompi")
  .then(res => {
    console.log(res)
    setPost({koompi: res.data.items});
  })
  .catch(err => {
    console.log(err)
  })
}, [])

function submit () {
    console.log ("submited sucessfully")
}

    return (
      <React.Fragment>
       <Navbar/>
       <div className="bannerPage">
       <div className="order-banner">
       <div className="bannerText" >
       <h1 className="order-bannerTitle">order</h1>
       </div>
       </div>
       </div>
      
       <div>
        <div className="container-form ui text container">
        <form onSubmit={handleSubmit} noValidate className="background-color-middle-form ui form">
        {/* <center className="order-margin">
        <img className="koompi-logo-order" src="koompi-logo-w-02.svg" alt=""/>
          <h1>Pre Order</h1>
        </center> */}
        {/* <center className= "order-margin">
          <h1>Order</h1>
        </center> */}
        <div className="field">
          <div className=" middle-form two fields">
            <div className="field">
            {/* <label>FirstName</label> */}
              
              <Input
                  // validators={['required']} 
                  // errorMessages={['this field is required']} 
                  label="Firstname" 
                  type="text" 
                  name="firstname" 
                  value={values.firstname} 
                   placeholder="First Name" 
                  onChange={handlerCange} 
                  errors={errors.firstname}/>
              {/* {errors.firstname && <p>{errors.firstname}</p>} */}
              
            </div>
            <div className="field">
            {/* <label>LastName</label> */}
            <div>
              <Input 
                  // validators={['required']} 
                  // errorMessages={['this field is required']}
                  label="Lastname"
                  type="text"
                  name="lastname" 
                  value={values.lastname} 
                  placeholder="Last Name" 
                  onChange={handlerCange}
                  errors={errors.lastname} />
              {/* {errors.lastname && <p>{errors.lastname}</p>} */}
            </div>
            </div>
          </div>
        </div>

        <div className="field">
          <div className="middle-form two fields">
            <div className="field">
            {/* <label>Email</label> */}
            <div>
              <Input 
                  // validators={['required']} 
                  // errorMessages={['}this field is required']}
                  label="Email" 
                  type="text" 
                  name="email" 
                  value={values.email} 
                  placeholder="Email" 
                  onChange={handlerCange}
                  errors={errors.email} />
              {/* {errors.email && <p>{errors.email}</p>} */}
            </div>
            </div>
            <div className="field">
            {/* <label>Phone Number</label> */}
            <div>
              <Input
                  // validators={['required']} 
                  // errorMessages={['this field is required']}
                  label="Phone"  
                  type="number" 
                  name="phonenumber" 
                  value={values.phonenumber} 
                  placeholder="Phone Number" 
                  onChange={handlerCange}
                  errors={errors.phonenumber} />
              {/* {errors.phonenumber && <p>{errors.phonenumber}</p>} */}
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
                      checked={values.color==="rose_gold"}
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

        <center className="submit-button" >
        <button type="submit" className=" ui black center button">Submit</button>
        </center>      
      </form>
     </div>
     </div>

{/* <div className="ui container margin-buttons"> 
      <div className="ui stackable three column equal height stretched grid">
        {
          posts.koompi.slice(0,3).map((data) => {
            return(
            <div className="column" key={data.title}>
                <div className="shadowEvent">
                <a
                        className="newsDetail"
                        href={data.guid}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.thumbnail.match(/[^/]+(jpg|png|gif|jpeg)$/) ? (
                          <div
                            style={{
                              backgroundImage: `url(${data.thumbnail})`,
                              height: "200px",
                              backgroundPosition: "center center",
                              backgroundSize: "cover"
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              backgroundImage: `url("/images/default_img.png")`,
                              height: "200px",
                              backgroundPosition: "center center",
                              backgroundSize: "cover"
                            }}
                          />
                        )}

                        <div className="backgroundEvent">
                          <center>
                            <h3>{data.title}</h3>
                          </center>
                          <br />
                          <p>
                            {strip_html_tags(
                              data.content.substring(0, 110) + "..."
                            )}
                          </p>
                          <p className="badge">{data.author}</p>
                        </div>
                      </a>
                </div>
                
            </div>
          )})
        }
      </div>
</div> */}
     <Footer/>
     </React.Fragment>
    )
}

export default preoder



