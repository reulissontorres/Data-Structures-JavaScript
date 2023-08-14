/**
 * Zera os dígitos ímpares de um número inteiro.
 * 
 * @param {number} num - O número inteiro no qual zerar os dígitos ímpares.
 * @returns {number} O número resultante após zerar os dígitos ímpares.
 */

const zeroOddDigits = (num) => {
    if (num === 0) return 0 // Caso base: número zero resulta em zero

    if ((num % 10) % 2 === 1) { // Verifica se o último dígito é ímpar
        // Se for ímpar, a chamada recursiva remove o último dígito ímpares
        return zeroOddDigits(Math.floor(num / 10)) * 10
    } else {
        // Se for par, a chamada recursiva mantém o último dígito e reorganiza os outros
        return zeroOddDigits(Math.floor(num / 10)) * 10 + (num % 10)
    }
}

// Exemplos de uso:
console.log(zeroOddDigits(158)) // Deve retornar 8
console.log(zeroOddDigits(809012)) // Deve retornar 800002
console.log(zeroOddDigits(6491438530)) // Deve retornar 6400408000
