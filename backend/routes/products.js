import express from 'express';
import { supabase } from '../config/supabase.js';

const router = express.Router();

// 모든 상품 조회
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    let query = supabase.from('products').select('*');

    if (category) {
      query = query.eq('category_id', category);
    }

    const { data, error } = await query;
    if (error) throw error;
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
