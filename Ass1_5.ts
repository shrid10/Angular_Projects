//  Write a typescript program which contains one function named as Fibonacci. 
// That function accept one number from user and print Fibonacci series till that number.

function Fibonacci(iNo : number) : void
{
    var nextTerm : number = 0;
    var f1 : number = 0;
    var f2 : number = 1;

    console.log(f2);

    nextTerm = f1 + f2;

    while (nextTerm <= iNo) 
    {
        console.log(nextTerm);
        f1 = f2;
        f2 = nextTerm;
        nextTerm = f1 + f2;
    }

}

function main() : void
{
    var iValue : number = 21;

    Fibonacci(iValue);

}

main();