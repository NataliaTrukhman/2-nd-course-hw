//1
// function getResult(arr, func) {
//     return Math.round(func(arr));
//   }
  
//   let mult = (arr) => arr.reduce((a, b) => a * b);
//   let sum = (arr) => arr.reduce((a, b) => a + b);
  
// console.log(getResult ([3, 4, 1, 9], mult));

//2

const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

function compareUser(a, b) { 
	if (a.age > b.age) return 1;
	if (a.age < b.age) return -1;
	return 0;
}
  
users.sort(compareUser);   

console.log(users); //? сделала на примере в уроке, не понимаю как тут еще включить функцию getSortedArrayObj(users)


