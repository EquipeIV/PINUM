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
        type: Sequelize.STRING(80),
        allowNull: false
    },

    birthdate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },

    cpf: {
        type: Sequelize.STRING(15),
        allowNull: false
    },

    email: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    
    password: {
        type: Sequelize.STRING(30),
        allowNull: false
    },

    isPrime: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}
);

export default User;
