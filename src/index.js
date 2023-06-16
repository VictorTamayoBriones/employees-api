import express  from 'express';
import { getEmployees } from './routes/employees/employees.routes.js';

const app = express();

app.listen(3000);

app.use(express.json());

app.use('/api',getEmployees);