import express from 'express';
import employees from './routes/employees/employees.routes.js';

const app = express();

app.use(express.json());

app.use('/api',employees);

app.use((req, res)=>res.status(404).json({message:"Route not found"}));

export default app;