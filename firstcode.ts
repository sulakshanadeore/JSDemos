console.log("Hello World");
let haspermission:boolean=true;//explicit type defining
let i:number=10;
let pi=3.14;
let username="Hari"; //type inference
let arr:number[]=[100,200,30];

const prod={
    prodid:101,
    prodname:"Tea",
    price:10
};

function printProduct()
{
    console.log("Product id: " + prod.prodid);
    console.log("Product Name: " + prod.prodname);
    console.log("Product Price: " + prod.price);
}

function greet(name:string):string{
     console.log(arr[0]);
    console.log(haspermission);
    console.log(i);
    console.log(pi);
    console.log(username);
   
//return `Hello ${name}`;
return "Hello " + name;

}

const msg:string=greet("Jack");
console.log(msg);
printProduct();