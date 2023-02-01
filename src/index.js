import * as env from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

env.config()

import currenciesRoutes from './routes/currencies.routes.js'
import ratesRoutes from './routes/rates.routes.js'

import './app.js'
const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use("/currencies", currenciesRoutes);
app.use("/rates", ratesRoutes);

app.listen(3000)
console.log('Server running on port 3000')