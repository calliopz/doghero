const petRotas = require('./pet-rotas');
const baseRotas = require('./base-rotas');

module.exports = (app) => {
    baseRotas(app);
    petRotas(app);
};
