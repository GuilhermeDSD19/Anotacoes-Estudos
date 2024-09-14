let btnSend = document.getElementById("submit");
let inputName = document.getElementById("name");
let subject = document.getElementById("subject");
let mail = document.getElementById("mail");
let message = document.getElementById("message");
let responseMail = document.getElementById("response-mail");
let textMsg = document.getElementById("text-msg");
let form = document.getElementById("form-contact");



let templateParams = {
    subject: subject.value,
    name: inputName.value,
    mail: mail.value,
    message: message.value,
};
btnSend.disabled = true;
function validadeField() {
    if (inputName.value !== "" && subject.value !== "" && mail.value !== "" && message.value !== "") {
        btnSend.disabled = false;
    }
} validadeField();
function cleanField(field) {
    return field.value = null
}
inputName.onkeydown = validadeField;
subject.onkeydown = validadeField;
mail.onkeydown = validadeField;
message.onkeydown = validadeField;

function cleanResponse() {
    btnSend.disabled = true;
    cleanField(inputName);
    cleanField(subject);
    cleanField(mail);
    cleanField(message);
    responseMail.className = "d-block"
    textMsg.innerText = "";
}

function sendResponse(CssClassName, txtMessage) {
    responseMail.className = CssClassName;
    textMsg.innerText = txtMessage;
    setInterval(cleanResponse, 5000);
}

btnSend.onclick = sendEmail;
