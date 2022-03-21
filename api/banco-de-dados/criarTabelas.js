import { ModeloTabela } from "../rotas/fornecedores/ModeloTabelaFornecedor.js";

ModeloTabela
    .sync()
    .then(() => console.log('TABELA CRIADA COM SUCESSO'));


export { ModeloTabela };