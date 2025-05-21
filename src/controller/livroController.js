const Livro = require('../model/livro'); // Importa o modelo Livro

module.exports = {
    // Renderiza o formulário para criar um novo livro
    formCreateLivro: (_, res) => {
        res.render('./livro/formCreateLivro');
    },

    // Cria um novo livro com os dados recebidos do formulário
    createLivro: async (req, res) => {
        var titulo = req.body.titulo;
        var autor = req.body.autor;
        var categoria = req.body.categoria;
        var ano = req.body.ano;
        var editora = req.body.editora;

        // Exibe no console os dados recebidos
        console.log(`Título: ${titulo}, Autor: ${autor}, Categoria: ${categoria}, Ano: ${ano}, Editora: ${editora}`);

        // Chama o método do modelo para criar o livro
        await Livro.createLivro(titulo, autor, categoria, ano, editora);

        // Redireciona para a página principal após criar
        return res.redirect('/main');
    },

    // Renderiza o formulário para atualizar um livro existente
    formUpdateLivro: async (req, res) => {
        var id = req.params.id;
        // Busca o livro pelo ID
        var livro = await Livro.getLivro(id);
        // Renderiza o formulário de atualização com os dados do livro
        res.render('./livro/formUpdateLivro', { livro });
    },

    // Atualiza os dados de um livro existente
    updateLivro: async (req, res) => {
        var id = req.params.id;
        var titulo = req.body.titulo;
        var autor = req.body.autor;
        var categoria = req.body.categoria;
        var ano = req.body.ano;
        var editora = req.body.editora;

        // Exibe no console os dados atualizados
        console.log(`Atualizando Livro - ID: ${id}, Título: ${titulo}, Autor: ${autor}, Categoria: ${categoria}, Ano: ${ano}, Editora: ${editora}`);

        // Chama o método do modelo para atualizar o livro
        await Livro.updateLivro(id, titulo, autor, categoria, ano, editora);

        // Redireciona para a página principal após atualizar
        return res.redirect('/main');
    },

    // Deleta um livro pelo ID
    deleteLivro: async (req, res) => {
        var id = req.params.id;
        // Chama o método do modelo para deletar o livro
        await Livro.deleteLivro(id);
        // Exibe no console que o livro foi deletado
        console.log(`Livro com ID: ${id} deletado.`);
        // Redireciona para a página principal após deletar
        return res.redirect('/main');
    }
}