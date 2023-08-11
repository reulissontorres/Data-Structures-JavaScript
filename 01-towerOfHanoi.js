/**
 * Resolve o problema da Torre de Hanói, movendo discos de uma torre de origem para uma torre de destino,
 * utilizando uma torre auxiliar como intermediária.
 * 
 * @param {number} n - O número de discos a serem movidos.
 * @param {number} origem - O identificador da torre de origem.
 * @param {number} auxiliar - O identificador da torre auxiliar.
 * @param {number} dest - O identificador da torre de destino.
 */
function towerOfHanoi(n, origem, auxiliar, dest) {
    // Caso base: Se há apenas um disco, mova diretamente da origem para o destino.
    if (n === 1) {
        console.log(`Mova disco ${n} da origem ${origem} para o destino ${dest}`);
        return;
    }

    // Passo recursivo:
    // 1. Mova n-1 discos da origem para a torre auxiliar, utilizando a torre de destino como auxiliar.
    towerOfHanoi(n - 1, origem, dest, auxiliar);

    // 2. Mova o disco restante da origem para o destino.
    console.log(`Mova disco ${n} da origem ${origem} para o destino ${dest}`);

    // 3. Mova os n-1 discos da torre auxiliar (agora origem) para o destino, utilizando a torre original como auxiliar.
    towerOfHanoi(n - 1, auxiliar, origem, dest);
}

// Chamada inicial da função para resolver o problema com 3 discos,
// movendo-os da torre 1 (origem) para a torre 3 (destino) com a torre 2 (auxiliar) como intermediária.
towerOfHanoi(3, 1, 2, 3);
