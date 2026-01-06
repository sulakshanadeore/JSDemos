let t1:[number,boolean,string];
t1=[1,false,"HEllo"];
console.log(t1);
t1.push(2,true,"Greetings");
console.log(t1);
//--------------------------

let t2:readonly[number,boolean,string];
t2=[1,false,"HEllo"];
console.log(t2);
//Not allowed to push
//--------------------------------

let t3:[n1:number,n2:string]=[11,"Jack"];
console.log(t3);
