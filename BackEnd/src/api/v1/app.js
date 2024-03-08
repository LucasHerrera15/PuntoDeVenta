import express from 'express';
import 'dotenv/config'

import { Routes } from './routes.js';

const app = express();

app.use('/api/v1', Routes())

app.listen(process.env.PORT, console.log(`Server running on: http://localhost:${process.env.PORT}`));