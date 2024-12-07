
// Selecionar os elementos
const emailInput = document.querySelector("#emailInput");
const resultMessage = document.querySelector("#resultMessage");
const emailForm = document.querySelector("#emailForm");


// Um evento que controla/ativa apos a submissao
emailForm.addEventListener("submit", function (event){
    event.preventDefault();
    const email = emailInput.value;

    // Validar email
    const isValid = validateEmail(email);
    if (isValid) {
            resultMessage.textContent = "E-mail Válido!"
            resultMessage.style.color = "green";
        }else{
            resultMessage.textContent = "E-mail Inválido!"
            resultMessage.style.color = "red";
    }
})



// Funcao validar email
const validateEmail = (email) => {

// Padrao Email=texto@Testo.Texto
const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
return regex.test(email);
};

