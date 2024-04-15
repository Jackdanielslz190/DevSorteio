function sortear() {
    const minimo = parseInt(document.getElementById('input-min').value);
    const maximo = parseInt(document.getElementById('input-max').value);

    if (isNaN(minimo) || isNaN(maximo)) {
        alert('Digite valores válidos para o intervalo.');
        return;
    }

    const resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}