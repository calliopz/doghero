class UsuarioDao {

    constructor(db) {
        this._db = db;
    }

    buscaPorEmail(email) {
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM usuarios
                    WHERE email = ?
                `,
                [email],
                (erro, usuario) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o usuário!');
                    }

                    return resolve(usuario);
                }
            )
        });
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
               'SELECT * FROM usuarios',
               (erro, resultados) => {
                   if (erro) return reject('Não foi possível encontrar o seu cadastro!');

                   return resolve(resultados);
                }
            )
        });
    }

    buscaPorId(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM usuarios
                    WHERE id = ?
                `,
                [id],
                (erro, usuario) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o seu cadastro!');
                    }
                    return resolve(usuario);
                }
            );
        });
    }


    atualiza(usuario) {
        return new Promise((resolve, reject) => {
            this._db.run(
                `
                    UPDATE usuarios SET
                    nome_completo = ?,
                    email = ?,
                    senha = ?
                    WHERE id = ?
                `,
                [
                    usuario.nome_completo,
                    usuario.email,
                    usuario.senha,
                    usuario.id
                ],
                erro => {
                    if (erro) {
                        return reject('Não foi possível atualizar o seu cadastro!');
                    }
                    resolve();
                }
            );
        });
    }
}

module.exports = UsuarioDao;