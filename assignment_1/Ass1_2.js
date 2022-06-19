// Write a typescript program which contains one function named as Area. 
// That function should calculate area of circle. Accept value of radius from user and return its area. 
// Default value of PI should be 3.14 if it is not provided by the caller.
function main() {
    var iValue = 5;
    var iRet = 0;
    iRet = Area(iValue);
    console.log("Area of the circle with radius " + iValue + " is :- " + iRet);
    //iRet = Area(iValue, 3);
    //console.log("Area of the circle with radius " + iValue + " is :- " + iRet);
}
function Area(iRad, iPi) {
    if (iPi === void 0) { iPi = 3.14; }
    var iAns = 0;
    iAns = iPi * (Math.pow(iRad, 2));
    return iAns;
}
main();
