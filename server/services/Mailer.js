const sgMail = require("@sendgrid/mail");
     
    class Mailer {
      constructor({ subject, recipients }, content) {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        this.msg = {
          to: recipients.map(({ email }) => email),
          from: "luqmanaibrahim@gmail.com",
          subject: subject,
          html: content,
          trackingSettings: { enable_text: true, enabled: true }
        };
      }
     
      async send() {
        const response = await sgMail.send(this.msg);
        return response;
      }
    }


module.exports = Mailer;
