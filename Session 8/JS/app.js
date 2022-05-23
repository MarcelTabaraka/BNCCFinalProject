// -----------------------------------------------------------
// ---------------------------test---------------------------
// -----------------------------------------------------------
// console.log(5 + "34");
// console.log(5 - "4");
// console.log(10 % 5);
// console.log(5 % 10);
// console.log("Java" + "Script");
// console.log("5" + "5" + "5");
// console.log(" " + " " + "5");
// console.log(" " + 0);
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);
// console.log("Bob" - "bill");

// console.log(5 >= 1);
// console.log(0 === 1);
// console.log(4 <= 1);
// console.log(1 != 1);
// console.log("A" > "B");
// console.log("B" < "C");
// console.log("a" > "A");
// console.log("b" < "A");
// console.log(true === false);
// console.log(true != true);
// console.log('rabu' > 'selasa')

// https://masteringjs.io/tutorials/fundamentals/compare-strings

// -----------------------------------------------------------
// -----------------primatives & objects----------------------
// -----------------------------------------------------------

// Number & BigInt
// console.log(typeof BigInt('1') === 'bigint');
// console.log(0n == 0);
// console.log(0n === 0);
// console.log(1e9);
// console.log(BigInt(1e9));
// console.log(100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n);
// console.log(BigInt(1e22));
// console.log(25e-2);
// Number di JS sama dengan
// double in Java or C#,
// paling banyak menyimpan 1.8E308

// const foo = null ?? 'default string';
// console.log(foo);

// const baz = 0 ?? 42;
// console.log(baz);

// const nullValue = null;
// const emptyText = "";
// const someNumber = 42;

// const valA = nullValue ?? "default for A";
// const valB = emptyText ?? "default for B";
// const valC = someNumber ?? 0;

// console.log(valA);
// console.log(valB);
// console.log(valC);

// console.log(typeof(nullValue));

// undefined
// let tesUndefined;
// console.log("testUndefined's value is", tesUndefined);


// Symbol
// console.log(Symbol('foo') === Symbol('foo'));

// console.log();

// console.log(null == undefined);
// console.log(null === undefined);

// var x;
// console.log(x);
// function a() {}
// console.log(a());

// var b = null;
// console.log(b);

// Primitives contrast object (array, object, function)
// If it is not a primative, then it is an object

// Primative wrapper object
// var foo = String('hello');

// var bar = 'hello';

// console.log(foo);
// console.log(bar);

// -----------------------------------------------------------
// --------------------------variable-------------------------
// -----------------------------------------------------------

// var
// -----------------------------------------------------------
// var names = ['Ed', 'John', 'Mike'];

// var counter = 10;

// counter = 5;
// // var counter = 5;
// // tidak baik tapi dapat
// console.log(counter);

// PENTING !SCOPING!

// var counter = 5;

// function sayName(){
//     // var name hanya bisa didalam
//     var name = "Ed";
//     console.log(name);
// }

// sayName();
// // tidak bisa
// // console.log(name);

// let
// -----------------------------------------------------------

// Types of Scoping :
// Global
// Functional
// Block

// const list = [1,2,3,4,5];

// for(let i = 0; i < list.length; i++){
//     console.log(i)
// }

// // Jika pakai var, jadi avalaible ke global scope
// // for(var i = 0; i < list.length; i++){
// //     console.log(i)
// // }

// console.log(i);

// https://medium.com/swlh/the-difference-of-var-vs-let-vs-const-in-javascript-abe37e214d66
// --var--
// --1-- globally & locally
// var welcome = 'Welcome to Sweater Season!'
// function fallActivities() {
//     var activities = 'buy a pumpkin and make Jack O Lantern';
//     console.log(`You can ${activities}`);
// }

