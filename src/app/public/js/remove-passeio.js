let tabelaPasseios = document.querySelector('#passeios');
tabelaPasseios.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remocao') {
        let passeioId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/passeios/form/${passeioId}`, { method: 'DELETE' })
            .then(resposta => {

                let tr = elementoClicado.closest(`#passeio_${passeioId}`);
                tr.remove();
            })
            .catch(erro => console.log(erro));
    }
});