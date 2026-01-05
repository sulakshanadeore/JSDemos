

class Payment
{
    pay(amount)
    {
        console.log("Processing payment for Rs. " + amount);
    }
}

class CardPayment extends Payment
{


    pay(amount)
    {
     super.pay(amount);
        console.log("Paid Rs." + amount + " by card");
    }
}

class Account{
    #acctype="";
    #acno=0;
#balance=0; //private field/variable(#)


constructor(accno,bal,accounttype)
{
    this.accountNo=accno;
    this.accountbal=bal;
   
    this.AccountType=accounttype;
}

set accountbal(value){
    this.#balance=value;
}

get accountbal()
{
    return this.#balance;
}

get AccountType()
{

    return this.#acctype;
}
set AccountType(value)
{
    this.#acctype=value;
}

set accountNo(value)
{
    this.#acno=value;

}

get accountNo()
{
    return this.#acno;
}


deposit(amount)
{
    if(amount>0)
    this.#balance=this.#balance+ amount;
console.log("Deposited Rs. "  + amount + "to " + this.#acctype);
}
showBalance(){
    console.log("AccountNo=  " + this.accountNo)
    console.log("Balance=  " + this.accountbal)
    console.log("type=  " + this.AccountType)
}

}

class Customer
{
    #custid;
    #custname;
    #cust_actype;
    #account;
    #accno;
    

    // constructor(custid,custname,custactype)
    // {
    //     this.#custid=custid;
    //     this.#custname=custname;
    //     this.#cust_actype=new Account(custactype)
    // }

    constructor(custid,custname,account)
    {
       this.#custid=custid;
         this.#custname=custname;
         this.#account=account;
    }
    showAllCustDetails()
    {

        console.log(this.#custid);
        console.log(this.#custname);
        console.log(this.#account);

    
       
    
      
    }

   
    
    get Custid()
    {
        return this.#custid;
    }
    set Custid(value)
    {
        if(value>0)
        this.#custid=value;
    }


    get CustName()
    {
return this.#custname;

    }

    set CustName(value)
    {
        this.#custname=value;
    }
}

 function CreateCustomer()
{
var custid=document.getElementById("custid").value;
var custname=document.getElementById("custname").value;
var acno=document.getElementById("acno").value;
var bal=document.getElementById("bal").value;
var accounttype=document.getElementById("accounttype").value;

let account=new Account(acno,bal,accounttype);

 let c=new Customer(custid,custname,account);
 c.showAllCustDetails();
        // c.Custid=101;
        // c.CustName="Gauri";
        // console.log(c.Custid);
        // console.log(c.CustName);

}