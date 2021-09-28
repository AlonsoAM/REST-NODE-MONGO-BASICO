const {
    response,
    request
} = require('express')
const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs')


const usersGet = async (req = request, res = response) => {
    // const {q, nombre, apikey, limit, page = 1} = req.query
    const {
        limite = 10, desde = 0
    } = req.query
    const usuarios = await Usuario.find().limit(Number(limite)).skip(Number(desde))
    const totalUsuarios = await Usuario.countDocuments()
    res.json({
        totalUsuarios,
        usuarios
    })
}



const userPost = async (req = request, res = response) => {

    const {
        nombre,
        correo,
        password,
        rol
    } = req.body
    const usuario = new Usuario({
        nombre,
        correo,
        password,
        rol
    })

    // Encriptar la Contraseña
    const salt = bcrypt.genSaltSync()
    usuario.password = bcrypt.hashSync(password, salt)

    // Guardar en la base de datos
    await usuario.save()
    res.json({
        usuario
    })
}

const userPut = async (req = request, res = response) => {
    const {
        id
    } = req.params
    const {
        _id,
        password,
        google,
        correo,
        ...user
    } = req.body

    // TODO validar contra base de datos
    if (password) {
        // Encriptar la Contraseña
        const salt = bcrypt.genSaltSync()
        user.password = bcrypt.hashSync(password, salt)
    }

    const usuario = await Usuario.findByIdAndUpdate(id, user)

    res.json({
        msg: 'Usuario actualizado con exito',
        usuario
    })
}

const userDelete = (req = request, res = response) => {
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