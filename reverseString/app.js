// Create a function that reverses a string:
// 'Hi my name is Kenny' should be:
// 'ynneK si eman ym iH'

// Creating your own function
function reverseString(str){
    if(!str || str.length < 2|| typeof str !== 'string'){
        return 'Please check the input'
    }

    const reverseArray = [];
    const totalCharacters = str.length - 1;
    for(let i = totalCharacters; i >= 0; i--){
        reverseArray.push(str[i]);
    }
    console.log(totalCharacters);
    console.log(reverseArray);

    return reverseArray.join('');
}

// Using built-in functions
function reverseString2(str){
    return str.split('').reverse().join('');
}

// Using arrow function and built-in functions
const reverseString3 = str => str.split('').reverse().join('');

// Using the spread operator
const reverseString4 = str => [...str].reverse().join('');

// Output
console.log(reverseString('Hi my name is Kenny'));
console.log(reverseString2('Hi my name is Kenny'));
console.log(reverseString3('Hi my name is Kenny'));
console.log(reverseString4('Hi my name is Kenny'));
