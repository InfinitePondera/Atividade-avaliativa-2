const axios = require('axios').default;

axios.get('http://localhost:8080/noticias').then(res => {
    const noticias = res.data;
    
    noticias.forEach(noticia => {
        console.log('ID: ' + noticia.id + '\n');
        console.log('Titulo: ' + noticia.titulo + '\n');
        console.log('Sumário: ' + noticia.sumario + '\n');
        console.log('URL: ' + noticia.url);
    });
    const noticia = noticias[noticias.length - 1];

    axios.put('http://localhost:8080/enviar/' + noticia.id).then(() => {
        console.log('Notícia com ID: ' + noticia.id + ' enviada');
    }).catch((err) => {
        console.error(err);
    });
});