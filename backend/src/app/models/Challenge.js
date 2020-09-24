import Sequelize, { Model } from 'sequelize'

class Challenge extends Model {
    static init(sequelize) {
        super.init({
            title: Sequelize.STRING,
            description: Sequelize.STRING,
            deadline: Sequelize.DATE,
            requester: Sequelize.STRING,
            assignee: Sequelize.STRING,
            status: Sequelize.STRING
        }, {
            sequelize
        })
    }
}

export default Challenge