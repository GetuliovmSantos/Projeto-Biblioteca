const Livro = require('../model/livro');

module.exports = {
    formCreateLivro: (req, res) => {
        res.render('./livro/formCreateLivro');
    },
    createLivro: async (req, res) => {
        var titulo = req.body.titulo;
        var autor = req.body.autor;
        var categoria = req.body.categoria;
        var ano = req.body.ano;
        var editora = req.body.editora;
        
        console.log(`Título: ${titulo}, Autor: ${autor}, Categoria: ${categoria}, Ano: ${ano}, Editora: ${editora}`);

        await Livro.createLivro(titulo, autor, categoria, ano, editora);
        
        return res.redirect('/main');
    },
}