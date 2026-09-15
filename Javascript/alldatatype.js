let c=true;// node fill name
console.log("Data type of c",typeof c);

let d=Number.MAX_SAFE_INTEGER;
console.log("max limit of number",d);
console.log(d+1);

let a=BigInt(d);
console.log(a);//add n at last
let b=BigInt(1000);
let e=a+b;
console.log(e);

let x;
console.log(typeof x);

let y=null;
console.log(typeof y);

let h=Symbol();
let h1=Symbol();
console.log("compare",h===h1);
