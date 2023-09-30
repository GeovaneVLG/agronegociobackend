const connection = require('./connection');

const getAll = async () => {
    const [negociacao] = await connection.execute('SELECT * FROM negociacao');
    return negociacao;
};

const getById = async (id) => {
    const [negociacao] = await connection.execute('SELECT * FROM negociacao WHERE id = ?', [id]);
    return negociacao;
};

const createNegociacao = async (dados) => {

    const { cliente_produtor, tipo_operacao, valor_por_saca, quantidade_sacas, data_vencimento, valor_total, unidade } = dados;
    const query = 'INSERT INTO negociacao (cliente_produtor, tipo_operacao, valor_por_saca, quantidade_sacas, data_vencimento, valor_total, unidade) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const [createdNegociacao] = await connection.execute(query, [cliente_produtor, tipo_operacao, valor_por_saca, quantidade_sacas, data_vencimento, valor_total, unidade]);
    return { insertId: createdNegociacao.insertId };
};

const deleteNegociacao = async (id) => {
    const [removedNegociacao] = await connection.execute('DELETE FROM negociacao WHERE id = ?', [id]);
    return removedNegociacao;
};

const updateNegociacao = async (id, dados) => {
    const { cliente_produtor, tipo_operacao, valor_por_saca, quantidade_sacas, data_vencimento, valor_total, unidade } = dados;
    const query = 'UPDATE negociacao SET cliente_produtor = ?, tipo_operacao = ?, valor_por_saca = ?, quantidade_sacas = ?, data_vencimento = ?, valor_total = ?, unidade = ? WHERE id = ?';
    const [updatedNegociacao] = await connection.execute(query, [cliente_produtor, tipo_operacao, valor_por_saca, quantidade_sacas, data_vencimento, valor_total, unidade, id]);
    return updatedNegociacao;
};

module.exports = {
    getAll,
    getById,
    createNegociacao,
    deleteNegociacao,
    updateNegociacao
};