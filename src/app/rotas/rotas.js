const petRotas = require('./pet-rotas');
const baseRotas = require('./base-rotas');
const usuarioRotas = require('./usuario-rotas');
const passeadorRotas = require('./passeador-rotas');

module.exports = (app) => {
    baseRotas(app);
    petRotas(app);
    usuarioRotas(app);
    passeadorRotas(app);
};
