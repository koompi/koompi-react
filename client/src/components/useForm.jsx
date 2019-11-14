import { useState } from "react"
import Swal from "sweetalert2"
import axios from "axios"

const useForm = () => {
  const [values, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    color: "space_gray",
    payment: "ABA",
    message: ""
  })

  const [errors] = useState({})

  const handlerCange = (event) => {
    setValue({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleMethodColor = (event) => {
    setValue({
      ...values,
      color: event.target.value
    })
  }

  const handldePaymet = (event) => {
    setValue({
      ...values,
      payment: event.target.value
    })
  }

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { firstName, lastName, email, phoneNumber } = values
    if (firstName === "" || lastName === "" || email === "" || phoneNumber === "") {
      Toast.fire({
        type: "error",
        title: "All fields are required."
      })
    } else {
      axios.post("https://mail.koompi.com/api/form", { ...values }).then(
        Toast.fire({
          type: "success",
          title: "Thank you for your order. Please, check your email."
        })
      )
    }
  }

  return {
    handlerCange,
    handleSubmit,
    values,
    handleMethodColor,
    handldePaymet,
    errors
  }
}

export default useForm
