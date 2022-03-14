//exportar conexao com o bando de dados
import { Sequelize } from "sequelize/types";
import { config } from "config";

const insancia = new Sequelize(
    config.get('mysql.banco-de-dados'),
    config.get('mysql.usuario'),
    config.get('mysql.senha'),
    {
        host: config.get('mysql.host'),
        dialect: 'mysql'
    }
);


export { instancia }