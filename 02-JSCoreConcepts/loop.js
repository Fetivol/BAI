console.log(2);
console.log(6);
console.log(10);
console.log(14);

var arr = [2, 6, 10, 14];
console.log("array " + arr);
var result = "";
var i = 0;
var x = arr[0];

console.log("While");
while (i < arr.length) {
  x = arr[i];
  i = i + 1;
  console.log(x);
}

var z = 0;
console.log("for #1");
for (var z = 0; z < arr.length; z++) {
  console.log(arr[z]);
}
console.log("for #2");
for (var z = 0; z < arr.length; z++) {
  result = result + " " + arr[z];
  console.log(result);
}
