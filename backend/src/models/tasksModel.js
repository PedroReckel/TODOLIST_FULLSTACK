const connection = require('./connection')

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks')
    return tasks
}  // Essa função vai retornar todas as tasks que tem no banco de dados

module.exports = {
    getAll
}  // Criei um objeto "module.exports", pois eu quero exportar várias variáveis/funções   