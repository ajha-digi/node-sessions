const name = "ajeet";
function sum (a,b) {
    return a+b
}

function mul (a,b) {
    return a*b
}

// console.log(sum(3,2));
// module.exports = sum;
// module.exports = name;

module.exports = {
    name,
    sum,
    mul
}