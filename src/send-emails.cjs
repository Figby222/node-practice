const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "example@example.com",
        pass: "password",
    },
});

const mailOptions = {
    from: "example@example.com",
    to: "cookies@example.com",
    subject: "Sending Emails",
    text: "ez",
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log("Email sent: " + info.response);
});

const mailOptionsMultipleReceivers = {
    from: "example2@example2.com",
    to: "cookies2@example2.com, cookies4@example4.com",
    subject: "Sending Emails to Multiple People",
    text: "ez ez ez ez",
};

transporter.sendMail(mailOptionsMultipleReceivers, (error, info) => {
    if (error) {
        console.log(error);
        return;
    }
    
    console.log("Email sent: " + info.response);
});

const mailOptionsHTML = {
    from: "example3@example3.com",
    to: "cookies3@example3.com",
    subject: "Sending Emails with HTML",
    text: "<h1>ez</hz>",
};

transporter.sendMail(mailOptionsHTML, (error, info) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log("Email sent: " + info.response);
});

const mailOptionsHTMLMultipleReceivers = {
    from: "example4@example4.com",
    to: "cookies3@example3.com, cookies4@example4.com",
    subject: "Sending Emails with HTML to Multiple People",
    text: "<h1>ez</h1><h1>ez</h1><h1>ez</h1><h1>ez</h1>",
};

transporter.sendMail(mailOptionsHTMLMultipleReceivers, (error, info) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log("Email sent: " + info.response);
});

