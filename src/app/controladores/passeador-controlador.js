const PasseadorDao = require('../infra/passeador-dao');
const db = require('../../config/database');

const templates = require('../views/templates');

class PasseadorControlador {

    static rotas() {
        return {
            visualizacao: '/passeadores/form/:id',
            lista: '/passeadores/lista'
        };
    }

    lista() {
        return function(req, resp) {

            const passeadorDao = new PasseadorDao(db);
            passeadorDao.lista()
                     .then(passeadores => resp.marko(
                        templates.passeadores.lista,
                        {
                            passeadores: passeadores
                        }
                    ))
                    .catch(erro => console.log(erro));
        };
    }


    formularioVisualizacao() {
        return function(req, resp) {
            const id = req.params.id;
            const passeadorDao = new PasseadorDao(db);
    
            passeadorDao.buscaPorId(id)
                    .then(passeador => 
                        resp.marko(
                            templates.passeadores.form, 
                            { passeador: passeador }
                        )
                    )
                    .catch(erro => console.log(erro));
        };
    }

}

module.exports = PasseadorControlador;