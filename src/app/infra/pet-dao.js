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
                ) values (?,?,?,?)
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
                    if (erro) return reject('Não foi possível listar os seus pets!');

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
                    FROM pets
                    WHERE id = ?
                `,
                [id],
                (erro, pet) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o seu pet!');
                    }
                    return resolve(pet);
                }
            );
        });
    }

    atualiza(pet) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE pet SET
                nome = ?,
                especie = ?,
                idade = ?,
                tamanho = ?
                WHERE id = ?
            `,
            [
                pet.nome,
                pet.especie,
                pet.idade,
                pet.tamanho,
                pet.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o cadastro do seu pet!');
                }

                resolve();
            });
        });
    }

    remove(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    DELETE 
                    FROM pets
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover o pet!');
                    }
                    return resolve();
                }
            );
        });
    }
}

module.exports = PetDao;