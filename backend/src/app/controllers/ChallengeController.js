import Challenge from '../models/Challenge'

class ChallengeController {
    async store(request, response) {

        const { title, description, deadline, requester, assignee, status } = request.body

        const challenge = await Challenge.create({
            title,
            description,
            deadline,
            requester,
            assignee,
            status
        })

        response.json({
            message: 'Challenge Created sucessfuly',
            challenge
        })
    }

    async index(request, response) {

        const challenges = await Challenge.findAll()
        return response.json(challenges)

    }

    async listByIndex(request, response) {

        const { index } = request.params

        const challenge = await Challenge.findOne({
            where: { id: index }
        })

        if (!challenge) {
            return response.status(404).json({ error: "Challenge not found" })
        }

        response.json(challenge)

    }

    async update(request, response) {

        const { index } = request.params

        const challenge = await Challenge.findByPk(index)

        console.log(challenge)

        // Check if challenge exists
        if (challenge === null) {
            return response.status(404).json({ error: 'Challenge not found' })
        }

        try {
            const challengeUpdated = await challenge.update(request.body)

            return response.json({
                massage: 'Challenge Updated',
                challengeUpdated
            })

        } catch (error) {
            console.log(error)
            return response.status(400).json({ error: 'Unknow error' })
        }
    }

    async delete(request, response) {
        const { index } = request.params

        const challenge = await Challenge.findByPk(index)

        if (challenge === null) {
            return response.status(404).json({ error: 'Challenge not found' })
        }

        const challengeDeleted = await challenge.destroy({
            where: { id: index }
        })

        response.json({
            message: 'Challenge Deleted',
            challengeDeleted
        })

    }
}

export default new ChallengeController()