const pool = require('../db');

module.exports = {
  async getAllPets(req, res) {
    try {
      const result = await pool.query('SELECT * FROM pets');
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar pets' });
    }
  },

  async getPetById(req, res) {
    const { id } = req.params;
    try {
      const result = await pool.query('SELECT * FROM pets WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Pet não encontrado' });
      }
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar o pet por ID' });
    }
  },

  async createPet(req, res) {
    const { nome, tipo, idade, foto, caracteristicas_fisicas, ultimo_local_visto, contato_nome, contato_telefone, recompensa, status } = req.body;
  
    try {
      const result = await pool.query(
        `INSERT INTO pets (nome, tipo, idade, foto, caracteristicas_fisicas, ultimo_local_visto, contato_nome, contato_telefone, recompensa, status)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
        [nome, tipo, idade, foto, caracteristicas_fisicas, ultimo_local_visto, contato_nome, contato_telefone, recompensa, status || 'perdido']
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Erro ao criar pet:', error);
      res.status(500).json({ error: 'Erro ao criar o pet', details: error.message });
    }
  },

  async updatePet(req, res) {
    const { id } = req.params;
    const dados = req.body;

    if (Object.keys(dados).length === 0) {
      return res.status(400).json({ error: 'Nenhum dado enviado para atualização.' });
    }

    const campos = Object.keys(dados);
    const valores = Object.values(dados);
  
    const setClause = campos.map((campo, index) => `${campo} = $${index + 1}`).join(', ');
  
    try {
      const query = `UPDATE pets SET ${setClause} WHERE id = $${campos.length + 1} RETURNING *`;
      const result = await pool.query(query, [...valores, id]);
  
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Pet não encontrado' });
      }
  
      res.json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar o pet' });
    }
  },

  async deletePet(req, res) {
    const { id } = req.params;
    try {
      const result = await pool.query('DELETE FROM pets WHERE id = $1 RETURNING *', [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Pet não encontrado' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar o pet' });
    }
  }
};