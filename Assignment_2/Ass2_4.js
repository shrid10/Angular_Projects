// Write a program which contains one arrow function named as ChkArmstrong. 
// That function accepts one numbers and check whether number is Armstrong number or not.
function ChkArmstrong(iNo) {
    var iNotemp = 0, idigCount = 0, iDigit = 0, isum = 0, i = 0, iMult = 0;
    if (iNo < 0) {
        iNo = -iNo;
    }
    iNotemp = iNo;
    while (iNo > 0) {
        iNo = iNo / 10;
        idigCount += 1;
    }
    iNo = iNotemp;
    while (iNo > 0) {
        iMult = 1;
        iDigit = iNo % 10;
        for (i = 1; i <= idigCount; i++) {
            iMult = iMult * iDigit;
        }
        isum = isum + iMult;
        iNo = iNo / 10;
    }
    if (isum == iNotemp) {
        return true;
    }
    else {
        return false;
    }
}
function main() {
    var iValue = 370;
    var bRet = false;
    bRet = ChkArmstrong(iValue);
    if (bRet == false) {
        console.log("It is not a Armstrong number");
    }
    else {
        console.log("It is a Armstrong number");
    }
}
main();
