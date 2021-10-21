function combine(arr1, arr2) {
    var newarr = [];
        for (var j = 0; j < arr1.length; j++) {
            newarr.push(arr1[j]);
        }

        for (var i = 0; i < arr2.length; i++) {
            newarr.push(arr2[i]);
        }
        return newarr;
    }

var a = combine(['a','b'],[1,2])
console.log(a);


function min_front(arr){
    var min = arr[0], position = 0;
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
            position = i;
        }
    }
    if (position !== 0){
        var temp = arr[position-1];
        for (var j = position; j > 0; j--){
            arr[j-1] = arr[j];
            arr[j] = temp;
            if (j > 1){
                temp = arr[j-2];
            }
        }
    }
    return arr;
}
var a = min_front([4,2,1,3,5]);
console.log(a);
