//Express Setup
const Express = require("express");
const app = Express();

//Cors Setup
const cors = require("cors");
app.use(cors());

// Dot Env Setup
let dotenv = require("dotenv").config();

// GraphQL Setup
const { graphqlHTTP } = require("express-graphql");
const schema = require("./models/BuildSchema.js");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Default API
app.use(Express.json());
const message = "GQL Server Working.. ✌️";
app.get("/", async (req, res) => {
  return res.json(message);
});

const starts = async () => {
  try {
    app.listen(process.env.PORT, () =>
      console.log(`🔰 Server Running at Port : ${process.env.PORT}`)
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

starts();

const mongoose = require("mongoose");
const { setMaxIdleHTTPParsers } = require("http");
const { log } = require("console");
mongoose.set("strictQuery", false);

const AtlasConn = async () => {
  try {
    await mongoose.connect(`${process.env.MongodbUri}`);
    console.log("🎋 Atlas Connection is Established");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
AtlasConn();

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5003/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Import MongoDB Schema
// const Admins = require("./models/AdminModels.js");
// const Comments = require("./models/commentModel.js");
// const Notifications = require("./models/notifyModel.js");
// const Message = require("./models/messageModel.js");
// const Conversations = require("./models/conversationModel.js");
// const Users = require("./models/userModel.js");
// const Posts = require("./models/postModel.js");
