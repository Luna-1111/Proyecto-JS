document.getElementById('createBoxes').addEventListener('click', function() {
    const boxesContainer = document.getElementById('boxesContainer');
    boxesContainer.innerHTML = '';

    const numberOfBoxes = parseInt(prompt('¿Cuántas cajas deseas colocar?'), 10);

    if (isNaN(numberOfBoxes) || numberOfBoxes <= 0) {
        alert('Por favor, introduce un número válido de cajas.');
        return;
    }

    if (numberOfBoxes < 8) {
        boxesContainer.classList.remove('horizontal');
        boxesContainer.classList.add('vertical');
    } else {
        boxesContainer.classList.remove('vertical');
        boxesContainer.classList.add('horizontal');
    }

    for (let i = 0; i < numberOfBoxes; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.textContent = `Caja ${i + 1}`;
        boxesContainer.appendChild(box);
    }
});

