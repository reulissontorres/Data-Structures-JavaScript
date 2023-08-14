/**
 * Zera os dígitos pares de um número inteiro.
 * 
 * @param {number} num - O número inteiro no qual zerar os dígitos pares.
 * @returns {number} O número resultante após zerar os dígitos pares.
 */

const zeroEvenDigits = (num) => {
    if (num === 0) return 0 // Caso base: número zero resulta em zero

    if ((num % 10) % 2 === 0) { // Verifica se o último dígito é par
        // Se for par, a chamada recursiva remove o último dígito par
        return zeroEvenDigits(Math.floor(num / 10)) * 10
    } else {
        // Se for ímpar, a chamada recursiva mantém o último dígito e reorganiza os outros
        return zeroEvenDigits(Math.floor(num / 10)) * 10 + (num % 10)
    }
}

// Exemplos de uso:
console.log(zeroEvenDigits(158)) // Deve retornar 150
console.log(zeroEvenDigits(809012)) // Deve retornar 9010
console.log(zeroEvenDigits(6491438530)) // Deve retornar 91030530
