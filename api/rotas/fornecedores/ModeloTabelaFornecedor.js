import { Sequelize } from "sequelize/types";
// const Sequelize = require('sequelize');
import { instancia } from "../../banco-de-dados";

const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.ENUM('racao', 'brinquedos'),
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

const ModeloTabelaFornecedor = instancia.define('fornecedor', colunas, opcoes);

export { ModeloTabelaFornecedor };