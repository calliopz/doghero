let tabelaPets = document.querySelector('#pets');
tabelaPets.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remocao') {
        let petId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/pets/${petId}`, { method: 'DELETE' })
            .then(resposta => {

                let tr = elementoClicado.closest(`#pet_${petId}`);
                tr.remove();
            })
            .catch(erro => console.log(erro));
    }
});
