import express from 'express'
import dotenv from 'dotenv'
import connectDB from './congif/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const app = express()

dotenv.config()
connectDB()

app.get('/', (req, res) => {
  res.send('API is Running')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} on Port ${PORT}`.yellow.bold,
  ),
)
