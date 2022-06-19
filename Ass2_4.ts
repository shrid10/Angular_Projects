// Write a program which contains one arrow function named as ChkArmstrong. 
// That function accepts one numbers and check whether number is Armstrong number or not.

function ChkArmstrong(iNo : number) : boolean
{
    var iNotemp:number = 0, idigCount:number = 0, iDigit:number = 0, isum:number = 0, i:number = 0, iMult:number = 0;

    if(iNo < 0) 
    {
        iNo = -iNo;
    }

    iNotemp = iNo;

    while (iNo > 0) 
    {
        iNo = iNo / 10;
        
        idigCount += 1;
    }
    
    iNo = iNotemp;


    while (iNo > 0) 
    {
        iMult = 1;
        iDigit = iNo % 10;

        for(i = 1; i <= idigCount; i++)
        {
            iMult = iMult * iDigit;
        }

        isum = isum + iMult;
        iNo = iNo / 10;
        
    }

    if(isum == iNotemp)
    {
        return true;
    }
    else
    {
        return false;
    }
    
 
}

function main() : void
{
    var iValue : number = 370;
    var bRet : boolean = false;

    bRet = ChkArmstrong(iValue);

    if(bRet == false)
    {
        console.log("It is not a Armstrong number");
    }
    else
    {
        console.log("It is a Armstrong number");
    }
}

main();