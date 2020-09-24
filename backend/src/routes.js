import { Router } from 'express'

import UserController from './app/controllers/UserController'
import ChallangeController from './app/controllers/ChallengeController'
import ChallengeController from './app/controllers/ChallengeController'
import Challenge from './app/models/Challenge'

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

// List All Challenges
routes.get('/challenges', ChallengeController.index)

// List a Challente by index
routes.get('/challenges/:index', ChallengeController.listByIndex)

// Challenge Update
routes.put('/challenges/:index', ChallengeController.update)

// Challenge Delete
routes.delete('/challenges/:index', ChallengeController.update)

export default routes