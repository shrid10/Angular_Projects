// Write a typescript program which contains one function named as Area. 
// That function should calculate area of circle. Accept value of radius from user and return its area. 
// Default value of PI should be 3.14 if it is not provided by the caller.

function main() : void
{
    var iValue : number = 5;
    var iRet : number = 0;

    iRet = Area(iValue);
    console.log("Area of the circle with radius " + iValue + " is :- " + iRet);

    //iRet = Area(iValue, 3);
    //console.log("Area of the circle with radius " + iValue + " is :- " + iRet);

    

}

function Area(iRad : number, iPi : number = 3.14) : number
{
    var iAns : number = 0;
    iAns = iPi * (iRad **2)
    return iAns;
}

main();