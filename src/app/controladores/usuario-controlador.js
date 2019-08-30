const { validationResult } = require('express-validator/check');

const UsuarioDao = require('../infra/usuario-dao');
const db = require('../../config/database');

const templates = require('../views/templates');

class UsuarioControlador {

    static rotas() {
        return {
            edicao: '/usuarios/form/:id',
            lista: '/usuarios/lista'
        };
    }

    lista() {
        return function(req, resp) {

            const usuarioDao = new UsuarioDao(db);
            usuarioDao.lista()
                    .then(usuarios => resp.marko(
                        templates.usuarios.lista,
                        {
                            usuarios: usuarios
                        }
                    ))
                    .catch(erro => console.log(erro));
        };
    }

    formularioEdicao() {
        return function(req, resp) {
            const id = req.params.id;
            const usuarioDao = new UsuarioDao(db);
    
            usuarioDao.buscaPorId(id)
                    .then(usuario => 
                        resp.marko(
                            templates.usuarios.form, 
                            { usuario: usuario }
                        )
                    )
                    .catch(erro => console.log(erro));
        };
    }

    edita() {
        return function(req, resp) {
            console.log(req.body);
            const usuarioDao = new UsuarioDao(db);
            
            usuarioDao.atualiza(req.body)
                    .then(resp.redirect(UsuarioControlador.rotas().lista))
                    .catch(erro => console.log(erro));
        };
    }
}

module.exports = UsuarioControlador;