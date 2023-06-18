import express from "express";
import { getAllEmployees, getEmployeeById, createNewEmployee, deleteEmployeeByID, updateEmployeeById } from "../../controllers/employees/employees.controller.js";

const router = express.Router();

export const getEmployees = router.get("/employees", getAllEmployees);
export const getEmployee = router.get("/employees/:id", getEmployeeById);
export const createEmployee = router.post("/employees", createNewEmployee);
export const updateEmployee = router.patch("/employees/:id", updateEmployeeById);
export const deleteEmployee = router.delete("/employees/:id", deleteEmployeeByID);

export default router;
 