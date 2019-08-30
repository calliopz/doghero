const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nome_completo VARCHAR(40) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
)
`;

const INSERIR_USUARIO_1 = 
`
INSERT INTO usuarios (
    nome_completo,
    email,
    senha
) SELECT 'Juliana Moraes', 'ju.moraes@gmail.com.br', '123' WHERE NOT EXISTS (SELECT * FROM usuarios WHERE email = 'ju.moraes@gmail.com.br')
`;

const PETS_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS pets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL, 
    especie TEXT NOT NULL,
    idade TEXT NOT NULL,
    tamanho TEXT NOT NULL
)
`;

const INSERIR_PET_1 = 
`
INSERT INTO pets (
    nome,
    especie,
    idade,
    tamanho
) SELECT 'Lua', 'Cachorro', '5 anos', 'Pequeno' WHERE NOT EXISTS (SELECT * FROM pets WHERE nome = 'Lua')
`;

const INSERIR_PET_2 = 
`
INSERT INTO pets (
    nome,
    especie,
    idade,
    tamanho
) SELECT 'Max', 'Cachorro', '9 anos', 'Médio' WHERE NOT EXISTS (SELECT * FROM pets WHERE nome = 'Max')
`;

const INSERIR_PET_3 = 
`
INSERT INTO pets (
    nome,
    especie,
    idade,
    tamanho
) SELECT 'Mingau', 'Gato', '12 anos', 'Pequeno' WHERE NOT EXISTS (SELECT * FROM pets WHERE nome = 'Mingau')
`;

const PASSEADOR_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS passeador (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nome_completo VARCHAR(40) NOT NULL UNIQUE, 
    email VARCHAR(255) NOT NULL, 
    celular VARCHAR(11) NOT NULL
)
`;

const INSERIR_PASSEADOR_1 = 
`
INSERT INTO passeador (
    nome_completo, 
    email,
    celular
) SELECT 'Amanda Rios', 'amanda.rios@gmail.com.br', '11976543276' WHERE NOT EXISTS (SELECT * FROM passeador WHERE email = 'amanda.rios@gmail.com.br')
 `;

const INSERIR_PASSEADOR_2 = 
`
INSERT INTO passeador (
    nome_completo, 
    email,
    celular
) SELECT 'Marcelo Souza', 'marcelo.souza@gmail.com.br', '19987652332' WHERE NOT EXISTS (SELECT * FROM passeador WHERE email = 'marcelo.souza@gmail.com.br')
`;

const PASSEIOS_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS passeios (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    data DATE NOT NULL,
    horario TIMESTAMP NOT NULL,
    id_pet INTEGER ,
    id_passeador INTEGER,
    FOREIGN KEY (id_pet) references pets(id),
    FOREIGN KEY (id_passeador) references passeador(id)    
)
`;

const INSERIR_PASSEIO_1 = 
`
INSERT INTO passeios (
    data, 
    horario,
    id_pet,
    id_passeador
) SELECT '2019-06-19', '06:45:00', 1, 1
`;

const INSERIR_PASSEIO_2 = 
`
INSERT INTO passeios (
    data, 
    horario,
    id_pet,
    id_passeador
) SELECT '2019-06-24', '09:45', 1, 2
`;

const INSERIR_PASSEIO_3 = 
`
INSERT INTO passeios (
    data, 
    horario,
    id_pet,
    id_passeador
) SELECT '2019-06-28', '15:30', 2, 1
`;


bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(USUARIOS_SCHEMA);
    bd.run(INSERIR_USUARIO_1);
    bd.run(PETS_SCHEMA);
    bd.run(INSERIR_PET_1);
    bd.run(INSERIR_PET_2);
    bd.run(INSERIR_PET_3);
    bd.run(PASSEADOR_SCHEMA);
    bd.run(INSERIR_PASSEADOR_1);
    bd.run(INSERIR_PASSEADOR_2);
    bd.run(PASSEIOS_SCHEMA);
    bd.run(INSERIR_PASSEIO_1);
    bd.run(INSERIR_PASSEIO_2);
    bd.run(INSERIR_PASSEIO_3); 

    bd.each("SELECT * FROM usuarios", (err, usuario) => {
        console.log('Usuario: ');
        console.log(usuario);
    });
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;