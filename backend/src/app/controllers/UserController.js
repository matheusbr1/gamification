import User from '../models/User'

class UserController {
    async store(request, response) {
        const { name, email, password, coordinator } = request.body

        const emailExists = await User.findOne({
            where: { email }
        })

        // check if email exists
        if (emailExists) {
            return response.json({ message: 'This email is already used' })
        }

        const user = await User.create({
            name,
            email,
            password_hash: password,
            coordinator
        })

        return response.json({
            message: 'User created sucessfuly',
            user
        })
    }
}

export default new UserController()