const { request } = require("express")

const validateFildTitle = (request, response, next) => {
    const { body } = request

    if (body.title == undefined) {
        return response.status(400).json({ message: 'The fild "title" is required' })
    }

    if (body.title == '') {
        return response.status(400).json({ message: 'The fild "title" cannot be empty' })
    }

    next()
}

const validateFieldStatus = (request, response, next) => {
    const { body } = request

    if (body.status == undefined) {
        return response.status(400).json({ menssage: 'The fild "status" is requied' })
    }

    if (body.status == '') {
        return response.status(400).json({ message: 'The fild "status" cannot be empty' })
    }

    next()
}

module.exports = {
    validateFildTitle,
    validateFieldStatus,
}