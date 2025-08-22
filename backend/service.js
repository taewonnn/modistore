import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// 라우터 import
import categoriesRouter from './routes/categories.js';
import productsRouter from './routes/products.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// 미들웨어
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'ModiStore API is running!' });
});

// API 라우터 연결
app.use('/api/categories', categoriesRouter);
app.use('/api/products', productsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📊 Supabase URL: ${process.env.SUPABASE_URL || 'Not configured'}`);
});
