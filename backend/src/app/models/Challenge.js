import Sequelize, { Model } from "sequelize";

class Challenge extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        deadline: Sequelize.DATE,
        requester: Sequelize.STRING,
        assignee: Sequelize.STRING,
        status: Sequelize.STRING,
        difficulty: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );
  }

  // Relacionamento do Model
  static associate(models) {
    // Pertence a um único User
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}

export default Challenge;
