 class Products
{

    prodid:number;
    prodname:String;
    price:number;


    constructor(pid:number,pname:string,unitprice:number)
    {

        this.prodid=pid;
        this.prodname=pname;
        this.price=unitprice;
    }


    


}
class ElectronicProducts extends Products{
private vname:string;
// private suppliername:string;
// private suppcity:string;
// private suppmobileno:number;
// private supplierno:number;

constructor(pid:number,pname:string,unitprice:number, vendorname:string){
        super(pid,pname,unitprice);
        this.vname=vendorname;
    }
    acceptData(a:string,b:string):string;
    acceptData(a:number,b:number):number;

    acceptData(a:any,b:any):any{
       let a1:any;
       let b1:any;
        if(typeof a==="number" && typeof b==="number")
        {
         a1=a.toString();
        b1=b.toString();
        }
        else
        {
            a1=a.toString();
            b1=b.toString();
        }


        return a1 + "  "  +b1;
    }
    printAllDetails():void{

        console.log(this.prodid);
        console.log(this.prodname);
        console.log(this.price);
        console.log(this.vname);

    }

}

let ep=new ElectronicProducts(1,"Laptop",50000,"Dell");
ep.printAllDetails();
console.log(ep.acceptData("MySupplierName","Pune"));
console.log(ep.acceptData(1234567890,1));