
let num = [1, 2, 3, 4, 5];
function add(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}

let result = add(num);
console.log(result);