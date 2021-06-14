const {response, request} = require('express')
const usersGet = (req = request, res = response) => {
    const {q, nombre, apikey} = req.query
    res.json({
        ok: true,
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey
    })
}

const userPost = (req = request, res = response )=> {
    const {nombre, edad} = req.body
    res.json({
        ok: true,
        nombre,
        edad
    })
}

const userPut = (req = request, res = response) => {
    const {id} = req.params
    res.json({
        ok: true,
        msg: 'put API - Controlador',
        id
    })
}

const userDelete = (req = request, res = response )=> {
    res.json({
        ok: true,
        msg: 'delete API - Controlador'
    })
}

module.exports = {
    usersGet,
    userPost,
    userPut,
    userDelete
}