const _=require('lodash')
const {Path} = require('path-parser')
const {URL} = require('url')
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("Survey");


module.exports = (app) => {

  app.get('/api/surveys',requireLogin,async (req,res)=>{
   const surveys = await Survey.find({_user:req.user.id},{
      recipients:false
    })

    res.send(surveys)
  })

 app.get('/api/surveys/:surveyId/:choice',(req,res)=>{
  
  res.send('Thanks for your input!')

 })

 app.post('/api/surveys/webhooks',(req,res)=>{
  //extract email,surveyI and recipient choice from webhook
  
  const p = new Path('/api/surveys/:surveyId/:choice')

  _.chain(req.body)
  .map(({url,email})=>{
    const pathName = new URL(url).pathname
    const match = p.test(pathName)

    return (match) ? {email,surveyId:match.surveyId,choice:match.choice}:null
  })

//get unique events
  .compact()
  .uniqBy('email','surveyId')
  //updating dB with recipient response
  .each(({surveyId,email,choice}) => {
    Survey.updateOne({
      _id:surveyId,
      recipients: {
        $elemMatch:{email:email,responded:false}
      
      }
    },{
      $inc:{[choice]:1},
      $set:{'recipients.$.responded':true},
      lastResponded: new Date()
    }).exec()
  })
   .value()

   res.send({})
 })

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));
    
    try {
      await mailer.send()
      await survey.save()
      req.user.credits -=1
      const user = await req.user.save()

      res.send(user)

    } catch (error) {
      res.status(422).send(error)
    }


  });

  app.delete('/api/surveys/:surveyId',requireLogin,async (req,res)=>{
    const deleteSurvey = await Survey.deleteOne({_id:req.params.id})

    res.send(deleteSurvey)
  })
};
