//require
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
//require passport and configure in middleware
const passport = require("./passport");

//middleware
app.use(express.json()); //JSON parsing

//cors
const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  optionsSuccessStatus: 204
};
app.use(cors(corsOptions));
// app.use(cors())

//sessions
app.use(
  session({
    store: new MongoStore({
      url: "mongodb://localhost:27017/yeeteroni-and-cheese"
    }),
    secret: "Rewrite this later with dot env!",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 //one hour maximum login time
    }
  })
);

//middleware - passport
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/api/v1/users", routes.users);
app.use("/api/v1/auth", routes.auth);

//connection
const PORT = /*process.env.PORT ||*/ 4000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
