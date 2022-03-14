import express from 'express';
import { router } from './rotas/fornecedores/index.js';

const app = express();

app.use(express.json());
app.use(router);


router.use('/api/fornecedores', router);

// app.use(express.urlencoded({extended: true}));

//--------------------------



app.listen(3000, () => console.log("SERVIDOR O N L I N E !"))