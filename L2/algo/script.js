const arraySizeInput = document.getElementById("array-size");
const sortAlgorithmSelect = document.getElementById("sort-algorithm");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const barsDiv = document.getElementById("bars");

let animationInterval;
let array = [];
let steps = [];

function generateRandomArray(size) {
    array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array.slice();
}

function drawBars(data) {
    barsDiv.innerHTML = '';
    data.forEach(height => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${height}px`;
        barsDiv.appendChild(bar);
    });
}

function resetVisualization() {
    barsDiv.innerHTML = '';
}

function startSorting() {
    const algorithm = sortAlgorithmSelect.value;
    const arraySize = parseInt(arraySizeInput.value);
    resetVisualization();
    array = generateRandomArray(arraySize);
    steps = [];
    switch (algorithm) {
        case "bubble":
            steps = bubbleSort(array.slice());
            break;
        case "quick":
            steps = quickSort(array.slice(), 0, array.length - 1);
            break;
        case "insertion":
            steps = insertionSort(array.slice());
            break;
        case "selection":
            steps = selectionSort(array.slice());
            break;
        case "merge":
            steps = mergeSort(array.slice());
            break;
        default:
            break;
    }
    let stepIndex = 0;
    animationInterval = setInterval(() => {
        if (stepIndex < steps.length) {
            drawBars(steps[stepIndex]);
            stepIndex++;
        } else {
            clearInterval(animationInterval);
        }
    }, 50);
}

function stopSorting() {
    clearInterval(animationInterval);
}

startButton.addEventListener("click", startSorting);
stopButton.addEventListener("click", stopSorting);

function bubbleSort(arr) {
    const steps = [];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
            steps.push(arr.slice());
        }
    }
    return steps;
}

function quickSort(arr, low, high) {
    const steps = [];
    if (low < high) {
        const pivotIndex = partition(arr, low, high, steps);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return steps;
}

function partition(arr, low, high, steps) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            steps.push(arr.slice());
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    steps.push(arr.slice());
    return i + 1;
}

function insertionSort(arr) {
    const steps = [];
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
        steps.push(arr.slice());
    }
    return steps;
}

function selectionSort(arr) {
    const steps = [];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        steps.push(arr.slice());
    }
    return steps;
}

function mergeSort(arr) {
    const steps = [];
    if (arr.length <= 1) {
        return [arr.slice()];
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    const leftSteps = mergeSort(left);
    const rightSteps = mergeSort(right);
    while (leftSteps.length > 0 && rightSteps.length > 0) {
        if (leftSteps[0][0] < rightSteps[0][0]) {
            steps.push(leftSteps.shift());
        } else {
            steps.push(rightSteps.shift());
        }
    }
    return steps.concat(leftSteps, rightSteps);
}
