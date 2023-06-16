import { pool } from "../../db.js"

export const getAllEmployees = async(req, res)=>{

    const [rows] = await pool.query("SELECT * FROM employees");
    res.json(rows);
};

export const getEmployeeById = async(req, res)=>{
    
    const [rows] = await pool.query("SELECT * FROM employees WHERE id = ?", [req.params.id]);

    if(rows.length === 0){
        return res.status(404).json({ message: `Employee does not exists` });
    }

    res.json(rows[0]);
}

export const createNewEmployee = async(req, res)=>{

    const { name, salary } = req.body;
    const [rows] = await pool.query("INSERT INTO employees (name, salary) VALUES (?,?)", [name, salary]);

    res.json({
        id: rows.insertId,
        name,
        salary
    });
}