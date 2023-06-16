import express from "express";
import { getAllEmployees, getEmployeeById } from "../../controllers/employees/employees.controller.js";

const router = express.Router();

export const getEmployees = router.get("/employees", getAllEmployees);
export const getEmployee = router.get("/employees/:id", getEmployeeById);
export const createEmployee = router.post("/employees", getAllEmployees);
export const updateEmployee = router.put("/employees", getAllEmployees);
export const deleteEmployee = router.get("/employees", getAllEmployees);
