const PetControlador = require('../controladores/pet-controlador');
const petControlador = new PetControlador();

const Pet = require('../modelos/pet');

const BaseControlador = require('../controladores/base-controlador');

module.exports = (app) => {
    const rotasPet = PetControlador.rotas();
    
    app.use(rotasPet.autenticadas, function(req, resp, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            resp.redirect(BaseControlador.rotas().login);
        }
    });

    app.get(rotasPet.lista, petControlador.lista());

    app.route(rotasPet.cadastro)
        .get(petControlador.formularioCadastro())
        .post(Pet.validacoes(), petControlador.cadastra())
        .put(petControlador.edita());

    app.get(rotasPet.edicao, petControlador.formularioEdicao());

    app.delete(rotasPet.delecao, petControlador.remove());
};