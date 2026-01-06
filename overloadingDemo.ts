class Supplier
{
search(id:number):string;
search(name:string):string;
search(value:any):string{
if(typeof value==="number")
{
    return "Searching by id" +value;
}
else{
    return "Searching by name" +value;
}
}

}


let s=new Supplier();
console.log(s.search(1));
console.log(s.search("Amit"));