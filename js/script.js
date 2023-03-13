const form = document.querySelector("#form");
const nameinput = document.querySelector('#name');
const emailinput = document.querySelector("#email");
const msgInputt = document.querySelector("#msg");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // verificar se o nome esta vazio no campo
    if (nameinput.value === ""){
        alert("Por favor digite seu nome");
        return;
    }

    // Verificar e-mail se esta preenchido e se é valido
    if (emailinput.value === ""){
        alert("por favor digite seu E-mail")
        return;
    }

    // verificar se o campo mensagem foi preenchido 
    if (msgTextarea.value === ""){
        alert("por favor digite sua mensagem")
        return;
    }

    // todos os campos preenchidos,  envie o form
    form.submit();
})
