// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

var arr = [-1,3,5,-5];
function makeItBig(arr){
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}
arr = makeItBig(arr);
console.log(arr);

// 2. Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

var arr = [-5, 0 , 9, -2, 7];
function plrh(arr){
    var low = arr[0];
    var high = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < low){
            low = arr[i];
        }
        if (arr[i] > high){
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}
x = plrh(arr);
console.log(x);

// 3. Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

var arr = [6, 8, 1, -5, 21, 0];
function pora(arr){
    console.log(arr[arr.length-2]);
    for (var i = 0; i< arr.length; i++){
        if (arr[i] % 2 !== 0){
            return arr[i];
        }
    }
    return console.log("No odd Numbers.");
}
x = pora(arr);
console.log(x);

// 4. Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

var arr1 = [1,2,3];
var arr2 = [];
function double(arr1, arr2){
    var temp = 0;
    for (var i = 0; i < arr1.length; i++){
        temp = arr1[i]*2;
        arr2.push(temp);
    }
    return arr2;
}
x = double(arr1, arr2);
console.log(x);

// 5. Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

var arr = [-1,1,1,1];
function count_p(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            count++;
        }
    }
    arr[arr.length-1] = count;
    return arr;
}

arr = count_p(arr);
console.log(arr);

// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

var arr = [0, 1 ,1 ,1 ,3, 6, 6, 6, 8, 1, 5, 5, 5]
function eo(arr){
    var count1 = 0;
    var count2 = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            count1++;
            if (count1 == 3){
                console.log("That's odd!");
                count1 = 0;
            }
        }
        else{
            count2++;
            if (count2 == 3){
                console.log("Even more so!");
                count2 == 0;
            }
        }
    }
}
var x = eo(arr);

// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

var arr = [1,2,3,4,5,6,7,8,9]
function its(arr){
    for (var i = 0; i < arr.length; i++){
        if ( i%2 !== 0){
        arr[i] = arr[i] + 1;
        }
    }
    return arr;
}
arr = its(arr);
console.log(arr);

// 8. Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

var arr = ["Hello", "dojo", "awesome"];
function prev_lengths(arr){
    for (var i = arr.length - 1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}
arr = prev_lengths(arr);
console.log(arr);

// 9. Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

var arr = [1,2,3];
var new_arr = [];
function add_sev(arr, new_arr){
    for (var i = 0; i < arr.length; i++){
        new_arr[i] = arr[i] + 7;
    }
    return new_arr;
}
new_arr = add_sev(arr,new_arr);
console.log(new_arr);

// 10. Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

var arr = [3,1,6,4,2];
function reverse(arr){
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[(arr.length - (i+1))];
        arr[(arr.length-(i+1))] = temp;
    }
    return arr;
}
arr = reverse(arr);
console.log(arr);

// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

var arr = [1,-3,5];
var arr2 = [];
function negative(arr, arr2){
    for (var i = 0; i < arr.length; i++){
        arr2.push(-Math.abs(arr[i]));
    }
    return arr2;
}
arr2 = negative(arr, arr2);
console.log(arr2);

// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

var arr1 = [1, 81, "food", "food", 5, "food"];
var arr2 = ["not food", 53, 6, "jibberish"];
function ahungry(arr){
    count1 = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == "food"){
            count1++;
        }
    }
    if (count1 > 0){
        for (count1; count1 > 0; count1--){
            console.log("yummy");
        }
    }
    else{
        console.log("I'm hungry.");
        }
    return 0;
}
var x = ahungry(arr1);
var y = ahungry(arr2);

// 13. Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

var arr = [true, 42, "Ada", 2, "pizza"];
function stc(arr){
    for (var i = 0; i < arr.length; i++){
        var temp = arr[i];
        for (var j = arr.length - (i+1); j > i ; j--){
            arr[i] = arr[j];
            arr[j] = temp;
            j=0;
        }
    }
    return arr;
}
arr = stc(arr);
console.log(arr);

// 14. Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

var arr = [1,2,3];
var num = 3;
function scale(arr, num){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}
arr = scale(arr, num);
console.log(arr);
