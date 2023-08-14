/**
 * Remove os dígitos ímpares de um número inteiro.
 * 
 * @param {number} num - O número inteiro no qual remover os dígitos ímpares.
 * @returns {number} O número resultante após remover os dígitos ímpares.
 */

const removeOddDigits = (num) => {
    if (num === 0) return 0 // Caso base: número zero resulta em zero

    if ((num % 10) % 2 === 1) { // Verifica se o último dígito é ímpar
        // Se for ímpar, a chamada recursiva remove o último dígito ímpar
        return removeOddDigits(Math.floor(num / 10))
    } else {
        // Se for par, a chamada recursiva mantém o último dígito e reorganiza os outros
        return removeOddDigits(Math.floor(num / 10)) * 10 + (num % 10)
    }
}

// Exemplos de uso:
console.log(removeOddDigits(158)) // Deve retornar 8
console.log(removeOddDigits(809012)) // Deve retornar 8002
console.log(removeOddDigits(6491438530)) // Deve retornar 64480
