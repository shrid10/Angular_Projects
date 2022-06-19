// Write a program which contains one function named as Summation. 
// That function accepts array of numbers and returns the summation of each number from array
function Summation(Arr) {
    var iCnt = 0;
    var iSum = 0;
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        iSum += Arr[iCnt];
    }
    return iSum;
}
function main() {
    var Arr = [23, 6, 7, 4, 5, 7];
    var iRet = 0;
    iRet = Summation(Arr);
    console.log("Addition is : " + iRet);
}
main();
