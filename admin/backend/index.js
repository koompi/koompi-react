require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser"); // parse cookie header
const cors = require("cors");
const app = express();
const schema = require("./schema/schema");
const api = require("./api/schema");
const graphqlHTTP = require("express-graphql");
const jwt = require("jsonwebtoken");
const fileUpload = require("express-fileupload");
const path = require("path");
const Stripe = require("stripe");
const CryptoJS = require("crypto-js");
const sesClient = require("./ses-client");
const bodyParser = require("body-parser");
const invoice = require("./invoice");

// ===== Import env proccess =====
const {
  DevMongoURI,
  MongoURI,
  ACCESS_TOKEN_SECRET,
  BONGLOY_SECRET_KEY,
  ABA_PAYWAY_MERCHANT_ID,
  ABA_PAYWAY_API_KEY,
} = process.env;

const bongloy = new Stripe(BONGLOY_SECRET_KEY, {
  host: "api.bongloy.com",
});

// set up cors to allow us to accept requests from our client
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "http://localhost:3001"], // allow to server to accept request from different origin
//     credentials: true // allow session cookie from browser to pass through
//   })
// );

app.use(cors());

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cookieSession({
    name: "sid",
    keys: ["secret_key"],
    maxAge: 24 * 60 * 60 * 1000, // session will expire after 24 hours}))
  })
);

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(
  fileUpload({
    limits: {
      fileSize: 5 * 1024 * 1024 * 1024, //5MB max file(s) size
    },
  })
);

// parse cookies
app.use(cookieParser());

// ===== Authentication =====
const isAuth = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).send("Access Denied");
  try {
    const verified = jwt.verify(token, ACCESS_TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send("invalid token");
  }
};

app.post("/koompi/mail/comfirm-order-items", async (req, res) => {
  // call sesClient to send an email
  const { email, firstname, lastname, items } = req.body;
  sesClient.sendEmail(
    email,
    "Order Comfirmation",
    `${invoice(`${firstname + " " + lastname}`, items)}`
  );

  res.send({ message: "Your order has been submitted." });
});

app.use(
  "/admin",
  isAuth,
  graphqlHTTP({
    schema,
    graphiql: false,
    customFormatErrorFn: (error) => ({
      message: error.message,
      state: error.originalError && error.originalError.state,
      locations: error.locations,
      path: error.path,
    }),
  })
);

app.use(
  "/api",
  graphqlHTTP({
    schema: api,
    graphiql: false,
    customFormatErrorFn: (error) => ({
      message: error.message,
      state: error.originalError && error.originalError.state,
      locations: error.locations,
      path: error.path,
    }),
  })
);

const getHash = (transactionId, amount) => {
  const hash = CryptoJS.HmacSHA512(
    ABA_PAYWAY_MERCHANT_ID + transactionId + amount,
    ABA_PAYWAY_API_KEY
  );
  return hash.toString(CryptoJS.enc.Base64);
};

app.post("/payment/option/create", (req, res) => {
  const { transactionId, amount } = req.body;
  return res.status(200).send(getHash(transactionId, amount));
});

// The payment with Bongloy
app.post("/charge", (req, res) => {
  try {
    bongloy.charges
      .create({
        amount: 36900,
        currency: "usd",
        source: req.body.bongloyToken,
      })
      .then(() => {
        res.json({ message: "Successful" });
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.send(err);
  }
});

//  ===== Login =====
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const User = require("./models/User");
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      return res.status(400).json({ message: "Invalid email or password" });
    } else {
      if (user.approved === false) {
        res
          .status(404)
          .json({ message: "You don't have a permission to access it" });
      } else {
        const token = jwt.sign(
          {
            email,
            fullname: user.fullname,
            isAdmin: user.isAdmin,
            avatar: user.avatar,
            approved: user.approved,
          },
          ACCESS_TOKEN_SECRET
        );
        res.status(200).json({ token });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

// ===== Upload Image Management =====
app.post("/upload/image", (req, res) => {
  console.log(req.files);

  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;
  console.log(file.name.replace(/ /g, "-").toLowerCase());

  file.mv(
    `${__dirname}/public/uploads/${file.name.replace(/ /g, "-").toLowerCase()}`,
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    }
  );
});

// ===== Database Connection =====
const PORT = 7006;

try {
  mongoose.set("useCreateIndex", true);
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useUnifiedTopology", true);
  mongoose
    .connect(MongoURI, (err) => {
      if (err) {
        console.error(err);
      }
      console.log("Connected to Database...");
    })
    .then(() => {
      app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    });
} catch (e) {
  console.error(e);
}

// mongoose.connect(
//   "mongodb://sanvuthy:vuthy1997@ds037571.mlab.com:37571/koompi-bi",
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err) => {
//     {
//       if (err) {
//         console.log("Some problem with the connection " + err);
//       } else {
//         console.log("The Mongoose connection is ready");
//         app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//       }
//     }
//   }
// );
