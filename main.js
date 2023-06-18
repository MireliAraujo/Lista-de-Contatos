const form = document.getElementById('formulario');
const contato = [];
const nome = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLinha();
    atualizaTabela();

});

function addLinha() {
    const inputContato = document.getElementById('numContato');
    const inputNomeCont = document.getElementById('nomeContato');

    if(nome.includes(inputNomeCont.value)) {
        alert(`O contato: ${inputNomeCont.value} já foi inserido!`)
    } else{
        contato.push(parseInt(inputContato.value));
        nome.push(inputNomeCont.value);
    

        let linha = '<tr>';
        linha += `<td>${inputContato.value}</td>`;
        linha += `<td>${inputNomeCont.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        console.log(contato)

    }

    inputContato.value = "";
    inputNomeCont.value = "";
}


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
