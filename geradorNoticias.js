function gerarNoticia(titulo, sumario, url) {
    return {
        titulo: titulo,
        sumario: sumario,
        url: url
    } 

}

const gerarNoticias = () => {
    var noticias = [];
    for (let i = 1; i <= 5; i++) {
        let noticia = gerarNoticia(
            "Noticia n°" + i, 
            "Sumario n°" + i, 
            "URL " + i
        );
        noticias.push(noticia);
    }
    return noticias;
}
module.exports = gerarNoticias;