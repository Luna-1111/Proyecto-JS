let arr = [1, 2, 3, 4, 5];

function updateDisplay() {
    document.getElementById('currentArray').textContent = `Arreglo: [${arr.join(', ')}]`;
    document.getElementById('arrayLength').textContent = `Longitud del arreglo: ${arr.length}`;
}

function popElement() {
    arr.pop();
    updateDisplay();
}

function shiftElement() {
    arr.shift();
    updateDisplay();
}

function pushElement() {
    const value = document.getElementById('pushValue').value;
    if (value !== "") {
        arr.push(value);
    }
    updateDisplay();
}

function unshiftElement() {
    const value = document.getElementById('unshiftValue').value;
    if (value !== "") {
        arr.unshift(value);
    }
    updateDisplay();
}

function spliceElement() {
    const index = parseInt(document.getElementById('spliceIndex').value);
    const deleteCount = parseInt(document.getElementById('spliceDeleteCount').value);
    const value = document.getElementById('spliceValue').value;

    if (!isNaN(index) && !isNaN(deleteCount)) {
        if (value !== "") {
            arr.splice(index, deleteCount, value);
        } else {
            arr.splice(index, deleteCount);
        }
    }
    updateDisplay();
}

function deleteElement() {
    const index = parseInt(document.getElementById('deleteIndex').value);
    if (!isNaN(index) && index >= 0 && index < arr.length) {
        delete arr[index];
    }
    updateDisplay();
}

function reverseArray() {
    arr.reverse();
    updateDisplay();
}

function sortArray() {
    arr.sort((a, b) => a - b);
    updateDisplay();
}

function concatArray() {
    const concatValues = document.getElementById('concatArray').value.split(',');
    arr = arr.concat(concatValues);
    updateDisplay();
}

function joinArray() {
    const separator = document.getElementById('joinSeparator').value;
    const joinedArray = arr.join(separator);
    document.getElementById('joinedArray').textContent = `Arreglo unido: ${joinedArray}`;
}

document.addEventListener('DOMContentLoaded', updateDisplay);
