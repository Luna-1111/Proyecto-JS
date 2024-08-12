// Suma de números positivos
document.getElementById('startSum').addEventListener('click', function () {
    let sum = 0;
    let num;

    do {
        num = parseFloat(prompt("Ingrese un número positivo (o un número negativo o cero para terminar):"));
        if (num > 0) {
            sum += num;
        }
    } while (num > 0);

    document.getElementById('sumResult').textContent = `La suma de todos los números positivos es: ${sum}`;
});

// Ordenar 3 números de mayor a menor
document.getElementById('sortNumbers').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    const numbers = [num1, num2, num3];
    numbers.sort((a, b) => b - a);

    document.getElementById('sortedResult').textContent = `Los números ordenados de mayor a menor son: ${numbers.join(', ')}`;
});

// Calcular importe neto con impuestos
document.getElementById('calculateNet').addEventListener('click', function () {
    const importeBruto = parseFloat(document.getElementById('importeBruto').value);
    let importeNeto;

    if (importeBruto > 15000) {
        importeNeto = importeBruto * 0.84;
    } else {
        importeNeto = importeBruto * 0.90;
    }

    document.getElementById('netResult').textContent = `El importe neto es: ${importeNeto.toFixed(2)}€`;
});

// Calcular sueldo con aumento
document.getElementById('calculateSalary').addEventListener('click', function () {
    const yearsWorked = parseFloat(document.getElementById('yearsWorked').value);
    let salary = 40000;

    if (yearsWorked > 10) {
        salary *= 1.10;
    } else if (yearsWorked > 5) {
        salary *= 1.07;
    } else if (yearsWorked > 3) {
        salary *= 1.05;
    } else {
        salary *= 1.03;
    }

    document.getElementById('salaryResult').textContent = `El sueldo calculado es: ${salary.toFixed(2)}€`;
});
