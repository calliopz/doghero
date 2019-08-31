const { validationResult } = require('express-validator/check');

const PetDao = require('../infra/pet-dao');
const UsuarioDao = require('../infra/usuario-dao');
const db = require('../../config/database');

const templates = require('../views/templates');

class PetControlador {

    static rotas() {
        return {
            autenticadas: '/pets*',
            lista: '/pets',
            cadastro: '/pets/form',
            edicao: '/pets/form/:id',
            delecao: '/pets/:id'
        };
    }

    lista() {
        return function(req, resp) {
            
            const petDao = new PetDao(db);
            petDao.lista()
                    .then(pets => resp.marko(
                        templates.pets.lista,
                        {
                            pets: pets

                        }
                    ))
                    .catch(erro => console.log(erro));

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
    

    formularioCadastro() {
        return function(req, resp) {
            resp.marko(templates.pets.form, { pet: {} });
        };
    }

    formularioEdicao() {
        return function(req, resp) {
            const id = req.params.id;
            const petDao = new PetDao(db);
    
            petDao.buscaPorId(id)
                    .then(pet => 
                        resp.marko(
                            templates.pets.form, 
                            { pet: pet }
                        )
                    )
                    .catch(erro => console.log(erro));
        };
    }

    cadastra() {
        return function(req, resp) {
            console.log(req.body);
            const petDao = new PetDao(db);
            
            const erros = validationResult(req);
    
            if (!erros.isEmpty()) {
                return resp.marko(
                    templates.pets.form,
                    { 
                        pet: {}, 
                        errosValidacao: erros.array()
                    }
                );
            }
    
            petDao.adiciona(req.body)
                    .then(resp.redirect(PetControlador.rotas().lista))
                    .catch(erro => console.log(erro));
        };
    }

    edita() {
        return function(req, resp) {
            console.log(req.body);
            const petDao = new PetDao(db);
            
            petDao.atualiza(req.body)
                    .then(resp.redirect(PetControlador.rotas().lista))
                    .catch(erro => console.log(erro));
        };
    }

    remove() {
        return function(req, resp) {
            const id = req.params.id;
    
            const petDao = new PetDao(db);
            petDao.remove(id)
                    .then(() => resp.status(200).end())
                    .catch(erro => console.log(erro));
        };
    }
}

module.exports = PetControlador;