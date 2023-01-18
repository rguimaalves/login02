const ProdutoController = {
    criarProduto:(req, res)=>{
        res.send('criando um produto');
    },
    deletarProduto: (req, res)=>{
        const {id} = req.params;

        res.send('deletando o produto com id: ' + id);
    }       
}

module.exports = ProdutoController