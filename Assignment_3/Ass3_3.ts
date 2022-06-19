/*  Create one typescript application which contains one class named as Circlex which will inherits above Circle class. 

In CircleX class we have to write one method (Behaviours) as Circumference which will return

circumference of circle.. After designing the class create two objects of that class by providing some hardcoded value. 

Call Circumference and Area methods by using both the objects.


*/

class Circle
{
    public Radius:number;
    public PI:number;

    constructor( No1:number)
    {
        this.Radius = No1;   
        this.PI = 3.14;     
    }


    public Area() 
    {
        var Result:number = 0; 
        Result = this.PI * (this.Radius ** 2);
        return Result;
    }
}

class CircleX extends Circle
{

    constructor( No1:number)
    {
        super(No1);
    }


    public Circumference() 
    {
        var Result:number = 0; 
        Result = 2 * (this.PI * this.Radius);
        return Result;
    }
}



function main() : void
{
    var obj = new CircleX(10);
    console.log(obj.Area());
    console.log(obj.Circumference());

    var obj = new CircleX(7);
    console.log(obj.Area());
    console.log(obj.Circumference());
}

main();


