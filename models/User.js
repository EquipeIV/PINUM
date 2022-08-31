import { Sequelize } from 'sequelize';
import conn from '../config/db.js';
import bcrypt from 'bcrypt';

const User = conn.define('user',
    {
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
            type: Sequelize.STRING(120),
            allowNull: false
        },

        isPrime: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    },

    {
        hooks: {
            beforeCreate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            },
            beforeUpdate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            }
        }
    }

);



export default User;
