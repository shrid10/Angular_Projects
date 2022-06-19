//  Write a typescript program which contains one function named as Fibonacci. 
// That function accept one number from user and print Fibonacci series till that number.
function Fibonacci(iNo) {
    var nextTerm = 0;
    var f1 = 0;
    var f2 = 1;
    console.log(f2);
    nextTerm = f1 + f2;
    while (nextTerm <= iNo) {
        console.log(nextTerm);
        f1 = f2;
        f2 = nextTerm;
        nextTerm = f1 + f2;
    }
}
function main() {
    var iValue = 21;
    Fibonacci(iValue);
}
main();
