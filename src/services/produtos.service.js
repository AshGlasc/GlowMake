import pool from '../config/db.js';
class ProdutoService {
  // Cadastra produtos
  async create({ nome, marca, categoria, preco, quantidade_estoque }) {
    const query = `
      INSERT INTO produtos (nome, marca, categoria, preco, quantidade_estoque)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [nome, marca, categoria, preco, quantidade_estoque];
    const { rows } = await pool.query(query, values);
    return rows;
  }

  // Vai listar os produtos
  async getAll() {
    const { rows } = await pool.query('SELECT * FROM produtos;');
    return rows;
  }
}

export default new ProdutoService();