 class Person
{
   private name:string;
    private city:string;
 readonly age:number=10;
    constructor(pname:string,pcity:string){
this.name=pname;
this.city=pcity;

    }

// public constructor(private name:string,private city:string){}

  public  getDetails():string
    {
        return this.name + this.city +this.age;
    }
}
const p:any=new Person("Jack","Chennai");
p.age=11;
console.log(p.getDetails());



