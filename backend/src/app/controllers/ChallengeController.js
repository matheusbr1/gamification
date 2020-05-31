import Challenge from '../models/Challenge'

class ChallengeController {
    async store(request, response) {

        const { title, description } = request.body

        const challenge = await Challenge.create({
            title,
            description
        })

        response.json({
            message: 'Challenge Created sucessfuly',
            challenge
        })
    }
}

export default new ChallengeController()