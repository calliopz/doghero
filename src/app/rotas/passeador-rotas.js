const PasseadorControlador = require('../controladores/passeador-controlador');
const passeadorControlador = new PasseadorControlador();

const BaseControlador = require('../controladores/base-controlador');

module.exports = (app) => {
    const rotasPasseador = PasseadorControlador.rotas(); 

    app.get(rotasPasseador.lista, passeadorControlador.lista());

    app.get(rotasPasseador.visualizacao, passeadorControlador.formularioVisualizacao());

};
