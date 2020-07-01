module.exports = (name, items) => {
  const products = JSON.parse(items);
  const displayProducts = () => {
    return products.map(
      (res) =>
        `<tr>
      <td style="padding: 5px 15px 5px 0;">${res.name}</td>
      <td style="padding: 0 15px;">${res.qty}</td>
      <td style="padding: 0 0 0 15px;" align="right">
        $${res.deposit}.00
      </td>
    </tr>`
    );
  };
  return `<!DOCTYPE html>
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head>
      <title> </title>
      <!--[if !mso]><!-- -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <!--<![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style type="text/css">
        #outlook a {
          padding: 0;
        }
  
        .ReadMsgBody {
          width: 100%;
        }
  
        .ExternalClass {
          width: 100%;
        }
  
        .ExternalClass * {
          line-height: 100%;
        }
  
        body {
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
  
        table,
        td {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
  
        img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }
  
        p {
          display: block;
          margin: 13px 0;
        }
      </style>
      <!--[if !mso]><!-->
      <style type="text/css">
        @media only screen and (max-width: 480px) {
          @-ms-viewport {
            width: 320px;
          }
          @viewport {
            width: 320px;
          }
        }
      </style>
      <!--<![endif]-->
      <!--[if mso]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      <![endif]-->
      <!--[if lte mso 11]>
        <style type="text/css">
          .outlook-group-fix {
            width: 100% !important;
          }
        </style>
      <![endif]-->
  
      <style type="text/css">
        @media only screen and (min-width: 480px) {
          .mj-column-per-100 {
            width: 100% !important;
          }
        }
      </style>
  
      <style type="text/css"></style>
    </head>
  
    <body style="background-color: #f9f9f9;">
      <div style="background-color: #f9f9f9;">
        <!--[if mso | IE]>
            <table
               align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"
            >
              <tr>
                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
            <![endif]-->
  
        <div
          style="
            background: #f9f9f9;
            background-color: #f9f9f9;
            margin: 0px auto;
            max-width: 600px;
          "
        >
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="background: #f9f9f9; background-color: #f9f9f9; width: 100%;"
          >
            <tbody>
              <tr>
                <td
                  style="
                    border-bottom: #333957 solid 5px;
                    direction: ltr;
                    font-size: 0px;
                    padding: 20px 0;
                    text-align: center;
                    vertical-align: top;
                  "
                >
                  <!--[if mso | IE]>
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                    >
                      <tr></tr>
                    </table>
                  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!--[if mso | IE]>
                </td>
              </tr>
            </table>
            
            <table
               align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"
            >
              <tr>
                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
            <![endif]-->
  
        <div
          style="
            background: #fff;
            background-color: #fff;
            margin: 0px auto;
            max-width: 600px;
          "
        >
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="background: #fff; background-color: #fff; width: 100%;"
          >
            <tbody>
              <tr>
                <td
                  style="
                    border: #dddddd solid 1px;
                    border-top: 0px;
                    direction: ltr;
                    font-size: 0px;
                    padding: 20px 0;
                    text-align: center;
                    vertical-align: top;
                  "
                >
                  <!--[if mso | IE]>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                      
              <tr>
            
                  <td
                     style="vertical-align:bottom;width:600px;"
                  >
                <![endif]-->
  
                  <div
                    class="mj-column-per-100 outlook-group-fix"
                    style="
                      font-size: 13px;
                      text-align: left;
                      direction: ltr;
                      display: inline-block;
                      vertical-align: bottom;
                      width: 100%;
                    "
                  >
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="vertical-align: bottom;"
                      width="100%"
                    >
                      <tr>
                        <td
                          align="center"
                          style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          "
                        >
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tbody>
                              <tr>
                                <td style="width: 120px;">
                                  <img
                                    height="auto"
                                    src="https://www.koompi.com/img/pwa-logos/logo.png"
                                    style="
                                      border: 0;
                                      display: block;
                                      outline: none;
                                      text-decoration: none;
                                      width: 100%;
                                    "
                                    width="64"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
  
                      <tr>
                        <td
                          align="center"
                          style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: 'Helvetica Neue', Arial, sans-serif;
                              font-size: 24px;
                              font-weight: bold;
                              line-height: 22px;
                              text-align: center;
                              color: #525252;
                            "
                          >
                            Thank you for your order
                          </div>
                        </td>
                      </tr>
  
                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: 'Helvetica Neue', Arial, sans-serif;
                              font-size: 14px;
                              line-height: 22px;
                              text-align: left;
                              color: #525252;
                            "
                          >
                            <p>Hello <b>${name}</b>,</p>
  
                            <p>
                              Thank you for ordering. We received your order and
                              will begin processing it soon. Your order
                              information appears below.
                            </p>
                          </div>
                        </td>
                      </tr>
  
                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          "
                        >
                          <table
                            0="[object Object]"
                            1="[object Object]"
                            2="[object Object]"
                            border="0"
                            style="
                              cellspacing: 0;
                              color: #000;
                              font-family: 'Helvetica Neue', Arial, sans-serif;
                              font-size: 13px;
                              line-height: 22px;
                              table-layout: auto;
                              width: 100%;
                            "
                          >
                            <tr
                              style="
                                border-bottom: 1px solid #ecedee;
                                text-align: left;
                              "
                            >
                              <th style="padding: 0 15px 10px 0;">Item</th>
                              <th style="padding: 0 15px;">Qt.</th>
                              <th style="padding: 0 0 0 15px;" align="right">
                                Deposit
                              </th>
                            </tr>
                            ${displayProducts()}
                          </table>
                        </td>
                      </tr>
  
                      <tr>
                        <td
                          align="left"
                          style="
                            font-size: 0px;
                            padding: 10px 25px;
                            word-break: break-word;
                          "
                        >
                          <div
                            style="
                              font-family: 'Helvetica Neue', Arial, sans-serif;
                              font-size: 14px;
                              line-height: 20px;
                              text-align: left;
                              color: #525252;
                            "
                          >
                            Best regards,<br /><br />
                            <b>KOOMPI</b>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
  
                  <!--[if mso | IE]>
                  </td>
                
              </tr>
            
                        </table>
                      <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!--[if mso | IE]>
                </td>
              </tr>
            </table>
            
            <table
               align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"
            >
              <tr>
                <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
            <![endif]-->
  
        <div style="margin: 0px auto; max-width: 600px;">
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="width: 100%;"
          >
            <tbody>
              <tr>
                <td
                  style="
                    direction: ltr;
                    font-size: 0px;
                    padding: 20px 0;
                    text-align: center;
                    vertical-align: top;
                  "
                >
                  <!--[if mso | IE]>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                      
              <tr>
            
                  <td
                     style="vertical-align:bottom;width:600px;"
                  >
                <![endif]-->
  
                  <!--[if mso | IE]>
                  </td>
                
              </tr>
            
                        </table>
                      <![endif]-->
  
                  <div
                    class="mj-column-per-100 outlook-group-fix"
                    style="
                      font-size: 13px;
                      text-align: left;
                      direction: ltr;
                      display: inline-block;
                      vertical-align: bottom;
                      width: 100%;
                    "
                  >
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td
                            style="
                              padding-top: 10px;
                              padding-bottom: 10px;
                              padding-left: 10px;
                              padding-right: 10px;
                            "
                            class="socialLinks"
                            valign="top"
                            align="center"
                          >
                            <!-- Social Links (Facebook)// -->
                            <a
                              href="https://www.facebook.com/koompi/"
                              target="_blank"
                              style="display: inline-block;"
                              class="facebook"
                            >
                              <img
                                src="https://www.koompi.com/img/mail-icons/facebook.png"
                                alt=""
                                style="
                                  height: auto;
                                  width: 100%;
                                  max-width: 40px;
                                  margin-left: 2px;
                                  margin-right: 2px;
                                "
                                width="40"
                                border="0"
                              />
                            </a>
                            <!-- Social Links (Twitter)// -->
                            <a
                              href="https://medium.com/koompi"
                              target="_blank"
                              style="display: inline-block;"
                              class="twitter"
                            >
                              <img
                                src="https://www.koompi.com/img/mail-icons/medium.png"
                                alt=""
                                style="
                                  height: auto;
                                  width: 100%;
                                  max-width: 40px;
                                  margin-left: 2px;
                                  margin-right: 2px;
                                "
                                width="40"
                                border="0"
                              />
                            </a>
                            <!-- Social Links (Telegram)// -->
                            <a
                              href="https://t.me/koompi"
                              target="_blank"
                              style="display: inline-block;"
                              class="twitter"
                            >
                              <img
                                src="https://www.koompi.com/img/mail-icons/telegram.png"
                                alt=""
                                style="
                                  height: auto;
                                  width: 100%;
                                  max-width: 40px;
                                  margin-left: 2px;
                                  margin-right: 2px;
                                "
                                width="40"
                                border="0"
                              />
                            </a>
                            <!-- Social Links (LinkedIn)// -->
                            <a
                              href="https://www.linkedin.com/company/koompi"
                              target="_blank"
                              style="display: inline-block;"
                              class="twitter"
                            >
                              <img
                                src="https://www.koompi.com/img/mail-icons/linkIn.png"
                                alt=""
                                style="
                                  height: auto;
                                  width: 100%;
                                  max-width: 40px;
                                  margin-left: 2px;
                                  margin-right: 2px;
                                "
                                width="40"
                                border="0"
                              />
                            </a>
                            <!-- Social Links (Youtube)// -->
                            <a
                              href="https://www.youtube.com/channel/UC3fiB0ZtxidRUd6_EpdUaTA"
                              target="_blank"
                              style="display: inline-block;"
                              class="twitter"
                            >
                              <img
                                src="https://www.koompi.com/img/mail-icons/youtube.png"
                                alt=""
                                style="
                                  height: auto;
                                  width: 100%;
                                  max-width: 40px;
                                  margin-left: 2px;
                                  margin-right: 2px;
                                "
                                width="40"
                                border="0"
                              />
                            </a>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            style="padding: 10px 10px 5px;"
                            class="brandInfo"
                            valign="top"
                            align="center"
                          >
                            <!-- Brand Information // -->
                            <p
                              class="text"
                              style="
                                color: #777777;
                                font-family: 'Open Sans', Helvetica, Arial,
                                  sans-serif;
                                font-size: 12px;
                                font-weight: 400;
                                font-style: normal;
                                letter-spacing: normal;
                                line-height: 20px;
                                text-transform: none;
                                text-align: center;
                                padding: 0;
                                margin: 0;
                              "
                            >
                              ©&nbsp;KOOMPI CO., LTD. | Preah Ang Yukanthor Street
                              (19) | Phnom Penh, Cambodia
                            </p>
                          </td>
                        </tr>
  
                        <tr>
                          <td
                            style="padding: 0px 10px 10px;"
                            class="footerEmailInfo"
                            valign="top"
                            align="center"
                          >
                            <!-- Information of NewsLetter (Subscribe Info)// -->
                            <p
                              class="text"
                              style="
                                color: #777777;
                                font-family: 'Open Sans', Helvetica, Arial,
                                  sans-serif;
                                font-size: 12px;
                                font-weight: 400;
                                font-style: normal;
                                letter-spacing: normal;
                                line-height: 20px;
                                text-transform: none;
                                text-align: center;
                                padding: 0;
                                margin: 0;
                              "
                            >
                              If you have any quetions please contact us
                              <a
                                href="#"
                                style="
                                  color: #777777;
                                  text-decoration: underline;
                                "
                                target="_blank"
                                >pi@koompi.com.</a
                              ><br />
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!--[if mso | IE]>
                </td>
              </tr>
            </table>
            <![endif]-->
      </div>
    </body>
  </html>
  `;
};
