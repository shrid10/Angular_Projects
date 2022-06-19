// Write a program which contains one function named as DisplayFactors. 
// That function should accept one number and display factors of that number.


function DisplayFactors(iNo : number) : void
{
    var iCnt : number = 0;
    for(iCnt = 1; iCnt <= iNo/2; iCnt++)
    {
        if(iNo % iCnt == 0)
        {
            console.log(iCnt);
        }
    }
}

function main() : void
{
    var iValue : number = 20;

    DisplayFactors(iValue);

}

main();