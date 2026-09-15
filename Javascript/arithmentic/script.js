let a=prompt("Enter your first number");
let b=prompt("Enter Your second number");

let c=Number(a)+Number(b);
document.write("sum=",c);

let d=Number(a)-Number(b);
document.write("<br>subtraction=",d);

let e=Number(a)*Number(b);
document.write("<br>Multiplition=",e);

let f=Number(a)/Number(b);
document.write("<br>Division=",f);

let g=Number(a)%Number(b);
document.write("<br>Modulus=",g);

let h=Number(a)**Number(b);
document.write("<br>Exponent=",h);

let i=++a;
document.write("<br> PostIncreamnet=",i);

let j=--a;
document.write("<br> Postdecreament=",j);

a += 5;
document.write("<br>After a += 5: " + a);
