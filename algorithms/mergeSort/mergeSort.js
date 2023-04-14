const numbers = [99, 44, 6, 2, 1, 5, 63, 82, 283, 4, 0];

function mergeSort (array) {
    if (array.length === 1) {
        return array
    }
    
    // Split Array in into right and left
    const length = array.length;
    const middle = Math.floor(length / 2); // 5
    // console.log(middle);
    const left = array.slice(0, middle); // 0 to middle [ 99, 44, 6, 2, 1 ]
    // console.log(left);
    const right = array.slice(middle); // middle to end [ 5, 63, 82, 283, 4, 0 ]
    // console.log(right);
    
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}


function merge (left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);

// Time Complexity of Merge Sort
// Best Case: O(n log(n))
// Average Case: O(n log(n))
// Worst Case: O(n log(n))

// Space Complexity of Merge Sort
// O(n)