// console.log(welcome);
// fallActivities();
// // console.log(fallActivities());
// console.log(activities);
// --2-- update
// var welcome = 'Welcome to Sweater Season';
// console.log(welcome);
// welcome = 'Pumpkin Spice Latte! Halloween! Red Leaves!';
// console.log(welcome);
// --3-- redeclare
// var welcome = 'Welcome to Sweater Season';
// console.log(welcome);
// var welcome = 'Pumpkin Spice Latte! Halloween! Red Leaves!';
// console.log(welcome);
// --4-- hoisting
// function fallActivities() {
//     console.log(activities)
//     var activities = 'buy a pumpkin and make Jack O Lantern';
//     console.log(`You can ${activities}.`);
// }
// fallActivities();

// --let--
// --1-- locally
// function greetings() {
//     let hello = 'Hello Fall!';
//     console.log(hello); // Hello Fall!
// }
// greetings();
// console.log(hello);
// --2-- update
// let welcome = 'Welcome to Sweater Season';
// console.log(welcome);
// welcome = 'Pumpkin Spice Latte! Halloween! Red Leaves!';
// console.log(welcome);
// --3-- redeclare
// let welcome = 'Welcome to Sweater Season';
// let welcome = 'Pumpkin Spice Latte! Halloween! Red Leaves!';
// --4-- different scope
// let welcome = 'Welcome to Sweater Season';
// function fall() {
//   let welcome = 'Pumpkin Spice Latte! Halloween! Red Leaves!';
//   console.log(welcome);
// }
// fall();
// console.log(welcome);
// --5-- hoisting
// function fallActivities() {
//     console.log(activities)
//     let activities = 'buy a pumpkin and make Jack O Lantern';
//     console.log(`You can ${activities}.`);
// };

// function-scoped vs block-scoped
// fallActivities();
// function fallActivities(activity) {
//     for (var i = 0; i < activity.length; i++) {
//         var name = activity[i]
//     }
//     console.log(i);
//     console.log(name);
// }
// activity = ['hiking', 'Halloween', 'Pumpkin Patch', 'Read Snoopy Fall Comics', 'Jack O Lantern'];
// fallActivities(activity);

// function fallActivities(activity) {
//     for (let i = 0; i < activity.length; i++) {
//         let name = activity[i]
//     }
//     console.log(i) // ReferenceError: i is not defined
//     console.log(name)
// }
// activity = ['hiking', 'Halloween', 'Pumpkin Patch', 'Read Snoopy Fall Comics', 'Jack O Lantern'];
// fallActivities(activity);

// --const--
// same like let only 1 difference
// cannot be updated
// let welcome = 'Welcome to Sweater Season'
// const snoopy = 'Snoopy looks so cute with sweaters!!'
// welcome = 'Pumpkin Spice Latte! Halloween! Red Leaves!'
// snoopy = 'Snoopy looks ugly in sweaters!';
// console.log(snoopy);
// const buah = {buahEnak: 'apel'}
// console.log(buah);
// buah.buahEnak = 'jeruk'
// console.log(buah);

// -----------------------------------------------------------
// --------------------truthy & fals--------------------------
// -----------------------------------------------------------

// console.log(true);
// console.log(!! {});
// console.log(!! []);
// // A string that has lenght is true
// console.log(!! '');
// console.log(!! 'hi');
// // Only 0 will result false
// console.log(!! 0);
// console.log(!! -1);

// -----------------------------------------------------------
// ----------------------operators---------------------------
// -----------------------------------------------------------

// var testBoolean = !!!!!!!true;
// console.log(testBoolean);
// // most operator works the same as c/c++

// var testEqualTo = '23' === 23;
// console.log(testEqualTo);

// -----------------------------------------------------------
// ------------------------ternary----------------------------
// -----------------------------------------------------------

// let age = 20;
// let result = (age >= 21) ? "You can drink alcohol" : "You can't drink alcohol";
// console.log(result);

// -----------------------------------------------------------
// -------------------------switch----------------------------
// -----------------------------------------------------------

// var day;

// switch(new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
// }

// console.log(day);


