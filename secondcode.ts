//Avoid "any"
// function add(a:any,b:any)
// {
//     return a+b;
// }

// let ans:any=add(5,2);//type safety
// console.log(ans);
// ans=add("5",2);
// console.log(ans);
// ans=add(5,"2");
// console.log(ans);
// ans=add(4,456.9);
// console.log(ans);

// let i:number;
// i=100;

//Javascript object notation

// JSON.parse--->converts string to object, use any datatype
// JSON.stringigy----> converts object to string,use string datatype
let data:any=JSON.parse('{"rollno":"10","name":"Ana","marks":"90"}');
const data1=JSON.parse('{"rollno":"10","name":"Ana","marks":"90.90"}');
console.log(data.rollno, data.name,data.marks);
const stringdata=JSON.stringify(data);
console.log(stringdata);


//unknown----it must be type-checked before use
//You cannot access properties on an "unknown" type
//You can't construct or call values of type unknown
let temp:any=1;
temp="HEllo";


//When working with data from external sources like api's etc use "unknown"
//When migrating from javascript to typescript, in a type-safe way
//when you will verifying the data in the function before using it, then use unknown.

let t:unknown=1;
t="Hello";

function processData(value:unknown)
{
    if(typeof value=="string")
    {
            console.log(value.length);
    }
    else if(Array.isArray(value))
    {
        console.log(value.length);
    }
}
processData("Hello");

let arr:number[]=[10,20,3,4,5,12,333,444,4441,11];
processData(arr);


function tothrowerror(message:string):never{

    throw new Error(message);
}

