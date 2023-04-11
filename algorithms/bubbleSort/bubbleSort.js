const numbers = [99, 44, 6, 2, 1, 5, 63, 82, 283, 4, 0];

function bubbleSort(arr) {

    const length = arr.length;

    for(let i = 0; i < length; i++){
        for(j = 0; j < length; j++){
            if( arr[j] > arr[j+1]){
                //Swap numbers
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers);

// Best Time O(n) Average Time O(n^2) Worst Time O(n^2)
// Space: O(1)