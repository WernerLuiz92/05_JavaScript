let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++){

    let paciente = pacientes[i];
    
    let peso = paciente.querySelector(".info-peso").textContent;
    let altura = paciente.querySelector(".info-altura").textContent;

    let pesoIsValid = validaPeso(peso);
    let alturaIsValid = validaAltura(altura);

    if (alturaIsValid && pesoIsValid){
        let imc = calculaImc(peso, altura);
        paciente.querySelector(".info-imc").textContent = imc;
    } else {
        paciente.querySelector(".info-imc").textContent = "Erro: Dados inválidos";
        paciente.classList.add("paciente-invalido");
    }
}

function validaPeso(peso) {
    if ((peso >= 0.5) && (peso <= 710)){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if ((altura >= 0.5) && (altura <= 2.4)){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura){
    let imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}