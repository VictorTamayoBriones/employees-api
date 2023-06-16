import { createPool } from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'fj1Ru4dit4%.%_34',
    database: 'companydb',
    port: 33060,
});