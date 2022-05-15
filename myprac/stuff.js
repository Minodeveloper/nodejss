var counter = function(arr)
{
    return "There are " + arr.length + " elements in this array.";
};


var adder = function(a,b)
{
    return `sum of two numbers is ${a+b}`
}

var pi = 3.14;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
    counter:counter,
    pi:pi,
    adder:adder
}