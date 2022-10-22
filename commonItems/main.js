// should return true
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

// should return false
const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'i'];

/* brute force solution
function containsCommonItem(arr1, arr2){
    for(let i=0; i < arr1.length; i++){
        for(let j=0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                return true;
            }
        }
    }
    return false;
}

console.log(containsCommonItem(array1, array2)); */

function containsCommonItem2(arr1, arr2){
    // loop through first array and create object where properties === items in the array.
    let map = {}
    for (let i=0; i < arr1.length; i++){
        if(!map[arr1[i]]){
            const item = arr1[i];
            map[item] = true;
        }
    }
    //console.log(map)
    // loop through second array and check if item in second array exist on created object.
    for (j=0; j <arr2.length; j++){
        if (map[arr2[j]]){
            return true;
        }
    }
    return false
}
//console.log(containsCommonItem2(array1, array2))

// using built-in functions
function containsCommonItem3(arr1, arr2){
    return arr1.some(item => arr2.includes(item))
}

console.log(containsCommonItem3(array1, array2))
