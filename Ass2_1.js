// Write a program which contains one function named as Maximum. 
// That function accepts array of numbers and returns the largest number from array.
function Maximum(Arr) {
    var iCnt = 0;
    var iMax = 0;
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        if (Arr[iCnt] > iMax) {
            iMax = Arr[iCnt];
        }
    }
    return iMax;
}
function main() {
    var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
    var iRet = 0;
    iRet = Maximum(Arr);
    console.log("Maximum number in the Array is : " + iRet);
}
main();
