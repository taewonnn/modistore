import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { supabase } from './config/supabase.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'ModiStore API is running!' });
});

// Test Supabase connection
app.get('/api/test', async (req, res) => {
  if (!supabase) {
    return res.status(500).json({ error: 'Supabase not configured. Please set environment variables.' });
  }
  
  try {
    const { data, error } = await supabase.from('products').select('*').limit(1);
    if (error) throw error;
    res.json({ message: 'Supabase connected!', data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📊 Supabase URL: ${process.env.SUPABASE_URL || 'Not configured'}`);
});
