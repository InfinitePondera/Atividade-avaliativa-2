const express = require('express');
const router = express.Router();
const storage = require('node-persist')

const noticias = storage.create({dir:'noticias', ttl: 3000});
const emails = storage.create({dir:'emails', ttl: 3000});

await storage.init();

router.get('/noticia', (req, res) => {
    return res.status(200).send(
        console.log(await noticias.values())
    );
});
router.post('/noticia', (req, res) => {
    await noticias.setItem('noticias', req.body);
    return res.status(200).send('cadastrado');
})
module.exports = router;
