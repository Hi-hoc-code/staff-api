const express = require('express')
const bodyParser = require('body-parser')
const { pool } = require('./sever/queries')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM STAFF ', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}
app.get('/staff', getUsers);

const createUser = (request, response) => {
    const { name, email } = request.body
    pool.query('INSERT INTO staff(name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.insertId}`)
    })
  }
app.post('/staff', createUser);
