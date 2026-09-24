import { Router } from 'express';
import produtoService from '../services/produtos.service.js';
const router = Router();

// POST cadastra novo produto Status 201 CERTO 
router.post('/', async (req, res) => {
  try {
    const produto = await produtoService.create(req.body);
    return res.status(201).json(produto);
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao cadastrar produto.' });
  }
});

// GET Listar produtos Status 200 CERTO
router.get('/', async (req, res) => {
  try {
    const produtos = await produtoService.getAll();
    return res.status(200).json(produtos);
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao buscar produtos.' });
  }
});

export default router;