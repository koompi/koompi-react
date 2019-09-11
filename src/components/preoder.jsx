import React, {useState} from 'react'
import useForm from './useForm';
import validate from './validateLogin';
import Navbar from './navbar'
import Footer from './footer'
//  import {Form,Input} from 'semantic-ui-react-form-validator'

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
  const {handlerCange, handleSubmit, values, errors, handleMethodColor, handldePaymet, handleMessage} = useForm(submit,validate);

  console.log('====================================');
  console.log(values);
  console.log('====================================');
  
// const [value, setValue] = useState({
//     firstname:'',
//     lastname:'',
//     email:'',
//     phonenumber:''
// })

// const handlerCange = event => {
//     const {name, value} = event.target;
//     console.log(event.target.name);
//     console.log(event.target.value);
//     setValue({
//         ...value,
//         [name]: value
//     });
// };

// const handleSubmit = event => {
//     event.preventDefault();
//     submit();
// };




function submit () {
    console.log ("submited sucessfully")
}

    return (
      <React.Fragment>
       <Navbar/>
       <div>
        <div className="container-form ui text container">
        <form onSubmit={handleSubmit} noValidate className="background-color-middle-form ui form">
        <center className="order-margin">
        <img className="koompi-logo-order" src="koompi-logo-w-02.svg" alt=""/>
          <h1>Pre-Order</h1>
        </center>
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
                  // errorMessages={['this field is required']}
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

     <Footer/>
     </React.Fragment>
    )
}

export default preoder



