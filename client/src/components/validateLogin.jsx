export default function validate(values) {
  const errors = {}
  if (!values.email) {
    errors.email = "Email address is required"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid"
  }

  if (!values.firstname) {
    errors.firstname = "First name is required"
  }
  if (!values.lastname) {
    errors.lastname = "Last name is required"
  }
  if (!values.phonenumber) {
    errors.phonenumber = "Phone number is required"
  }

  return errors
}
