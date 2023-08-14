/**
 * Encontra o menor dígito em um número inteiro.
 * 
 * @param {number} num - O número inteiro no qual procurar o menor dígito.
 * @returns {number} O menor dígito encontrado no número.
 */

const smallestDigit = (num) => {
    if (num < 10) return num // Caso base: quando o número tem apenas um dígito

    // Retorna o menor valor entre o último dígito e o menor dígito no resto do número
    return Math.min(num % 10, smallestDigit(Math.floor(num / 10)))
}

// Exemplos de uso:
console.log(smallestDigit(158)) // Deve retorrnar 1
console.log(smallestDigit(809012)) // Deve retorrnar 0
console.log(smallestDigit(644353)) // Deve retorrnar 3
