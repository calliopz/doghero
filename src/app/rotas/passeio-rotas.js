const PasseioControlador = require('../controladores/passeio-controlador');
const passeioControlador = new PasseioControlador();

module.exports = (app) => {
    const rotasPasseio = PasseioControlador.rotas(); 

    app.get(rotasPasseio.lista, passeioControlador.lista());
    
    app.get(rotasPasseio.visualizacao, passeioControlador.formularioVisualizacao());

    app.delete(rotasPasseio.delecao, passeioControlador.remove());

}; 