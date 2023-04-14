if(document.f1.txtName.value != ""){
    console.log("hello")
}
  //console.log(s[1]);


// Naive solution
function hasPairWithSum(arr, sum){
    var len = arr.length;
    for (var i = 0; i < len-1; i++){
        for (var j = i+1; j < len; j++){
            if (arr[i] + arr[j] == sum)
            return true;
        }
    }
    return false;
}

// Better Solution
function hasPairWithSum2(arr, sum){
    const mySet = new Set();
    const len = arr.length;
    for(let i = 0; i < len; i++){
        if(mySet.has(arr[i])){
            return true;
        }
        mySet.add(sum - arr[i]);
    }
    return false;
}

//hasPairWithSum2([6, 4, 3, 2, 1, 7], 9)



