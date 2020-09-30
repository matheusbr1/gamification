import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        password_hash: Sequelize.STRING,
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        coordinator: Sequelize.BOOLEAN,
        avatar: Sequelize.STRING,
        stars: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );
  }

  // Relacionamento do Model
  static associate(models) {
    // Tem muitas challenges
    this.hasMany(models.Challenge, { foreignKey: "user_id", as: "challenges" });
  }
}

export default User;
