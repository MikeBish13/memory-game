export function doubleAndShuffleArray(array, gridSize) {
    // Slice the array
    let firstArray = array.slice(0, gridSize);
    // Double the array
    let secondArray = [...firstArray];
    for(let i = 0; i < firstArray.length; i++) {
        secondArray.push(array[i]);
    }
    // Shuffle the array
    for (var i = secondArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = secondArray[i];
        secondArray[i] = secondArray[j];
        secondArray[j] = temp;
    }
    return secondArray;
}

export function cleanButtons() {
    let buttons = document.querySelectorAll('[data-id]');
    buttons.forEach(item => {
      item.disabled = false;
      item.classList.remove('active');
      item.classList.remove('selected');
    })
}

export const confirmMatch = (x) => {
    document.querySelectorAll(`[data-id="${x}"]`).forEach(item => {
        item.classList.add('selected');
        item.classList.remove('active');
    })
}