import {useState, useEffect} from 'react'

const useForm = (callback, validate) => {


    
    const [values, setValue] = useState({
        firstname:"",
        lastname:"",
        email:"",
        phonenumber:"",
        color:"space_gray",
        payment:"ABA",
        Message:""
    });

    const [errors, setErrors] = useState({
        // firstname:"",
        // lastname:"",
        // email:"",
        // phonenumber:"",
        // color:""
    })

    const [isSubmitting, setIsSubmitting] = useState(false);

    //new state for errors
    //function that validate these errors
    //pass these errors back to form 
    
    const handlerCange = event => {
        setValue({
            ...values, [event.target.name]: event.target.value  
        });
    };
    

    // const handleMethodColor = (event) => ({
    //     color: event.target.value
    // })

    const handleMethodColor = event => {
        console.log(event.target.value)
        setValue({
            ...values, color: event.target.value
        })
    }

    const handldePaymet = event => {
        console.log(event);
        setValue({
            ...values, payment: event.target.value
        })
    }
    
    const handleSubmit = event => {
        event.preventDefault(); 
        
        // submit();
        //handling errors
        setErrors(validate(values));
        setIsSubmitting(true);
        // callback();
    };


    useEffect(() => {
        //checks to see if there are errror
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback();
        }
        //call our callback
    }, [errors]);

    

    return {
            handlerCange,
            handleSubmit,
            values,
            handleMethodColor,
            handldePaymet,
            errors
    };
};

export default useForm

