const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports = app =>{
    app.post('/api/stripe',async (req,res)=>{
       try {
       const charge = await stripe.charges.create({
            amount:500,
            currency:'usd',
            description:'$5 for 5 email credits',
            source:req.body.id
        })
        console.log(charge);
       } catch (e) {
        console.log(e.message);
       }

    })
}