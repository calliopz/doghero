class PetDao {

    constructor(db) {
        this._db = db;
    }

    adiciona(pet) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO pets (
                    nome,
                    especie,
                    idade,
                    tamanho
                ) values (?, ?, ?)
            `,
            [
                    pet.nome,
                    pet.especie,
                    pet.idade,
                    pet.tamanho
            ],
                function(err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o pet!');
                    }

                    resolve();
                }
            )
        });
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM pets',
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível visualizar os seus pets !');

                    return resolve(resultados);
                }
            )
        });
    }
}

module.exports = PetDao;
