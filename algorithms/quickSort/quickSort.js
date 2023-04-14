const numbers = [99, 44, 6, 2, 1, 5, 63, 82, 283, 4, 0];

function quickSort(array, left, right) {
    const len = array.length; 
    let pivot;
    let partitionIndex;

    if(left < right){
        pivot = right;
        partitionIndex = partition(array, pivot, left, right);

        //sort left and right
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }
    return array;
}

function partition(array, pivot, left, right){
    let pivotValue = array[pivot],
        partitionIndex = left;

    for(let i = left; i < right; i++){
        if(array[i] < pivotValue){
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

const answer = quickSort(numbers, 0, numbers.length - 1);
console.log(answer);

// Time Complexity of Quick Sort
// Best Case: O(n log(n))
// Average Case: O(n log(n))
// Worst Case: O(n^2)

// Space Complexity of Quick Sort
// O(log(n))