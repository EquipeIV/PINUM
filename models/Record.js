import { Sequelize } from 'sequelize';
import conn from '../config/db.js';
import User from './User.js';

const Record = conn.define('record', {
    idRecord: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },

    phone1: {
        type: Sequelize.STRING(15),
        allowNull: false
    },

    phone2: {
        type: Sequelize.STRING(15),
        allowNull: true
    },

    pin: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    
    city: {
        type: Sequelize.STRING(50),
        allowNull: true
    },

    district: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    
    idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'idUser'
        }
    }
    
}
);

export default Record;
