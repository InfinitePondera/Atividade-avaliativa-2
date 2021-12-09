const express = require('express');
const router = express.Router();
const storage = require('node-persist');

const noticias = storage.create({dir:'noticias', ttl: 3000});
const emails = storage.create({dir:'emails', ttl: 3000});

await storage.init();

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
module.exports = router;
