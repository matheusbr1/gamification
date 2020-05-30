const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    return response.json({ message: "Welcome" })
})

const users = [
    {
        name: "Pedro",
        email: 'pedro@gmail.com',
        password: "159756"
    }
]

// Create users
app.post('/users', (request, response) => {

    const { name, email, password } = request.body

    const user = {
        name,
        email,
        password
    }

    users.push(user)

    return response.json(users)
})

// List users
app.get('/users', (request, response) => {
    return response.json({ users })
})

// List users by index
app.get('/users/:index', (request, response) => {

    const { index } = request.params

    const user = users[index]

    if (!user) {
        response.statusCode = 404
        return response.json({ error: 'User not found' })
    }

    return response.json(user)
})

// Update User 
app.put('/users/:index', (request, response) => {
    const { name, email, password } = request.body

    const { index } = request.params

    const user = {
        name,
        email,
        password
    }

    users[index] = user

    return response.json(users)
})

// Delete
app.delete('/users/:index', (request, response) => {

    const { index } = request.params

    users.splice(index, 1)

    return response.json(users)
})

app.listen(3333, () => [
    console.log('💻 Server listening on port 3333 🚪')
])