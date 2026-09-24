import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import produtoRoutes from './routes/produtos.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Status
app.get('/status', (req, res) => {
  return res.json({ status: 'Api rodando' });
});

app.use('/produtos', produtoRoutes);

const PORT = process.env.PORT || 5432;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

