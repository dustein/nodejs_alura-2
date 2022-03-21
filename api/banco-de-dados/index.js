//exportar conexao com o bando de dados
import { Sequelize } from "sequelize/types";
import { config } from "config";

const instancia = new Sequelize(
    config.get('mysql.banco-de-dados'),
    config.get('mysql.usuario'),
    config.get('mysql.senha'),
    {
        host: config.get('mysql.host'),
        dialect: 'mysql'
    }
);


export { instancia };