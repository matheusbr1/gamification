import { Router } from 'express'

import UserController from './app/controllers/UserController'

const routes = new Router()

routes.get('/', (request, response) => {
    return response.json({ message: "Welcome" })
})

// Create User with Sequelize test
routes.post('/users', UserController.store)

// Users Array
const users = [
    {
        name: "Pedro",
        email: 'pedro@gmail.com',
        password: "159756"
    }
]

// List users
routes.get('/users', (request, response) => {
    return response.json({ users })
})

// List users by index
routes.get('/users/:index', (request, response) => {

    const { index } = request.params

    const user = users[index]

    if (!user) {
        response.statusCode = 404
        return response.json({ error: 'User not found' })
    }

    return response.json(user)
})

// Update User 
routes.put('/users/:index', (request, response) => {
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
routes.delete('/users/:index', (request, response) => {

    const { index } = request.params

    users.splice(index, 1)

    return response.json(users)
})

export default routes