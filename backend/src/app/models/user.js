import Sequelize, { Model } from "sequelize";

class User extends Model {
    static init(sequelize) {
        super.init({
            password_hash: Sequelize.STRING,
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            coordinator: Sequelize.BOOLEAN,
            avatar: Sequelize.STRING,
        }, {
            sequelize
        })
    }
}

export default User