// Suma de números impares del 1 al 100
document.getElementById('calculateSum').addEventListener('click', function () {
    let sum = 0;
    let i = 1;

    while (i <= 100) {
        if (i % 2 !== 0) {
            sum += i;
        }
        i++;
    }

    document.getElementById('sumResult').textContent = `La suma de todos los números impares del 1 al 100 es: ${sum}`;
});

// Mostrar asteriscos
document.getElementById('showAsterisks').addEventListener('click', function () {
    const count = parseInt(document.getElementById('asteriskCount').value);
    let asterisks = '';

    for (let i = 0; i < count; i++) {
        asterisks += '*';
    }

    document.getElementById('asterisksResult').textContent = asterisks;
});

// Tablas de multiplicar del 1 al 10
document.getElementById('showTables').addEventListener('click', function () {
    let result = '';

    for (let i = 1; i <= 10; i++) {
        result += `Tabla del ${i}:\n`;
        for (let j = 1; j <= 10; j++) {
            result += `${i} x ${j} = ${i * j}\n`;
        }
        result += '\n';
    }

    document.getElementById('tablesResult').textContent = result;
});