// var testSwitch = 'dolphin';

// switch (testSwitch) {
//     case 'shark':
//         console.log('🦈');
//         break;
//     case 'whale':
//         console.log('🐋');
//         break;
//     case 'dolphin':
//         console.log('🐬');
//         break;
// }

// -----------------------------------------------------------
// ------------------------try & catch------------------------
// -----------------------------------------------------------

// let angka = 20;

// try {
//     angka;
//     // z;
//     console.log('works 🔥')
// } catch (error) {
//     console.log('error 💩')
// }

// let z = 11;

// try {
//     throw new Error();
//     console.log('works 🔥')
// } catch (error) {
//     console.log('error 💩')
// }

// try {
//     try {
//         throw new Error('oops');
//     } finally {
//         console.log('finally');
//     }
// } catch (ex) {
//     console.error('outer', ex.message);
// }

// -----------------------------------------------------------
// ---------------------var, let, & const---------------------
// -----------------------------------------------------------

// 1
// var testVar;
// testVar = 'coba var';
// testVar = 'coba ubah var'

// console.log(testVar);

// 2
// var g = 'global';

// function app(){
//     // // var l = 'local'
//     // // kalo begini bisa
//     // l = 'local'
//     console.log(g);
// }
// // console.log(l);

// app();

// 3

// var
// console.log(j);
// for(var j=0;j<5;j++){
//     console.log(j);
// }
// console.log(j);

// app();
// function app(){
//     for(var j=0;j<5;j++){
//         console.log(j);
//     }
// }
// app();

// let
// console.log(i);
// for(let i=0;i<5;i++){
//     console.log(i);
// }
// console.log(i);

// app();
// function app(){
//     for(let i=0;i<5;i++){
//         console.log(i);
//     }
//     // console.log(i);
// }
// app();

// Salah satu hal yang aneh di JS
// var => function-scoped
// ES6 (2015): let and const => block-scoped
// seperti if dan for

// if(true){
//     var testVar = 'Bisa';
// }
// console.log(testVar);

// if(true){
//     var tesLet = 'Tidak';
//     console.log(tesLet);
// }
// console.log(testLet);

// -----------------------------------------------------------
// ---------------------------array---------------------------
// -----------------------------------------------------------
// let anjing = ['corgi', 'chihuahua', 'golden'];
// console.log(anjing[1]);

// let functionAnjing = [function dog(){
//     console.log('corgi');
// }]
// console.log(functionAnjing);

// // tidak disarankan
// let arrayCampur = [1, 'Yosua', 2, 'Gunawan'];
// console.log(arrayCampur[3]);
// // buktikan seperti yang tambah string dan angka atau kurang
// console.log(typeof(arrayCampur[2]));

// let arrayDalamArray = [['corgi', 'chihuahua', 'golden']];
// console.log(arrayDalamArray[0][2]);

// let minuman = ['fanta', 'sprite', 'cola'];
// minuman.shift();
// console.log(minuman);
// minuman.sort();
// console.log(minuman);

// -----------------------------------------------------------
// ---------------------------object--------------------------
// -----------------------------------------------------------
// let yosua = {
//     nama: 'Yosua',
//     umur: 20,
//     binus: 'B24'
// };
// console.log(yosua.umur);
// console.log(typeof(yosua.umur));

// yosua.Warna = 'Ungu';
// console.log(yosua);

// let dataPribadi = {
//     deva : {
//         nama: 'Deva',
//         umur: 20,
//         binus: 'B24'
//     },
//     aurel : {
//         nama: 'aurel',
//         umur: 21,
//         binus: 'B23'
//     },
//     gerarda : {
//         nama: 'Gerarda',
//         umur: 22,
//         binus: 'B22'
//     }
// };
// console.log(dataPribadi);

// console.log(dataPribadi.aurel.binus);
// console.log(typeof(dataPribadi));

