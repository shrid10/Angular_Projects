// Write a program which contains one function named as Maximum. 
// That function accepts array of numbers and returns the largest number from array.


function Maximum(Arr : number[]) : number
{
    var iCnt : number = 0;
    var iMax : number = 0;
    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        if(Arr[iCnt] > iMax)
        {
            iMax = Arr[iCnt];
        }
    }
    return iMax;
    
}

function main() : void
{
    var Arr : number[] = [23,89,6,29,56,45,77,32];
    var iRet : number = 0;

    iRet = Maximum(Arr);
    console.log("Maximum number in the Array is : " + iRet);

}

main();