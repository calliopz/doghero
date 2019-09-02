class PasseioDao {

    constructor(db) {
        this._db = db;
    }

    lista() {
       return new Promise((resolve, reject) => {
            this._db.all(
               'SELECT * FROM passeios',
               (erro, resultados) => {
                    if (erro) return reject('Não foi possível exibir a lista de passeios!');

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
                    FROM passeios
                    WHERE id = ?
                `,
                [id],
                (erro, passeio) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o passeio especificado!');
                    }
                    return resolve(passeio);
                }
            );
        });
    }

    remove(id) {

        return new Promise((resolve, reject) => {
            this._db.get(`
                DELETE 
                FROM passeios
                WHERE id = ?
            `,
            [id],
            (erro) => {
                if (erro) {
                    return reject('Não foi possível remover o passeio!');
                }
                return resolve();
            });
        });
    }
}

module.exports = PasseioDao;