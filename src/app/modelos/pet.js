const { check } = require('express-validator/check');

class Pet {
    static validacoes() {
        return [
            check('nome').isLength({ min: 2 }).withMessage('O nome do pet precisa ter no mínimo dois caracteres!')
        ];
    }
}

module.exports = Pet;