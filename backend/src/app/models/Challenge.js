import Sequelize, { Model } from 'sequelize'

class Challenge extends Model {
    static init(sequelize) {
        super.init({
            title: Sequelize.STRING,
            description: Sequelize.STRING,
            password_hash: Sequelize.STRING
        }, {
            sequelize
        })
    }
}

export default Challenge