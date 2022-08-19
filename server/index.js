require("dotenv").config();
const express = require("express");
require("./db/mongoose");
const cookieSession = require('cookie-session')
const passport = require('passport')
require("./models/User");
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App is up and running on PORT:", PORT);
});
