import { ModeloTabela } from "../rotas/fornecedores/ModeloTabelaFornecedor";

ModeloTabela
    .sync()
    .then(() => console.log('TABELA CRIADA COM SUCESSO'));

export { ModeloTabela };