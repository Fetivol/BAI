// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .
var p = (b + c + h) / 2;

let d = () =>
  "Obwód trókąta o bokach" + b + ", " + c + " oraz " + h + " wynosi " + p;
var obwod = Math.sqrt(p * (p - b) * (p - c) * (p - h));

//console.log(obwod);

let a = () =>
  "Pole trókąta o bokach" + b + ", " + c + " oraz " + h + " wynosi " + obwod;

console.log(d());
console.log(a());

Math.sqrt();
