var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    paciente.addEventListener("dblclick", function(){
        console.log("Duplo Click!");
        this.remove();
    })    
});