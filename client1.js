const axios = require('axios').default;


Promise.all([
    axios.post('/inscricao', {
        id: 1,
        email: 'ilemus@mobii.site'
    }),
    axios.post('/inscricao', {
        id: 2,
        email: 'voidsoul@codm.site'
    }),
    axios.post('/inscricao', {
        id: 3,
        email: 'julytatyana@xlsmail.com'
    }),
    axios.post('/inscricao', {
        id: 4,
        email: 'kamoxa@filert.site'
    }),
    axios.post('/inscricao', {
        id: 5,
        email: 'musya111087@riuire.com'
    }),
    axios.post('/inscricao', {
        id: 6,
        email: 'pepekur@cheapnitros.com'
    }),
    axios.post('/inscricao', {
        id: 7,
        email: 'demerius310@coffeepancakewafflebacon.com'
    }),
    axios.post('/noticia', {
        id: 1,
        titulo: 'BC sobe juros pela setima vez',
        resumo: 'BC sobe juros Selic pela sétima vez no ano, aumentando para 9,25%',
        url: 'https://economia.uol.com.br/noticias/redacao/2021/12/08/bc-copom-juros-selic-8-dezembro.htm?cmpid=copiaecola'
    }),
    axios.post('/noticia', {
        id: 2,
        titulo: 'Biden diz que ameaçou Putin com sanções "nunca vistas" se Ucrânia for atacada',
        resumo: 'O presidente dos Estados Unidos, Joe Biden, declarou nesta quarta-feira (8) que advertiu o contraparte russo, Vladimir Putin, sobre sanções americanas sem precedentes caso a Rússia ataque a Ucrânia.',
        url: 'https://www.msn.com/pt-br/noticias/mundo/biden-diz-que-amea%C3%A7ou-putin-com-san%C3%A7%C3%B5es-nunca-vistas-se-ucr%C3%A2nia-for-atacada/ar-AARCexo'
    }),
    axios.post('/noticia', {
        id: 3,
        titulo: 'F1: Mercedes rescinde com patrocinadora após pressão de Hamilton',
        resumo: 'Durou pouco o patrocínio da empresa irlandesa Kingspan à Mercedes na Fórmula 1. O contrato que valeria para as duas últimas corridas desta temporada foi encerrado hoje (8) após muita pressão externa e até um ultimato de Lewis Hamilton.',
        url: 'https://www.uol.com.br/esporte/ultimas-noticias/2021/12/08/f1-mercedes-rescinde-com-patrocinadora-apos-pressao-de-hamilton-entenda.htm'
    }),
    axios.post('/noticia', {
        id: 4,
        titulo: 'Exclusivo: esportivo Toyota Corolla GR de 300 cv virá ao Brasil',
        resumo: 'a Toyota vai lançar o novíssimo Corolla Hatch Gazoo Racing, versão esportiva que sairá do forno em 2022 e terá nada menos do que 300 cv de potência.',
        url: 'https://motor1.uol.com.br/news/553241/toyota-corolla-esportivo-brasil/'
    }),
    axios.post('/noticia', {
        id: 5,
        titulo: 'Bayern vence, mantém 100% e elimina Barcelona da Champions',
        resumo: 'O Bayern de Munique venceu o Barcelona por 3 a 0 nesta quarta-feira, na Allianz Arena, e encerrou sua participação da fase de grupos da Liga dos Campeões com 100% de aproveitamento',
        url: 'https://www.uol.com.br/esporte/futebol/ultimas-noticias/2021/12/08/bayern-vence-mantem-100-e-elimina-barcelona-da-champions.htm'
    })
])
