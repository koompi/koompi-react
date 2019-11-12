//firstname
export default function validate(values) {
  let errors = {}
  if (!values.email) {
    errors.email = "Email address is required"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid"
  }

  if (!values.firstname) {
    errors.firstname = "FirstName is required"
  }
  if (!values.lastname) {
    errors.lastname = "LastName is required"
  }
  if (!values.phonenumber) {
    errors.phonenumber = "Phonenumber is required"
  }

  // if(!values.color){
  //     errors.color
  // }

  return errors
}
