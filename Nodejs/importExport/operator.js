const add = (a, b) => {
    return a+b;
}

const sub = (a, b) => {
    return a-b;
}

const mul = (a, b) => {
    return a*b;
}

const name="Anna";

// module.exports.add1 = add;
// module.exports.sub = sub;
module.exports = {add, sub, mul, name};