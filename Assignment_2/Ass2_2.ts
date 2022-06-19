// Write a program which contains one function named as Summation. 
// That function accepts array of numbers and returns the summation of each number from array

function Summation(Arr : number[]) : number
{
    var iCnt : number = 0;
    var iSum : number = 0;
    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        iSum += Arr[iCnt];
    }
    return iSum;
    
}

function main() : void
{
    var Arr : number[] = [23,6,7,4,5,7];
    var iRet : number = 0;

    iRet = Summation(Arr);
    console.log("Addition is : " + iRet);

}

main();