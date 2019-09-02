const PasseioDao = require('../infra/passeio-dao');
const db = require('../../config/database');

const templates = require('../views/templates');

class PasseioControlador {

    static rotas() {
        return {
            lista: '/passeios/lista',
            visualizacao: '/passeios/form/:id',
            delecao: '/passeios/:id'            
        };
    }

    lista() {
        return function(req, resp) {

            const passeioDao = new PasseioDao(db);
            passeioDao.lista()
                     .then(passeios => resp.marko(
                        templates.passeios.lista,
                        {
                            passeios: passeios
                        }
                    ))
                    .catch(erro => console.log(erro));
        };
    }


    formularioVisualizacao() {
        return function(req, resp) {
            const id = req.params.id;
            const passeioDao = new PasseioDao(db);
    
            passeioDao.buscaPorId(id)
                    .then(passeio => 
                        resp.marko(
                            templates.passeios.form, 
                            { passeio: passeio }
                        )
                    )
                    .catch(erro => console.log(erro));
        };
    }

    remove() {
        return function(req, resp) {
            const id = req.params.id;
    
            const passeioDao = new PasseioDao(db);
            passeioDao.remove(id)
                    .then(() => resp.status(200).end())
                    .catch(erro => console.log(erro));
        };
    }

}

module.exports = PasseioControlador;