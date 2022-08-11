import { Sequelize } from 'sequelize';
import conn from '../config/db.js';

const Registration = conn.define('registration', {
    idRegistration: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    date: {
        type: Sequelize.DATE,
        allowNull: false
    },

    phone1: {
        type: Sequelize.String,
        allowNull: false
    },

    phone2: {
        type: Sequelize.STRING,
        allowNull: true
    },

    pin: {
        type: Sequelize.STRING,
        allowNull: true
    },
    
    city: {
        type: Sequelize.STRING,
        allowNull: true
    },

    district: {
        type: Sequelize.STRING,
        allowNull: true
    },
    /*
    idUser: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        foreignKey: true
    }
    */
}
);

export default Registration;
