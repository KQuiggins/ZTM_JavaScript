const numbers = [99, 44, 6, 2, 1, 5, 63, 82, 283, 4, 0];

function selectionSort(arr){

    const length = arr.length;

    for(let i = 0; i < length; i++){
        // Set current index as minimum
        let min = i;
        let temp = arr[i];
        for(let j = i+1; j < length; j++){
            if(arr[j] < arr[min]){
                // Update minimum if current is < previous value
                min = j;
            }

        }
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

const answer = selectionSort(numbers);
console.log(answer);

// Time Complexity of Selection Sort
// Best Case: O(n^2)
// Average Case: O(n^2)
// Worst Case: O(n^2)

// Space Complexity of Selection Sort
// O(1)