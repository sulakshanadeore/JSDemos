class customerEnitty{
    custid:number;
    custname:string;
    custcity:string;


}

interface ICustomer
{
     NewCustomer(c:customerEnitty):void;
    EditCustomer(id:number,c:customerEnitty):void;
    DeleteCustomer(id:number):void;
    SearchCustomer(id:number):void;
    SearchCustomerByName(name:string):void;
    ShowAll():customerEnitty[]
}

class CustomerService implements ICustomer
{
   
     customers:customerEnitty[]=[
{custid:1,custname:"Amit",custcity:"Pune"},
{custid:2,custname:"Sumit",custcity:"Mumbai"},
{custid:3,custname:"Jack",custcity:"Bangalore"}

    ];

     ShowAll(): customerEnitty[] {
      //  throw new Error("Method not implemented.");
      return this.customers;
    }
    NewCustomer(c: customerEnitty): void {
       // throw new Error("Method not implemented.");
       this.customers.push(c);
    }
    EditCustomer(id: number, c: customerEnitty): void {
        let f:customerEnitty=this.customers.find(c=>c.custid==id);
    console.log(f);    
     f.custname=c.custname;
        f.custcity=c.custcity;

    }
    DeleteCustomer(id: number): void {
        let d=  this.customers.findIndex(c=>c.custid==id);
    this.customers.splice(d,1);
//        throw new Error("Method not implemented.");
    }
    SearchCustomer(id: number): customerEnitty {
    let c:customerEnitty=this.customers.find(c=>c.custid==id);
    return c 
    //throw new Error("Method not implemented.");
    }
    SearchCustomerByName(name: string): customerEnitty {
         let c:customerEnitty=this.customers.find(c=>c.custname==name);
         return c; 
       // throw new Error("Method not implemented.");
    }
    
}


let service:CustomerService=new CustomerService();
let c1:customerEnitty=new customerEnitty();
c1.custid=4;
c1.custname="Hari";
c1.custcity="Pune";
console.log("Adding new customer");
service.NewCustomer(c1);
console.log("Showing all customers");
console.log(service.ShowAll());
console.log("Finding by id");
let obj:customerEnitty =service.SearchCustomer(1);
console.log(obj.custid +   " " + obj.custname  +" " + obj.custcity);