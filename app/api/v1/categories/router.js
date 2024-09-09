import express from 'express';
const router = express.Router();
import { findAll, validate, createCategories } from './controller.js';

router.get('/categories', findAll);
router.post('/categories', validate, createCategories);
export default router;