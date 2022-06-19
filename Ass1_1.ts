
function main() : void
{
    var no1 : number = 23;
    var no2 : number = 89;
    var no3 : number = 6;
    var iRet : number = 0;

    iRet = Maximum(no1, no2, no3);
    console.log("Maximum number among parameters is : " + iRet);

    

}

function Maximum(Value1 : number, Value2 : number, Value3 : number) : number
{
    if(Value1 > Value2 && Value1 > Value3)
    {
        return Value1;
    }
    else if(Value2 > Value1 && Value2 > Value3)
    {
        return Value2;
    }
    else
    {
        return Value3;
    }
    
}

main();