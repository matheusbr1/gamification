import Sequelize from 'sequelize'
import databaseConfig from '../../config/database'
import User from '../models/User'
import Challenge from '../models/Challenge'

const models = [User, Challenge]

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(databaseConfig)

        models.map(model => model.init(this.connection))

        Challenge.associate(this.connection.models)
        User.associate(this.connection.models)
    }
}

export default new Database()