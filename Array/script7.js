// Write a JavaScript program to sort the items of an array. Go to the editor
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

function bubbleSort(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) {
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}
