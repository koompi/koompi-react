const CryptoJS = require("crypto-js")

/*
    function getHash($transactionId, $amount) {
        $hash = base64_encode(hash_hmac('sha512', "54545" . $transactionId . $amount, "xxx", true));
        return $hash;
    }
    echo getHash("555", "20");
    
*/

function ABAPaywayHash() {
  const getHash = (transactionId, amount) => {
    const hash = CryptoJS.HmacSHA512(
      "koompi" + "555" + "20",
      "db1f0f35d312e2efb92dabb32aa0b7ca"
    )
    console.log("====================================")
    console.log("hash", hash.toString(CryptoJS.enc.Base64))
    console.log("====================================")
    return hash
  }
  return getHash("555", "20")
}

ABAPaywayHash()
