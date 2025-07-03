function processarFormulario(){
    //Variáveis
    const nome = document.querySelector("#nome").value
    const nome_erro = document.querySelector("#nome_erro").value
    const data_nascimento = document.querySelector("#data_nascimento").value
    const email = document.querySelector("#email").value
    const telefone = document.querySelector("#telefone").value
    const cpf = document.querySelector("#CPF").value
    const genero = document.querySelector("#genero").value
    const habilidades = document.querySelector("#habilidades").value
    const pais = document.querySelector("#pais").value
    const comentarios = document.querySelector("#comentarios").value

    //Validações

    // 1. Nome
    if (nome === "") {
        nome_erro.textContent = "O nome é obrigatório.";
        return false;
      } else if (/\d/.test(nome)) {
        nome_erro.textContent = "O nome não pode conter números.";
        return false;
      } else if (/[^a-zA-ZáéíóúÁÉÍÓÚãõÃÕâêîôûÂÊÎÔÛçÇ\s]/.test(nome)) {
        nome_erro.textContent = "O nome não pode conter símbolos.";
        return false;
      } else {
        nome_erro.textContent = "";
      }

      // 2. Idade
      const anoNascimento = new Date(data_nascimento).getFullYear();
      const anoAtual = new Date().getFullYear();
      if (!data_nascimento || anoAtual - anoNascimento < 18) {
        alert("Você precisa ter pelo menos 18 anos.");
        return false;
      }

      // 3. Email
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValido.test(email)) {
        alert("Digite um e-mail válido.");
        return false;
      }

      // 4. Telefone: somente números e mínimo de 10 dígitos
      if (!/^\d{10,11}$/.test(telefone)) {
        alert("Digite um telefone válido (somente números, com DDD).");
        return false;
      }

      // 5. CPF
      if (!validarCPF(cpf)) {
        alert("CPF inválido.");
        return false;
      }

      // 6. Gênero
      if (genero === "") {
        alert("Selecione um gênero.");
        return false;
      }

      // 7. Habilidades
      if (habilidades === "") {
        alert("Informe ao menos uma habilidade.");
        return false;
      }

      // 8. País
      if (pais === "") {
        alert("Informe o país.");
        return false;
      }

      // 9. Comentários (opcional, mas pode validar tamanho se quiser)
      if (comentarios.length > 500) {
        alert("Comentários muito longos (máximo 500 caracteres).");
        return false;
      }

      alert("Formulário enviado com sucesso!");
      return true;
    }

    // Função para validar CPF
    function validarCPF(cpf) {
      cpf = cpf.replace(/[^\d]+/g, '');

      if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

      let soma = 0, resto;

      for (let i = 1; i <= 9; i++)
        soma += parseInt(cpf[i - 1]) * (11 - i);
      resto = (soma * 10) % 11;
      if (resto === 10 || resto === 11) resto = 0;
      if (resto !== parseInt(cpf[9])) return false;

      soma = 0;
      for (let i = 1; i <= 10; i++)
        soma += parseInt(cpf[i - 1]) * (12 - i);
      resto = (soma * 10) % 11;
      if (resto === 10 || resto === 11) resto = 0;
      if (resto !== parseInt(cpf[10])) return false;

      return true;
}
      







  






