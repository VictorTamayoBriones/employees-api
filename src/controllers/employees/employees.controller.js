import { pool } from "../../db.js"

export const getAllEmployees = async(req, res)=>{
    const [rows] = await pool.query("SELECT * FROM employees");
    res.json(rows);
};

export const getEmployeeById = async(req, res)=>{
    const [rows] = await pool.query("SELECT * FROM employees WHERE id = ?", [req.params.id]);
    res.json(rows[0]);
}