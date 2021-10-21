function coin_change(amount) {
    var x = 0, arr = [100, 50, 25, 10, 5, 1], name = ["Dollars: ", "Halves: ", "Quarters: ", "Dimes: ", "Nickels: ", "Pennies: "], give = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < arr.length; i++) {

        while (x < amount) {
            if (x + arr[i] <= amount) {
                give[i] += 1;
            }
            x += arr[i];
        }
        if (i < arr.length - 1) {
            x -= arr[i];
        }
        console.log(name[i] + give[i]);
    }
}
var a = coin_change(244);
