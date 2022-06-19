/*  Create one typescript application which contains one class named as Circlex which will inherits above Circle class.

In CircleX class we have to write one method (Behaviours) as Circumference which will return

circumference of circle.. After designing the class create two objects of that class by providing some hardcoded value.

Call Circumference and Area methods by using both the objects.


*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(No1) {
        this.Radius = No1;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        var Result = 0;
        Result = this.PI * (Math.pow(this.Radius, 2));
        return Result;
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(No1) {
        return _super.call(this, No1) || this;
    }
    CircleX.prototype.Circumference = function () {
        var Result = 0;
        Result = 2 * (this.PI * this.Radius);
        return Result;
    };
    return CircleX;
}(Circle));
function main() {
    var obj = new CircleX(10);
    console.log(obj.Area());
    console.log(obj.Circumference());
    var obj = new CircleX(7);
    console.log(obj.Area());
    console.log(obj.Circumference());
}
main();
