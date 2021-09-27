const { response, request } = require('express');


const usersGet = (req = request, res = response) => {

    const { id, name, page = 1 } = req.query;

    res.json({
        VideoJuego: 'Contra',
        id,
        name,
        page
    });
};

const usersPost = (req, res = response) => {
    const body = req.body;
    res.json({
        msj: 'Hello World POST 2',
        body
    });
};

const userPut = (req = request, res = response) => {
    const { usuarioId } = req.params;
    const body = req.body;
    res.json({
        msj: 'Hello World PUT 2',
        body: usuarioId
    });
};
const usersPutError = (req, res = response) => {

    const dirArray = __dirname.split("\\");
    const dirRoot = dirArray.splice(0, dirArray.length - 1).join('\\');
    res.sendFile(`${dirRoot}/public/error.html`);
    //res.send('Nada que ver ' + dirRoot);
};

const usersDelete = (req, res = response) => {
    res.send('Hello World DELETE 123');
};




module.exports = {
    usersGet,
    usersPost,
    usersDelete,
    userPut,
    usersPutError
};