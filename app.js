const binarySearch = (needle, haystack) => {
    let start = 0;
    let end = haystack.length - 1;

    while(start <= end) {
      let middle = Math.floor((start + end) / 2);
      if(haystack[middle] === needle) {
        return middle;
      }
      if(haystack[middle] < needle) {
        start = middle + 1;
      }
      if(haystack[middle] > needle) {
        end = middle - 1;
      }

    }
    return -1;
};