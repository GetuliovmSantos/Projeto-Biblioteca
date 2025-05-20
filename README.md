# Biblioteca Municipal

Sistema web para gerenciamento de livros de uma biblioteca municipal. Permite cadastro, edição, exclusão e listagem de livros, além de autenticação de usuários.

## Tecnologias Utilizadas

- Node.js
- Express
- EJS (Engine de templates)
- MySQL
- Tailwind CSS

## Estrutura do Projeto

```
src/
  index.js                  # Ponto de entrada da aplicação
  controller/               # Controllers das rotas
    homeController.js
    livroController.js
    loginController.js
  database/
    connection.js           # Conexão com o banco de dados MySQL
  model/
    livro.js                # Model com métodos de acesso ao banco
  router/
    routes.js               # Definição das rotas
  views/                    # Templates EJS
    home.ejs
    livro/
      formCreateLivro.ejs
      formUpdateLivro.ejs
      main.ejs
```

## Como Executar

1. Instale as dependências:
   ```sh
   npm install
   ```

2. Configure o banco de dados MySQL:
   - Crie um banco chamado `biblioteca` na porta 3307.
   - Crie as tabelas `usuarios` e `livros` conforme necessário.

3. Inicie a aplicação:
   ```sh
   node src/index.js
   ```
   Ou, para desenvolvimento:
   ```sh
   npx nodemon src/index.js
   ```

4. Acesse no navegador:
   ```
   http://localhost:8080
   ```

## Funcionalidades

- **Login de usuário**
- **Listagem de livros**
- **Cadastro de novo livro**
- **Edição de livro**
- **Exclusão de livro**
- **Logout**

## Observações

- As senhas dos usuários não estão sendo criptografadas no banco.
- O sistema utiliza sessões para controle de autenticação.
- O front-end utiliza Tailwind CSS via CDN.

---

Desenvolvido para fins didáticos.