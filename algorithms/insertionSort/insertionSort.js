const numbers = [99, 44, 6, 2, 1, 5, 63, 82, 283, 4, 0];

function insertionSort(arr){
    const length = arr.length;
    for(let i = 0; i < length; i++){
        if(arr[i] < arr[0]){
            // Move number to first position
            arr.unshift(arr.splice(i,1)[0]);
        } else {
            // find where the number belongs
            for(let j = 1; j < i; j++){
                if(arr[i] > arr[j-1] && arr[i] < arr[j]){
                    // move number to correct spot
                    arr.splice(j,0,arr.splice(i,1)[0])
                }
            }

        }
    }
}

insertionSort(numbers);
console.log(numbers);

// Time: Best O(n) Average O(n^2) Worst O(n^2) Space: O(1)