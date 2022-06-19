
function ChkPrime(iNo : number) : boolean
{
    var iCnt : number = 0;
    for(iCnt = 2; iCnt <= iNo/2; iCnt++)
    {
        if(iNo % iCnt == 0)
        {
            return false;
        }
        if(iCnt >= (iNo/2) + 1)
        {
            return true;
        }
    }
}

function main() : void
{
    var iValue : number = 10;
    var bRet : boolean = false;

    bRet =  ChkPrime(iValue);

    if(bRet == false)
    {
        console.log("It is not a prime number");
    }
    else
    {
        console.log("It is a prime number");
    }

}

main();