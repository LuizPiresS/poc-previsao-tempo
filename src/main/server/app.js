
import bodyParser from 'body-parser'
import express from 'express'
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime' // necessario para a compilação do projeto

const app = express()
app
  .use(bodyParser.json())
  .post('/', (req, res) => {

  })
  .get('/', (req, res) => {
    res.json('Tu não deveria estar aqui, ou deveria?')
  })
export default app
