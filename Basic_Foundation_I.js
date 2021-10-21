//1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function arr() {
    var arr = [];
    for (var i = 1; i <= 255; i++) {
        arr.push(i);
    }
    return arr;
}
a = arr();
console.log(a);

//2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function even() {
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
b = even();
console.log(b);

//3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function odd() {
    var sum = 0;
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 !== 0) {
            sum = sum + i;
        }
    }
    return sum;
}
c = odd();
console.log(c);

//4. Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

var arr1 = [1, 2, 5];
var arr2 = [-5, 2, 5, 12];
function arr_sum(arr) {
    sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
d = arr_sum(arr1);
e = arr_sum(arr2);
console.log(d, e);

//5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

var arr = [3, 3, 5, 7]
var max_num = arr[0];
function max(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max_num) {
            max_num = arr[i];
        }
    }
return max_num;
}
max_num = max(arr);
console.log("Max is: " + max_num);

//6. Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

var arr = [1,3,5,7,20]
var avg = 0;
function average(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    avg = sum / arr.length;
    return avg;
}
avg = average(arr);
console.log("The average of the array is: " + avg);

//7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

var arr1 = [];
for (var i = 1; i <= 50; i++){
    arr1.push(i);
}
var arr2 = [];
function p_odd(arr2){
    for (var i = 1; i < 50; i=i+2){
        if (i%2 !== 0){
            arr2.push(i);
        }
    }
    return arr2;
}
arr2 = p_odd(arr2);
console.log(arr2);

//8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

var y = 3;
var arr = [1,3,5,7];
function how_many(arr, y){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > y){
            count++;
        }
    }
    return count;
}
var x = how_many(arr, y);
console.log(x);

//9. Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

var arr = [1,5,10,-2];
function squares(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] =  arr[i] * arr[i];
    }
    return arr;
}
a = squares(arr);
console.log(a);

//10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

var arr = [1,5,10,-2];
function make_zero(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
arr = make_zero(arr);
console.log(arr);

//11. Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

var arr1 = [1,5,10,-2];
var arr2 = [];
function mma(arr1, arr2){
    var sum = 0;
    var max = arr1[0];
    var min = arr1[0];
    var avg = 0;
    for (var i = 0; i < arr1.length; i++){
        sum = sum + arr1[i];
        if (arr1[i] > max){
            max = arr1[i];
        }
        if (arr1[i] < min){
            min = arr1[i];
        }
    }
    avg = sum / arr1.length;
    arr2.push(max, min, avg);
    return arr2;
}

arr2 = mma(arr1, arr2);
console.log(arr2);

//12. Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

var arr = [1,5,10,-2];
function swap(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr;
}
arr = swap(arr);
console.log(arr);

//13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

var arr = [-1,-3,2];
function num_to_string(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}
arr = num_to_string(arr);
console.log(arr);
