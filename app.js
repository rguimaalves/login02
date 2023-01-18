const express = require('express');
const rotasProdutos = require('./rotas/rotasProduto');
let app = express();


app.get('/', (req, res)=>res.send('ola mundo!'));
app.get('/contatos', (req, res)=>res.send('Pagina contatos!'));

app.use('/produtos',rotasProdutos);

app.listen(3000, ()=>console.log('Servidor rodando na porta 3000'))



