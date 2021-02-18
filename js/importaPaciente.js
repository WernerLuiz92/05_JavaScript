let buttonImport = document.querySelector("#importa-paciente");
let erroAjax = document.querySelector("#erro-ajax");

buttonImport.addEventListener("click", function () {
    
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {

            erroAjax.classList.add("hidden");

            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);
    
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);            
            });
        } else {

            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("hidden");
        }
    });

    xhr.send();
});