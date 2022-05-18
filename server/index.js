import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql";

import StudentsRoutes from './backend js/api/routing.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/student',StudentsRoutes);

app.listen(port,()=>console.log(`http://localhost:${port}`));

app.get('/',(req,res) => res.send('hiii'));