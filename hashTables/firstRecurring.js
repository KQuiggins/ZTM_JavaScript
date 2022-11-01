// Google Question
// Given Array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]


//Given an array = [2, 3, 4, 5]
// It should return undefined

// Naive approach
function firstRecurringCharacter(input){
    for(let i = 0; i < input.length; i++){
        for(let j = i + 1; j < input.length; j++){
            //console.log(input[i], input[j]);
            if (input[i] === input[j]){
                
                return input[i];
            }
        }
    }
    return undefined;
}


// Using a hash map
function firstRecurringCharacter2(input){
    let map = {}
    for(let i = 0; i < input.length; i++){
        if(map[input[i]] !== undefined){
            return input[i];
        }else{
            map[input[i]] = i
        }
    }
    return undefined;
}

//console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
//console.log(firstRecurringCharacter([2, 3, 4, 5]));

console.log(firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
