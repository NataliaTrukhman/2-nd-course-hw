//1
let z =0;

while(z<2) {
console.log('Привет');
z++;
}

//2
let i =1;

while(i<=5) {
console.log(i);
i++;
}

//3
let y =7;

while(y<=22) {
console.log(y);
y++;
}
// или 

for (let v =7; v<=22; v++) {
    console.log(v);

}
//4

const salary = {
    'Коля': 200,
    'Вася' : 300,
    "Петя" : 400
   }

   for (let name in salary) {
    console.log (`${name} - зарплата ${salary [name]} долларов`)
   }

//5


let n = 1000; 
let num = 0; 
while (n > 50) { 
    num++; 
    n /= 2; 
    }
console.log(n) ;
console.log(num);

//
let num=0

for(let n=1000 ; n>50 ; n/=2){

num++;
console.log(n);

}

console.log(num);

//

let n = 1000
for( ; n>50 ; n/=2){
num++;
}
console.log(n);
console.log(num);
    

//6
let numFriday = 3;
for (; numFriday <= 31; numFriday += 7) {
    console.log(`Сегодня пятница, ${numFriday} число `);
}



