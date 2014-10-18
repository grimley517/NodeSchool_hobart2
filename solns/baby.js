// var sumArr = function(myArray){
//     console.log(myArray);
//   var answer = 0;
//   for (var item in myArray){
//       answer += item;
//   }
//   return answer;
// } ;

// console.log(process.argv);
// var total = sumArr(process.argv.slice(2));
// console.log(total);

var list = process.argv.slice(2);
var total = 0
list.forEach(function(element){
    var num = +element;
    total += num;
})
console.log(total);