// -----------------------------------------------------------
// ---------------------arrays of object----------------------
// ---------------------objects of array----------------------
// -----------------------------------------------------------

// let fire = {
//     damage: 55,
//     weak: 'water',
//     strong: 'air',
//     stage: ['fira', 'firaga', 'hell']
// }
// console.log(fire.stage[2]);

// let water = {
//     damage: 45,
//     weak: 'earth',
//     strong: 'fire',
//     stage: [
//         'blizzard',
//         'blizzaga',
//         ['hailstrom', 'icehail', 'crushing']
//     ]
// }

// console.log(water.stage[2][1]);

// let valorant = [
//     {
//         name: 'viper',
//         type: 'controller'
//     },
//     {
//         name: 'killjoy',
//         type: 'sentinel'
//     },
//     {
//         name: 'jett',
//         type: 'duelist'
//     }
// ]
// console.log(valorant[1].name);

// var murid = [
//     { 'name': 'abc', id: 1, 'subject': [{ 'math': 90, 'english': 80 }] },
//     { 'name': 'abc1', id: 2, 'subject': [{ 'math': 90, 'english': 80 }] },
//     { 'name': 'abc2', id: 3, 'subject': [{ 'math': 90, 'english': 80 }] }
// ];
// console.log(murid[1].subject[0].math);




// let maxDate = new Date(8640000000000000);
// let minDate = new Date(-8640000000000000);

// console.log(new Date(maxDate.getTime()).toString());
// console.log(new Date(maxDate.getTime() - 1).toString());
// console.log(new Date(maxDate.getTime() + 1).toString());

// console.log(new Date(minDate.getTime()).toString());
// console.log(new Date(minDate.getTime() + 1).toString());
// console.log(new Date(minDate.getTime() - 1).toString());

// -----------------------------------------------------------
// ----------------------for of & for in----------------------
// -----------------------------------------------------------

// for of
// Iterating - arrays, strings
// let fruit = [
//     "apple",
//     "banana",
//     "orange",
//     "lychee",
//     "mango"
// ];

// for(item of fruit){
//     console.log(item);
//     console.log(typeof(item));
// }

// for(item of 'fruit'){
//     console.log(item);
// }

// for in
// enumerating - objects
// let vegetable = {
//     spinach: 8,
//     tomato: 7,
//     corn: 1,
//     celery: 5,
//     potato: 2
// };

// for(item in vegetable){
//     console.log(item);
//     console.log(typeof(item));
// }

// for(item in 'vegetable'){
//     console.log(item);
// }

// tapi in bisa untuk array
// for(item in fruit){
//     console.log(item);
//     console.log(typeof(item));
// }

// sama dengan
// fruit = {
//     0:'apple',
//     1:'banana'
//     2:'orange',
//     3:'lychee',
//     4:'mango',
// }

// -----------------------------------------------------------
// -------------------------function--------------------------
// -----------------------------------------------------------

// function test(num = 1) {
//     console.log(typeof num)
// }

// console.log(test());
// console.log(test(undefined));
// console.log(test(''));
// console.log(test(null));
// test();


// Traditional Anonymous Function
// function yosua() {
//     console.log('Saya Yosua');
// }

// yosua();

// const deva = function () {
//     console.log('Saya Deva');
// }

// deva();

// const name = (nama) => {
//     console.log(`Saya ${nama}`);
// };

// name(`jessica`);

// const film = films => {
//     console.log(`Saya suka ${films}`);
// };

// film(`Avenger`);

// const hate = (benci, level) =>
//     console.log(`Saya benci ${benci} ${level}`);

// hate(`sayur`, `banget`);

// function sum(a, b) {
//     return a + b
// }

// let sum2 = (a, b) => {
//     return a + b
// }

// let sum3 = (a, b) => a + b;

// function isPositive(number) {
//     return number >= 0
// }

// let isPositive2 = number => number >= 0

// function randomNumber() {
//     return Math.random
// }

// let randomNumber2 = () => Math.random