// Write a typescript program which contains one function named as ChkString. 
// That function accept one string and check whether that string contains "Marvellous" word or not.
function ChkString(str) {
    if (str.search('Marvellous')) {
        return true;
    }
    else {
        return false;
    }
}
function main() {
    var str = "Pune Kothrud Marvellous Infosystems";
    var bRet = false;
    bRet = ChkString(str);
    if (bRet == true) {
        console.log("String Contains 'Marvellous'");
    }
    else {
        console.log("String does not Contains 'Marvellous'");
    }
}
main();
