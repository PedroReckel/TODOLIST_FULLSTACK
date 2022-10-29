const getAll = (req, res) => {
    return response.status(200).json({ message: 'Controller está tudo certo!' })
}

module.exports = {
    getAll
}