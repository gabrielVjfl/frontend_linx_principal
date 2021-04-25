// Validação de formulário
function ValidationForm() {
  let Name = formShare.name.value;
  let Email = formShare.email.value;

  let regexEmail = /\S+@\S+\.\S+/;
  let emailValid = regexEmail.test(Email)

  if (Name == "") {
    alert("Campo nome vázio!");
    formShare.Name.focus();
    return false;
  }
  if (Name.length <= 2) {
    alert("O nome precisa ter mais do que 2 letras!");
    formShare.Name.focus();
    return false;
  }
  if (Email == "") {
    alert("Email vázio!");
    formShare.Email.focus();
    return false;
  }
  if (emailValid == false) {
    alert("Email inválido!");
    formShare.Email.focus();
    return false;
  }
}
