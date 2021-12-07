exports.post = (req, res, next) => {
    res.status(200).send('Request recebido');
};
exports.put = (req, res, next) => {
    res.status(200).send('Request enviado');
};
exports.get = (req, res, next) => {
    res.status(200).send('Request recebido');
}