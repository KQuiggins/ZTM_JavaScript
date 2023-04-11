function reverseString(str) {
    let arrayStr = str.split("");
    let reversedArray = [];
    //We are using closure here so that we don't add the above variables to the global scope.
    function addToArray(array) {

      if(array.length > 0) {
        reversedArray.push(array.pop());
        addToArray(array);
      }
      return;
    }
    addToArray(arrayStr);
    return reversedArray.join("");
  }

console.log(reverseString('yoyo master'));