module.exports = (survey) => {
    return  `
    <html>
        <body>
        <div style='text-align:cnter;'>
        <h3>I'd like your input!</h3>
        <p>Please answer the following question:</p>
        <p>${survey.body}</p>
        <div>
        <a href="${process.env.REDIRECT_DOMAIN}/api/surveys/feedback">Yes</a>
        </div>
        <div>
        <a href="${process.env.REDIRECT_DOMAIN}/api/surveys/feedback">No</a>
        </div>
        </body>
    </html>
    
    `
}