const geradorEmails = () => {
    var emails = [];
    for (let i = 1; i <= 7; i++) {
        let email = "fulano" + i + "@utfpr.com";
        emails.push(email);
    }
    return emails;
}
module.exports = geradorEmails;