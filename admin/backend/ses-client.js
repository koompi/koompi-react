const AWS = require("aws-sdk");

const config = require("./config"); // load configurations file

const { key, secret, region } = config.aws;

AWS.config.update({
  accessKeyId: key,
  secretAccessKey: secret,
  region: region,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

const sendEmail = (to, subject, message, from) => {
  const params = {
    Destination: {
      ToAddresses: [to, "rithythul@gmail.com", "thearatheng10@gmail.com"],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: message,
        },
        /* replace Html attribute with the following if you want to send plain text emails. 
                Text: {
                    Charset: "UTF-8",
                    Data: message
                }
             */
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    ReturnPath: from ? from : '"koompi.com" <no-reply@koompi.com>',
    Source: from ? from : '"koompi.com" <no-reply@koompi.com>',
  };

  ses.sendEmail(params, (err, data) => {
    if (err) {
      return console.log(err, err.stack);
    } else {
      console.log("Email sent.", data);
    }
  });
};

module.exports = { sendEmail };
