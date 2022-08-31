import conn from "./config/db.js";
import User from "./models/User.js"
import Record from "./models/Record.js";

const migrate = async () => {
    try{
        const result = await conn.sync();
        console.log(result)
    } catch (error){    
        console.log(error)
    }
}

migrate();