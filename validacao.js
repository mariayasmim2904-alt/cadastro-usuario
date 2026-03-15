function validarFormulario() {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmar").value;

  const erro = document.getElementById("erro");
  const sucesso = document.getElementById("sucesso");

  erro.textContent = "";
  sucesso.textContent = "";

  // Validação de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    erro.textContent = "Digite um email válido!";
    return;
  }

  // Validação de senha mínima
  if (senha.length < 6) {
    erro.textContent = "A senha deve ter no mínimo 6 caracteres!";
    return;
  }

  // Confirmar senha
  if (senha !== confirmar) {
    erro.textContent = "As senhas não coincidem!";
    return;
  }

  // Tudo certo
  sucesso.textContent = "Cadastro realizado com sucesso!";
}
