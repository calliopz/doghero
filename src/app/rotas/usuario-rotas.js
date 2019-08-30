const UsuarioControlador = require('../controladores/usuario-controlador');
const usuarioControlador = new UsuarioControlador();

const Usuario = require('../modelos/usuario');

const BaseControlador = require('../controladores/base-controlador');

module.exports = (app) => {
    const rotasUsuario = UsuarioControlador.rotas();
    
    // app.use(rotasUsuario.autenticadas, function(req, resp, next) {
    //     if (req.isAuthenticated()) {
    //         next();
    //     } else {
    //         resp.redirect(BaseControlador.rotas().login);
    //     }
    // });

    // app.get(rotasUsuario.lista, usuarioControlador.lista());

    app.get(rotasUsuario.lista, usuarioControlador.lista());
    
    app.put(usuarioControlador.edita());

    app.get(rotasUsuario.edicao, usuarioControlador.formularioEdicao());

};