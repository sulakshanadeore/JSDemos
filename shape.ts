
interface Circle{
    kind:"circle",
    radius:number;
}

interface Square{
    kind:"square",
    sidelength:number;
}
interface Triangle{
    kind:"triangle",
    width:number,
    height:number

}


type Shape=Circle | Square | Triangle;


function getArea(shape:Shape):number
{
    switch(shape.kind)
    {
case "circle":
    return Math.PI * shape.radius * shape.radius;
case "square":
    return shape.sidelength**2;
    case "triangle":
        return 0.5*shape.width *shape.height;
   default:
    throw new Error("Invalid");
    // const _exhaustiveCheck:never=shape;
    // return _exhaustiveCheck; 

    }

}
const c:Circle={kind:"circle",radius:4};
const s:Square={kind:"square",sidelength:4};
const t:Triangle={kind:"triangle",width:4,height:5};

console.log("Circle Area= " + getArea(c));
console.log("Shape Area= " + getArea(s));
console.log("Triangle shape area= " + getArea(t));

let age:number|undefined=undefined;//varibale declared but not assigned a value,either number or undefined
let email:string|null=null;//no value no object

console.log(age);
console.log(email);


interface User{
id:number;
weburl?:string;

}
let u:User={id:1};
let u1:User={id:2,weburl:"www.abc.com"};

function f1(price?:number,coupon?:string)
{
    console.log("price =" + price)
    console.log("Coupon=" + coupon);
}

f1(10);
f1();