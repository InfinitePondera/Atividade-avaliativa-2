const axios = require('axios').default;
const geradorEmails = require('./geradorEmail');
const geradorNoticias = require('./geradorNoticias');

var noticias = geradorNoticias();
var emails = geradorEmails();

adicionarNoticias(noticias, 0);
cadastrarEmails(emails, 0);

function adicionarNoticias(noticias, i) {

        axios.post('http://localhost:8080/noticia', noticias[i]).then(res => {
            i++;
            if (i < noticias.length) {
                geradorNoticias(noticias, i)
            } 
        }).catch(err => {
            console.error(err);
        });

}

function cadastrarEmails(emails, i){

        axios.post('http://localhost:8080/inscricao', {email: emails[i]}).then(res => {
            i++;
            if (i < emails.length) {
                geradorEmails(emails, i)
            } 
        });

}

