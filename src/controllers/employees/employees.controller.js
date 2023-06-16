import { pool } from "../../db.js"

export const getAllEmployees = async(req, res)=>{
    const [rows] = await pool.query("SELECT * FROM employees");
    res.json(rows);
};