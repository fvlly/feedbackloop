const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const requireLogin = require("../middlewares/requireLogin");
module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    try {
      const charge = await stripe.charges.create({
        amount: 500,
        currency: "usd",
        description: "$5 for 5 email credits",
        source: req.body.id,
      });
      req.user.credits += 5;
      const user = await req.user.save();
      res.send(user);
    } catch (e) {
      console.log(e.message);
    }
  });
};
