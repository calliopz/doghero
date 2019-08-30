class PasseadorDao {

    constructor(db) {
        this._db = db;
    }

    buscaPorEmail(email) {
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM passeadores
                    WHERE email = ?
                `,
                [email],
                (erro, passeador) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o passeador!');
                    }

                    return resolve(passeador);
                }
            )
        });
    }

    lista() {
       return new Promise((resolve, reject) => {
            this._db.all(
               'SELECT * FROM passeadores',
               (erro, resultados) => {
                    if (erro) return reject('Não foi possível exibir a lista de passeadores!');

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
                    FROM passeadores
                    WHERE id = ?
                `,
                [id],
                (erro, passeador) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o passeador!');
                    }
                    return resolve(passeador);
                }
            );
        });
    }
}

module.exports = PasseadorDao;