/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: Add code here
    var x = 10;
    var y = 5;
    
    if isNaN (x | y)
    {
        return (-1)
    }
    else
    {
         x = x + y;
         y = x - y;
         x = x - y;
        
        console.log ("Value of X after swap", x);
         console.log ("Value of Y after swap", y);
        return [x, y];
    }
    
}

// Task 2: Add code here
console.log(sawp(10,5));

module.exports = swap;
