//Print odds 1-20

for (var i = 1; i < 20; i++){
    if (i % 2 !== 0){
        console.log(i);
    }
}

//Sum and Print 1-5

var sum = 0;
for (var i = 1; i < 6; i++){
    console.log('Num: '+ i);
    sum = sum + i;
    console.log('Sum: '+ sum);
}
