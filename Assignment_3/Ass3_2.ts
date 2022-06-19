/* Create one typescript application which contains one class named as Circle.

Circle class contains two characteristics (Class data members) as Radius, PI.

Create one parametrised constructor which accept one value and assign it to Radius. Value of

PI member is set to 3.14. In Circle class we have to one method (Behaviours) as Area which will return area of Circle. 

After designing the class create two objects of that class by providing some hardcoded value. 

Call the method Area by using both the objects.

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

function main() : void
{
    var obj = new Circle(10);
    console.log(obj.Area());


    var obj = new Circle(7);
    console.log(obj.Area());


}

main();

