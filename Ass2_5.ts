// Write a typescript program which contains one function named as ChkString. 
// That function accept one string and check whether that string contains "Marvellous" word or not.


function ChkString(str : string) : boolean
{
    if(str.search('Marvellous'))
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
    var str : string = "Pune Kothrud Marvellous Infosystems";
    var bRet : boolean = false;

    bRet = ChkString(str);

    if(bRet == true)
    {
        console.log("String Contains 'Marvellous'");
    }
    else
    {
        console.log("String does not Contains 'Marvellous'");
    }

}

main();