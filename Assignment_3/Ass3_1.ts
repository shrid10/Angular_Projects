/* Create one typescript application which contains one class named as Arithmetic. Arithmetic class contains three 

characteristics (Class data members) as Number1, Number2.. Create one parametrised constructor

which accept two values and assign it to Number1 and Number2.

In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction, Multiplication and Division.

Addition method will add Number1, Number2 & return result. Subtraction method will subtract Number1, Number2 & return result.

Multiplication method will multiply Number1, Number2 & return result. Division method will divide Number1, Number2 & return result.

After designing the class create two objects of that class by providing some hardcoded value.

Call all the methods by using both the objects.

*/

class Arithmetic
{
    public Number1:number;
    public Nunber2:number;

    constructor( No1:number, No2:number)
    {
        this.Number1 = No1;
        this.Nunber2 = No2;        
    }


    public Addition() 
    {
        var Result:number = 0; 
        Result = this.Number1 + this.Nunber2;
        return Result;
    }


    public Substraction() 
    {
        var Result:number = 0; 
        Result = this.Number1 - this.Nunber2;
        return Result;
    }


    public Multiplication() 
    {
        var Result:number = 0; 
        Result = this.Number1 * this.Nunber2;
        return Result;
    }

    public Division()
    {
        var Result:number = 0; 
        if(this.Nunber2 == 0)
        {
            return 0;
        }
        Result = this.Number1 / this.Nunber2;
        return Result;
    }

    
}

function main() : void
{
    var obj = new Arithmetic(10, 11);
    console.log(obj.Addition());
    console.log(obj.Substraction());
    console.log(obj.Multiplication());
    console.log(obj.Division());

    var obj = new Arithmetic(10, 7);
    console.log(obj.Addition());
    console.log(obj.Substraction());
    console.log(obj.Multiplication());
    console.log(obj.Division());

}

main();


