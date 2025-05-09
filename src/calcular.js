// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;
function calcular(num1, num2, operador) {
  if (num1 === NaN) {
    console.log("Erro: parâmetros inválidos")
  }
  else if (num2 === NaN)
    console.log("Erro: parâmetros inválidos")
  else if (num1 / 0) {
    console.log("Erro: divisão por zero")
  }
  else if (operador === '+') {
    num1 + num2
  }
  else if (operador === '-') {
    num1 - num2
  }
  else if (operador === '*') {
    num1 * num2
  }
  else if (operador === '/') {
    num1 / num2
  }
  else {
    console.log("Erro: operação inválida")
  }
  return calcular
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };