/**
 * Remove os dígitos pares de um número inteiro.
 * 
 * @param {number} num - O número inteiro no qual remover os dígitos pares.
 * @returns {number} O número resultante após remover os dígitos pares.
 */

const removeEvenDigits = (num) => {
    if (num === 0) return 0 // Caso base: número zero resulta em zero

    if ((num % 10) % 2 === 0) { // Verifica se o último dígito é par
        // Se for par, a chamada recursiva remove o último dígito par
        return removeEvenDigits(Math.floor(num / 10))
    } else {
        // Se for ímpar, a chamada recursiva mantém o último dígito e reorganiza os outros
        return removeEvenDigits(Math.floor(num / 10)) * 10 + (num % 10)
    }
}

// Exemplos de uso:
console.log(removeEvenDigits(158)) // Deve retornar 15
console.log(removeEvenDigits(809012)) // Deve retornar 91
console.log(removeEvenDigits(6491438530)) // Deve retornar 91353
