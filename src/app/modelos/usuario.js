const { check } = require('express-validator/check');

class Usuario {
    static validacoes() {
        return [
            check('nome_completo').isLength({ min: 10 }).withMessage('O nome completo precisa ter no mínimo dez caracteres!')
        ];   
    }
}

module.exports = Usuario;