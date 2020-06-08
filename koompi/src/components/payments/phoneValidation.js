let isPhoneNumber = (input) => {
  try {
    let ISD_CODES = [855],
      //extract numbers from string
      thenum = input.match(/[0-9]+/g).join(""),
      totalnums = thenum.length,
      // last10Digits = parseInt(thenum) % 10000000000,
      ISDcode = thenum.substring(0, totalnums - 10)

    //phone numbers are generally of 8 to 16 digits
    if (totalnums >= 8 && totalnums <= 16) {
      if (ISDcode) {
        if (ISD_CODES.includes(parseInt(ISDcode))) {
          return true
        } else {
          return false
        }
      } else {
        return true
      }
    }
  } catch (e) {}

  return false
}

export default isPhoneNumber
