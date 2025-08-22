import express from 'express';
import { supabase } from '../config/supabase.js';

const router = express.Router();

// 모든 카테고리 조회
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase.from('categories').select('*');
    if (error) throw error;
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
