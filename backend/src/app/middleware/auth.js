import { verify } from 'jsonwebtoken'
import config from '../../config/auth'

const Auth = (request, response, next) => {
    try {

        const { authorization } = request.headers

        const token = authorization.split(' ')[1]

        const tokenDecoded = verify(token, config.jwt.secretKey)

        request.user = tokenDecoded

        console.log(tokenDecoded)

        next()

    } catch (err) {

        console.log(err)

        return response.status(401).json({
            message: 'Authentication failured'
        })

    }

}

export default Auth