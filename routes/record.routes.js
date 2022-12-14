import express from "express";
import Record from "../models/Record.js";
import verifyToken from '../config/auth.js';

const record = express.Router();

record.get("/", (req, res) => {
    const token = req.headers['token'];
    const authData = verifyToken(token, res);
});

record.post("/newRecord", async (req, res) => {
    const {date, phone1, phone2, pin, city, district, idUser } = req.body;

    const newRecord = new Record({ date, phone1, phone2, pin, city, district, idUser });
    const savedRecord = await newRecord.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Não foi possível registrar imóvel"})
    });

    if(savedRecord) res.json({ message: "Imóvel cadastrado!"})
});

export default record;