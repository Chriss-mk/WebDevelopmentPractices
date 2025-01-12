document.getElementById("confirmarContrasenia").addEventListener("input", function() {
    const contrasenia = document.getElementById("contrasenia").value;  
    const confirmarContrasenia = this.value; 
    const existingMessage = document.querySelector(".message");

    if (existingMessage) {
        existingMessage.remove();
    }

    const message = document.createElement("p");
    message.classList.add("message");

    if (contrasenia === confirmarContrasenia) {
        message.textContent = "Las contraseñas coinciden.";
        message.style.color = "green";
    } else {
        message.textContent = "Las contraseñas no coinciden.";
        message.style.color = "red";
    }
    
    const confirmarContraseniaField = document.getElementById("confirmarContrasenia");
    confirmarContraseniaField.parentNode.insertBefore(message, confirmarContraseniaField.nextSibling);
});
