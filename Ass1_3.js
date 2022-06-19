// Write a program which contains one function named as DisplayFactors. 
// That function should accept one number and display factors of that number.
function DisplayFactors(iNo) {
    var iCnt = 0;
    for (iCnt = 1; iCnt <= iNo / 2; iCnt++) {
        if (iNo % iCnt == 0) {
            console.log(iCnt);
        }
    }
}
function main() {
    var iValue = 20;
    DisplayFactors(iValue);
}
main();
