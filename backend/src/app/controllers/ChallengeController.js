import Challenge from "../models/Challenge";
import User from "../models/User";

import { formatDistance } from "date-fns";

class ChallengeController {
  async store(request, response) {
    const {
      title,
      description,
      deadline,
      requester,
      assignee,
      status,
      difficulty,
    } = request.body;

    const { user_id } = request.params;

    // Buscando o user pelo ID
    const user = await User.findByPk(user_id);

    if (!user) {
      return response.json({
        error: "User not found",
      });
    }

    const challenge = await Challenge.create({
      title,
      description,
      deadline,
      requester,
      assignee,
      status,
      difficulty,
      user_id,
    });

    return response.json({
      message: "Challenge Created sucessfuly",
      challenge,
    });
  }

  async index(request, response) {
    const orderById = (array) =>
      array.sort(function (a, b) {
        return a.id - b.id;
      });

    let challenges = await Challenge.findAll();

    challenges = orderById(challenges);

    const count = challenges.length;

    response.set("x-total-count", challenges.length);

    // Filter Params for pagination
    const { _page, _limit } = request.query;

    if (_page && _limit) {
      let page = _page * _limit - _limit;

      let challangesByPage = await Challenge.findAndCountAll({
        limit: _limit,
        offset: page,
      });

      challangesByPage = orderById(challangesByPage.rows);

      console.log(challangesByPage);

      return response.json({
        count,
        challenges: challangesByPage,
      });
    }

    return response.json({
      count,
      challenges,
    });
  }

  async listByIndex(request, response) {
    const { index } = request.params;

    const challenge = await Challenge.findOne({
      where: { id: index },
    });

    if (!challenge) {
      return response.status(404).json({ error: "Challenge not found" });
    }

    response.json(challenge);
  }

  async listByUser(request, response) {
    const { user_id } = request.params;

    const orderById = (array) =>
      array.sort(function (a, b) {
        return a.id - b.id;
      });

    // Filter for pagination
    const { _page, _limit } = request.query;

    const user = await User.findByPk(user_id, {
      include: {
        association: "challenges",
        attributes: [
          "id",
          "title",
          "description",
          "deadline",
          "requester",
          "assignee",
          "status",
          "difficulty",
          "user_id",
        ],
      },
    });

    if (!user) {
      return response.status(404).json({
        error: "User not found",
      });
    }

    if (_page && _limit) {
      let page = _page * _limit - _limit;

      let challangesByPage = await Challenge.findAndCountAll({
        attributes: [
          "id",
          "title",
          "description",
          "deadline",
          "requester",
          "assignee",
          "status",
          "difficulty",
          "user_id",
        ],
        where: {
          user_id,
        },
        limit: _limit,
        offset: page,
      });

      return response.json({
        count: challangesByPage.count,
        challenges: orderById(challangesByPage.rows),
      });
    }

    return response.json(user.challenges);
  }

  async update(request, response) {
    const { index } = request.params;

    const challenge = await Challenge.findByPk(index);

    // Check if challenge exists
    if (challenge === null) {
      return response.status(404).json({ error: "Challenge not found" });
    }

    try {
      const { status } = request.body;

      // Se o update for no status preciso conferir se ele passou do prazo de entregar pra atualizar as estrelas do usuário

      if (challenge.status !== status) {
        // - Capturar a difuculdade
        // - Checar quantos dias passou do deadline
        // - 5 menos os dias passados do deadline e a dificuldade
        const currentData = new Date();

        const distance = formatDistance(challenge.deadline, currentData);

        let starsAvarage = 0;

        const DistanceNumber = parseInt(distance.split(" ")[0]);

        // Distancia de dias
        if (
          (DistanceNumber >= 1 && distance.split(" ")[1] === "day") ||
          (DistanceNumber >= 1 && distance.split(" ")[1] === "days")
        ) {
          DistanceNumber <= 5
            ? (starsAvarage = (challenge.difficulty + (5 - DistanceNumber)) / 2)
            : challenge.difficulty / 2;
        }

        // Distancia de meses
        if (
          distance.split(" ")[1] === "months" ||
          distance.split(" ")[1] === "month"
        ) {
          starsAvarage = 0;
        }

        const challengeUpdated = await challenge.update(request.body);

        return response.json({
          massage: "Challenge Updated",
          challengeUpdated,
          starsAvarage,
        });
      }

      const challengeUpdated = await challenge.update(request.body);

      return response.json({
        massage: "Challenge Updated",
        challengeUpdated,
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: "Unknow error" });
    }
  }

  async delete(request, response) {
    const { index } = request.params;

    const challenge = await Challenge.findByPk(index);

    if (challenge === null) {
      return response.status(404).json({ error: "Challenge not found" });
    }

    const challengeDeleted = await challenge.destroy({
      where: { id: index },
    });

    response.json({
      message: "Challenge Deleted",
      challengeDeleted,
    });
  }
}

export default new ChallengeController();
