import express from 'express';
import User from '../models/User.js';
import verifyToken from '../config/auth.js';

const user = express.Router();

user.get('/', (req, res) => {
    const token = req.headers['token'];
    const authData = verifyToken(token, res);
});

user.post("/registerUser", async (req, res) => {
    const { name, birthdate, cpf, email, password, isPrime } = req.body;

    const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );
    if (alreadyExistsUser) return res.status(409).json({ message: "E-mail já utilizado por outro usuário!" });
    const newUser = new User({ name, birthdate, cpf, email, password, isPrime });
    const savedUser = await newUser.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Não foi possível cadastrar o usuário" });
    });
    if (savedUser) res.json({ message: "Obrigado pelo cadastro!" });
});

export default user;