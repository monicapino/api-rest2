import express from 'express'

const app = express()
const port = 3333

app.get('/', (request, response) => {
    const { id } = request.query
    response.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})