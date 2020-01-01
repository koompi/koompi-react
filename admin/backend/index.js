const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser"); // parse cookie header
const cors = require("cors");
const app = express();
const schema = require("./schema/schema");
const graphqlHTTP = require("express-graphql");

require("dotenv").config();

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
  "/graphiql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
mongoose
  .connect(process.env.MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Databse is connected..."))
  .catch(err => console.log(err));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
