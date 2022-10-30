const connection = require('./connection')

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks') // Esse "[]" envolta da minha variável tasks é um array destructuring. Eu estou pegando a primeira posição do array e salvando dentro da variável
    return tasks
}  // Essa função vai retornar todas as tasks que tem no banco de dados

const createTask = async (task) => {
    const { title } = task

    const dateUTC = new Date(Date.now()).toUTCString()
    console.log(dateUTC)

    const query = 'INSERT INTO tasks(title, status, created_at) VALUES(?, ?, ?)'

    const createdTask = await connection.execute(query, [title,'Pendente', ''])
}

module.exports = {
    getAll,
    createTask,
}  // Criei um objeto "module.exports", pois eu quero exportar várias variáveis/funções   