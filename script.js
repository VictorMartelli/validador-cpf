let input = document.querySelector('#cpf')

function validarCPFDoInput() {
  const paragraph = document.querySelector('#value')
  const error = document.querySelector('.error')

  const valorDoInput = input.value.replace(/[^\d]+/g,'')

  console.log('valor do input', valorDoInput)

  paragraph.innerHTML = `CPF digitado: ${valorDoInput}`
  error.innerHTML = validarCPF(valorDoInput)

  if (validarCPF(valorDoInput)) {
    error.classList.add('valido')
    error.classList.remove('invalido')
    error.innerHTML = 'CPF válido!'
  } else {
    error.classList.add('invalido')
    error.classList.remove('valido')
    error.innerHTML = 'CPF inválido.'
  }
}

// TESTAR ESSA FUNÇÃO
// Função retorna TRUE caso o CPF seja válido
// Função retorna FALSE caso o CPF seja inválido
function validarCPF(cpf) {
  var numeros, digitos, soma, i, resultado, digitos_iguais;
  digitos_iguais = 1;

  if (cpf.length < 11)
    return false;

  for (i = 0; i < cpf.length - 1; i++)
    if (cpf.charAt(i) != cpf.charAt(i + 1)) {
      digitos_iguais = 0;
      break;
    }
  if (!digitos_iguais) {
    numeros = cpf.substring(0, 9);
    digitos = cpf.substring(9);
    soma = 0;
    for (i = 10; i > 1; i--)
      soma += numeros.charAt(10 - i) * i;
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
      return false;
    numeros = cpf.substring(0, 10);
    soma = 0;
    for (i = 11; i > 1; i--)
      soma += numeros.charAt(11 - i) * i;
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
      return false;
    return true;
  } else
    return false;
}


module.exports = {
  validarCPF
}