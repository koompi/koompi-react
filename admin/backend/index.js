require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser"); // parse cookie header
const cors = require("cors");
const app = express();
const schema = require("./schema/schema");
const graphqlHTTP = require("express-graphql");
const jwt = require("jsonwebtoken");

// ===== User Models =====
const User = require("./models/User");
const { MongoURI, ACCESS_TOKEN_SECRET } = process.env;

// ===== Authentication =====
const isAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).send("Access Denied");
  try {
    const verified = jwt.verify(token, ACCESS_TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send("invalid token");
  }
};

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use(
  cookieSession({
    name: "sid",
    keys: ["secret_key"],
    maxAge: 24 * 60 * 60 * 1000 // session will expire after 24 hours}))
  })
);

// parse cookies
app.use(cookieParser());

// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

app.use(
  "/admin",
  graphqlHTTP({
    schema,
    graphiql: true,
    customFormatErrorFn: error => ({
      message: error.message,
      state: error.originalError && error.originalError.state,
      locations: error.locations,
      path: error.path
    })
  })
);
mongoose
  .connect(MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Databse is connected..."))
  .catch(err => console.log(err));

//  ===== Login =====
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      return res.status(400).json({ message: "Invalid email or password" });
    } else {
      const token = jwt.sign(
        {
          email,
          fullname: user.fullname,
          isAdmin: user.isAdmin,
          avatar: user.avatar,
          approved: user.approved
        },
        ACCESS_TOKEN_SECRET
      );
      res.json({ token: token });
    }
  } catch (error) {
    console.log(error);
  }
});

const port = 8080;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
