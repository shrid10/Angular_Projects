function main() {
    var no1 = 23;
    var no2 = 89;
    var no3 = 6;
    var iRet = 0;
    iRet = Maximum(no1, no2, no3);
    console.log("Maximum number among parameters is : " + iRet);
}
function Maximum(Value1, Value2, Value3) {
    if (Value1 > Value2 && Value1 > Value3) {
        return Value1;
    }
    else if (Value2 > Value1 && Value2 > Value3) {
        return Value2;
    }
    else {
        return Value3;
    }
}
main();
