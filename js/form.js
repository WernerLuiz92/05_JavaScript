var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    

    //Extrai os dados do formulário para o objeto Paciente.
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    exibeMensagensDeErro(erros);

    if (erros.length > 0) {
        return;
    }

    //Adiciona o paciente na tabela.
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(montaTr(paciente));

    form.reset();
});

function obtemPacienteDoFormulario (form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O campo Nome é obrigatório!")
    }
    if (paciente.gordura.length == 0){
        erros.push("O campo Gordura é obrigatório!")
    }
    if (paciente.peso.length == 0){
        erros.push("O campo Peso é obrigatório!")
    } else if (!validaPeso(paciente.peso)) {
        erros.push("Peso Inválido!");
    }
    if (paciente.altura.length == 0){
        erros.push("O campo Altura é obrigatório!")
    } else if (!validaAltura(paciente.altura)) {
        erros.push("Altura Inválida!");
    }     

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;

        ul.appendChild(li);
    });
}