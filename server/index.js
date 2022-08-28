require("dotenv").config();
const express = require("express");
require("./db/mongoose");
const cookieSession = require('cookie-session')
const passport = require('passport')

require("./models/User");
require("./models/Survey");
require("./services/passport");

const app = express();

app.use(express.json())
app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys:[process.env.COOKIE_KEY]
  })
)

app.use(passport.initialize())
app.use(passport.session())

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

//production setup client side
if (process.env.NODE_ENV === "production") {
  const path = require("path");
 
  // serve production assets e.g. main.js if route exists
  app.use(express.static(path.resolve(__dirname, "../client/dist")));
 
  // serve index.html if route is not recognized
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App is up and running on PORT:", PORT);
});
