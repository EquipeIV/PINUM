import { Sequelize } from 'sequelize';
import conn from '../config/db.js';

const User = conn.define('user', {
    idUser: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    birthdate: {
        type: Sequelize.DATE,
        allowNull: false
    },

    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    isPrime: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}
);

export default User;
