import { pool } from "../../db.js"

export const getAllEmployees = async(req, res)=>{
    try{
        const [rows] = await pool.query("SELECT * FROM employees");
        res.json(rows);
    }catch(err){
        res.status(500).json({message: "Something goes wrong"});
    }
};

export const getEmployeeById = async(req, res)=>{
    
    try{
        const [rows] = await pool.query("SELECT * FROM employees WHERE id = ?", [req.params.id]);
    
        if(rows.length === 0){
            return res.status(404).json({ message: `Employee does not exists` });
        }
    
        res.json(rows[0]);
    }catch(err){
        res.status(500).json({message: "Something wrong"});
    }
}

export const createNewEmployee = async(req, res)=>{
    try{
        const { name, salary } = req.body;
        const [rows] = await pool.query("INSERT INTO employees (name, salary) VALUES (?,?)", [name, salary]);
    
        res.json({
            id: rows.insertId,
            name,
            salary
        });
    }catch(err){
        res.status(500).json({message: "Something wrong"});
    }
}

export const updateEmployeeById = async(req, res) =>{
    try{
        const { name, salary } = req.body;
        const { id } = req.params;
    
        const [result] = await pool.query("UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?", [name, salary, id]);
        if(result.affectedRows === 0){
            res.status(404).json({message: "Employee not found"});
        }
        const [rows] = await pool.query("SELECT * FROM employees WHERE id = ?", [id]);
        res.json(rows[0]);
    }catch(err){
        res.status(500).json({message: "Something wrong"});
    }

}

export const deleteEmployeeByID = async(req, res)=>{
    try{
        const [rows] = await pool.query("DELETE FROM employees WHERE id = ?", [req.params.id]);
    
        if(rows.affectedRows === 0){
            return res.status(404).json({ message: `Employee does not exists` });
        }
    
        res.json({ message: `Employee deleted successfully` });
    }catch(err){
        res.status(500).json({message: "Something wrong"});
    }

}