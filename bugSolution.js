function foo(a,b){
  a = Number(a);
  b = Number(b);
  return a + b; 
}
console.log(foo(2,3)); //5
console.log(foo(2,"3")); //5
console.log(foo("2",3)); //5
//Alternative using parseFloat
function foo2(a,b){
  return parseFloat(a) + parseFloat(b);
}
console.log(foo2(2,3)); //5
console.log(foo2(2,"3")); //5
console.log(foo2("2",3)); //5