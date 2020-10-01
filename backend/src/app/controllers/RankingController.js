import User from "../models/User";

class RankingController {
  async list(request, response) {
    const users = await User.findAll({
      attributes: ["id", "name", "avatar", "stars"],
      include: {
        association: "challenges",
        attributes: ["id", "title", "status"],
        where: { status: "closed" },
      },
    });

    if (!users) {
      return response.json({
        error: "No users found",
      });
    }

    // Filter for pagination
    const { _page, _limit } = request.query;

    if (_page && _limit) {
      let page = _page * _limit - _limit;

      let usersRankingPagination = await User.findAndCountAll({
        attributes: ["id", "name", "avatar", "stars"],
        include: {
          association: "challenges",
          attributes: ["id", "title", "status"],
          where: { status: "closed" },
        },
        limit: _limit,
        offset: page,
      });

      return response.json({
        count: usersRankingPagination.count,
        users: usersRankingPagination.rows,
      });
    }

    const usersRanking = users.map((user) => {
      return {
        name: user.name,
        avatar: user.avatar,
        stars: user.stars,
        challengesCompleted: user.challenges.length,
      };
    });

    return response.json({
      usersRanking,
    });
  }
}

export default new RankingController();
