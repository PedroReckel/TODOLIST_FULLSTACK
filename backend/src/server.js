const app = require('./app')
require('dotenv').config()

const port = process.env.PORT || 3333  // Caso a porta que foi configurada não estiver disponivel a aplicação rodará na porta 3333

app.listen(port, () => console.log(`Server runnig on port ${port}`))