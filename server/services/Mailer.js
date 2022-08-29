const sendgrid = require("sendgrid");
const { mail: helper } = sendgrid;

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(process.env.SENDGRID_API_KEY);
    this.from_email = new helper.Email("luqmanaibrahim@gmail.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients); //helper function handling incoming emails

    this.addContent(this.body); //sendgrid helper
    this.addClickTracking();
    this.addRecipients();
  }


formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    //identify unqiue users using sendgrid tracking
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();
    
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  async send() { //sends mailer object to sendgrid
   try {
    const request = this.sgApi.emptyRequest({
        method: "POST",
        path: "/v3/mail/send",
        body: this.toJSON(),
      });
  
      const response = await this.sgApi.API(request);
      return response;

   } catch (error) {
    console.log(error.message);
   }
  }
}

module.exports = Mailer;
