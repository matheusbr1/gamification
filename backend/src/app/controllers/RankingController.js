class RankingController {
    async list(request, response) {
        response.json({
            message: 'Ranking Controller'
        })
    }
}

export default new RankingController()