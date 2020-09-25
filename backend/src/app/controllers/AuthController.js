import User from '../models/User'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import configs from '../../config/auth'

class AuthController {
    async sign(request, response, next) {

        const { email, password } = request.body

        const user = await User.findOne({
            where: { email }
        })

        if (!user) {
            return response.status(401).json({
                message: 'Authentication failured'
            })
        }

        const passwordMatched = await compare(password, user.password_hash)

        if (!passwordMatched) {
            return response.status(401).json({
                message: 'Authentication failured'
            })
        }

        const token = sign({
            user_id: user.id,
            user_name: user.name,
            user_email: user.email,
            user_coordinator: user.coordinator
        }, configs.jwt.secretKey,
            { expiresIn: configs.jwt.expiresIn }
        )

        response.json({
            message: 'Authentication successful',
            token
        })
    }
}

export default new AuthController()