function rollTwenty() {
    return Math.ceil(Math.random() * 20)

}

function name() {
    var rolls = 0
    var min = 21
    var max = 0
    var sum = 0
    var prev = 21
    var curr = 0

    while (prev != curr) {
        prev = curr
        curr = rollTwenty()
        rolls++
        if (curr < min) {
            min = curr
        }
        if (curr > max) {
            max = curr
        }
        sum += curr
    }
    console.log(rolls)
    console.log(min)
    console.log(max)
    console.log(sum / rolls)
}

var a = name();
