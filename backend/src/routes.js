import { Router } from 'express'

import UserController from './app/controllers/UserController'
import ChallangeController from './app/controllers/ChallengeController'

const routes = new Router()

routes.get('/', (request, response) => {
    return response.json({ message: "Welcome" })
})

// Create User
routes.post('/users', UserController.store)

// List users
routes.get('/users', UserController.list)

// List users by index
routes.get('/users/:index', UserController.listByIndex)

// Update User 
routes.put('/users/:index', UserController.update)

// Delete User
routes.delete('/users/:index', UserController.delete)

// Create Challenge
routes.post('/challenges', ChallangeController.store)

export default routes