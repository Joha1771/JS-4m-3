// 1

let sonlar = [1, 2, 3, 4, 5, 6]

let aylantirish = sonlar.reverse()
console.log(aylantirish);

// 2

let gap = "hello"

let katta = gap.toUpperCase();

console.log(katta);

// 3

let elementlar = [1, 2, 3]

let qoshish = elementlar.push(4)

console.log(elementlar);

// 4

let sonlar2 = [7, 8, 9]

let uzunligi = sonlar2.length

console.log(uzunligi);

// 5

let gap2 = "Hello World"

let yangi = gap2.split(" ")

let ozgartirish = yangi.splice(1, 1, "Javascript")

console.log(yangi);

// 6

let sonlar3 = [4, 5, 6]

let ozi =sonlar3.shift()

console.log(ozi);


// 7

let vatan = "Uzbekistan"

console.log(vatan.length);


// 8

let boshi = [2, 3, 4]

let javob2 = boshi.unshift(1)

console.log(boshi);


// 9

let name = "JAVASCRIPT"

let javob3 = name.toLowerCase()

console.log(javob3);

// 10

let fruits = ["apple", "banana", "cherry"]

let javob4 = fruits.join()

console.log(javob4);

// 11 

let sonlar4 = [5, 2, 9, 1, 7]

let javob5 = sonlar4.sort()

console.log(javob5);

// 12

let mevalar2 = "apple, banana, cherry"

let javob6 = mevalar2.split(",")

console.log(javob6);

// 13

let sonlar_3 = [1, 2, 3, 4, 5];
let qidirilayotgan = 3;

let natija_3 = sonlar_3.includes(qidirilayotgan);

console.log(natija_3);

// 14

let matn_4 = "JavaScript";

let qism_4 = matn_4.substring(0, 4);

console.log(qism_4);

// 15


let sonlar_5 = [1, 2, 3, 4, 5, 6];

let juftlar_5 = sonlar_5.filter(son => son % 2 === 0);

console.log(juftlar_5);

// 16
let gap6 = "hello world";
let qidiruv6 = "world";

let javob8 = gap6.includes(qidiruv6);

console.log(javob8);

// 17

let sonlar7 = [10, 20, 30, 40];
let qiymat7 = 30;

let javob7 = sonlar7.indexOf(qiymat7);

console.log(javob7);

// 18

let sonlar8 = [1, 2, 3, 4, 5];

let javob10 = sonlar8.slice(1, 3);

console.log(javob10);

// 19

let sonlar9 = [5, 10, 15];

let javob9 = sonlar9.reduce((yigindi, joriy) => yigindi + joriy, 0);

console.log(javob9);

// 20

let matn10 = "123-456-789";

let javob11 = matn10.replaceAll("-", " ");

console.log(javob11);