const Livro = require('../model/livro');
const bcrypt = require('bcryptjs');
const session = require('express-session');

module.exports = {
    authentication: async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        console.log(`email: ${email} | password: ${password}`);

        try {
            const user = await Livro.getUser(email, password);

            console.log(user);

            if(user){
                res.redirect('/main')
            }else {
                res.send("Email or Password incorrect!")
            }
        }catch(error){
            console.log("Error: ", error)
            res.status(500).send("Error")
        }
    },

};