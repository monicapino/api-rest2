import express from 'express'
import { myMiddleware } from './middlewares/myMiddleware'

const PORT = 3333

const app = express()
app.use(express.json())

//app.use(myMiddleware)

app.get("/products", myMiddleware, (request, response) => {
    const { page, limit } = request.query

    response.send(`Página ${page} - Limite ${limit}`)
})


app.post("/products", myMiddleware, (request, response) => {
    const { name, price } = request.body 

    response.status(201).json({ name, price, user_id: request.user_id })
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})





