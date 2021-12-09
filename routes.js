const express = require('express');
const router = express.Router();
const storage = require('node-persist');
const nodemailer = require('nodemailer');

const noticias = storage.create({dir:'noticias', ttl: 3000});
const emails = storage.create({dir:'emails', ttl: 3000});

await storage.init();

exports.post = (req, res, next) => {
    res.status(200).send('Request recebido');
};
exports.put = (req, res, next) => {
    res.status(200).send('Request enviado');
};
exports.get = (req, res, next) => {
    res.status(200).send('Request recebido');
}

router.get('/noticia', async (req, res) => {
    const noticias = await noticias.getItem('noticias');
    return res.status(200).send(noticias);
});

router.post('/noticia', async (req, res) => {
    if (await noticias.getItem('noticias') != undefined) {
        const noticias = await noticias.getItem('noticias');

        noticias.push(req.body);

        await noticias.setItem('noticias', noticias);
    } else { 
        return res.status(400).send('erro');
    }
    return res.status(200).send('cadastrado');
});

router.get('/noticia/:id', async (req, res) => {
    var id = parseInt(req.params.id);
    const noticias = await noticias.getItem('noticias');

    if (noticias === undefined){
        return res.send(400);
    } else {
        const noticia = noticias.find(noticia => noticia.id === id);
        return res.status(200).send(noticia);
    }    
});

router.post('/inscricao', async (req, res) => {
    if (await emails.getItem('emails') != undefined) {
        const emails = await emails.getItem('emails');

        emails.push(req.body);

        await emails.setItem('email', emails);
    } else {
        return res.status(400).send('erro');
    }
    return res.status(200).send('success');
})

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
        const response = await transporter.sendMail({
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

app.put('/enviar/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    const emails = await emails.getItem('emails');

    if(emails === undefined) res.status(400).send("Não há emails na lista")

    axios.get('http://localhost:3000/noticia/' + id).then(res => {
        const noticia = res.data;
        var i = 0;
        var wait = setInterval(() =>{
            enviar(noticia, emails[i]);
            console.log("Mandando para: " + emails[i]);
            count++;
            if(count === emails.length){
                clearInterval(intervalo);

                res.send(emails);
            }
        }, 2000)

    }).catch(err => {
        res.status(400).send("Lista de notícias vazias!")
    })

})

const port = '8080';

app.listen(port, function () {
    console.log(`app listening on port ${port}`);
});

module.exports = router;
