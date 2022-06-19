function DisplayFactors(iNo) {
    var iCnt = 0;
    for (iCnt = 1; iCnt <= iNo / 2; iCnt++) {
        if (iNo % iCnt == 0) {
            console.log(iCnt + "\t");
        }
    }
}
function main() {
    var iValue = 20;
    DisplayFactors(iValue);
}
main();
