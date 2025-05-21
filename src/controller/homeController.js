/**
 * Controlador responsável por lidar com as requisições da página inicial (home).
 * 
 * @module homeController
 */

module.exports = {
  /**
   * Método chamado para renderizar a página inicial.
   *
   * @function
   * @name home
   * @param {Object} req - Objeto de requisição do Express.
   * @param {Object} res - Objeto de resposta do Express.
   * @returns {void}
   *
   * Renderiza a view 'home.ejs' localizada em views/home.ejs.
   */
  home: (req, res) => {
    res.render('home'); // Isso renderiza views/home.ejs
  }
};