const express = require('express');
const bodyParser = require('body-parser');
const storage = require('node-persist');
const geradorEmails = require('./geradorEmail');
const axios = require('axios').default;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/noticia', async (req, res) => {
    let noticias;
    await storage.init();
    noticias = await storage.getItem("noticias");

    if(noticias === undefined){
        await storage.setItem('noticias', []);
        noticias = await storage.getItem("noticias");
    }
    var id = 0;
    if (noticias.length) {
        id = noticias[(noticias.length) - 1].id;
        id++;
    }
    noticias.push({
        id: id,
        titulo: req.body.titulo,
        sumario: req.body.sumario,
        url: req.body.url
    });
    await storage.updateItem('noticias', noticias);
    res.send("POSTado");

});

app.get('/noticias', async (req, res) => {
    await storage.init();
    const noticias = await storage.getItem("noticias");
    res.send(noticias);
});

app.get('/noticia/:id', async(req, res) => {
    let id = parseInt(req.params.id);
    await storage.init();
    const noticias = await storage.getItem("noticias");
    if (noticias === undefined) {
        res.status(400).send("Não há notícias");
    }
    else {
        let noticia = noticias.find(noticia => noticia.id === id);
        if(noticia === undefined) res.status(400).send("Notícia informada não existe");
        res.status(200).send(noticia);
    }
   
});

app.post('/inscricao', async (req, res) => {
    let emails;
    await storage.init();
    emails = await storage.getItem("emails");

    if (emails === undefined){
        await storage.setItem('emails', []);
        emails = await storage.getItem("emails");
    }
    emails = await storage.getItem("emails");
    const email = req.body.email;
    emails.push(email);
    await storage.updateItem('emails', emails);
    res.send("Inscrevido");
});

app.put('/enviar/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await storage.init();
    const emails = await storage.getItem("emails");
    if (emails === undefined) {
        res.status(400).send("Emails vazios");
    }
    axios.get('http://localhost:8080/noticia/' + id).then(resposta => {
        const noticia = resposta.data;
        let count = 0;
        var intervalo = setInterval(() =>{
            geradorEmails(noticia, emails[count]);
            console.log("Mandando para " + emails[count] + "...");
            count++;
            if(count === emails.length){
                clearInterval(intervalo);
                console.log("\nDone!\n");

                res.send(emails);
            }
        }, 2000)
    }).catch(err => {
        res.status(400).send("Notícia não existe");
    })
})

app.listen(8080, () => {
    console.log(`Servidor online no port 8080`);
})