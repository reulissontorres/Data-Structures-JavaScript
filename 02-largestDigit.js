/**
 * Encontra o maior dígito em um número inteiro.
 * 
 * @param {number} num - O número inteiro no qual procurar o maior dígito.
 * @returns {number} O maior dígito encontrado no número.
 */

const largestDigit = (num) => {
    if (num < 10) return num // Caso base: quando o número tem apenas um dígito

    const ultimoDigito = num % 10
    const restoDoNumero = Math.floor(num / 10)

    // Chamada recursiva para encontrar o maior dígito no resto do número
    const maior = largestDigit(restoDoNumero)

    // Retorna o maior valor entre o último dígito e o maior dígito no resto do número
    return Math.max(ultimoDigito, maior)

}

// Exemplos de uso:
console.log(largestDigit(158)) // Deve retorrnar 8
console.log(largestDigit(809012)) // Deve retorrnar 9
console.log(largestDigit(64401353)) // Deve retorrnar 6
