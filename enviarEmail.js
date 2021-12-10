const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'josefa.zieme67@ethereal.email',
        pass: 'kP6w2wKrmSK1xRe1Tv'
    }
});

async function enviar(noticia, emails){
    try{
        await transporter.sendMail({
            from: '"Josefa Zieme" <josefa.zieme67@ethereal.email>',
            to: emails,
            subject: noticia.titulo,
            text: noticia.resumo
        })
        
        return true
    }catch(err) {
       return false
    }
}

module.exports = enviar;