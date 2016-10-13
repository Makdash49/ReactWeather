var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe("Mark"));

// var person = {
//   name: 'Andrew',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();


// Challenge Area

function add (a,b){
  return a + b;
}

// addStatement
var addStatement = (a,b) => {
  return a + b
};

//addExpression
var addExpression = (a,b) => a + b;


console.log(add(1,3));
console.log(add(9, 0));

console.log(addStatement(3,7));
console.log(addStatement(4,1));

console.log(addExpression(2,4));
console.log(addExpression(1,5));
