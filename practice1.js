// variable
// ভেরিয়েবলস্ হচ্ছে আমাদের প্রগ্রামে ব্যাবহার করা যাবে এমন মেমরি ।

var number = 1;

// variable nameing convention 

// ১) ভেরিয়েবল লেখার সময় সাদা স্পেস থাকতে পারবে না যেমন :
var first Name = "Jahidul Islam"


// 2) ভেরিয়েবল লেখার শুরুতে কোন নাম্বার  থাকতে পারবে না যেমন : 

var 2firstName = "jahid";
console.log(2firstName);
 

// type of variable

// জাভাস্ক্রিপ্টে সাধারনত 4 ধরনের টাইপের ভেরিয়েবল তৈরি করা হয় নিচে সেগুলো লেখা হল :


// ১) Integer: যেকোনো পূর্ণ সংখ্যাই হল  Integer সেটা ধনাত্মক কিংবা ঋণাত্মক  যেমন  ঃ ১২, ৩, -১১।

// intiger
var age = 24;

// ২) String: যেকোনো টেক্সটই হল  String ডাটা টাইপ  এবং স্ট্রিং ডাটা টাইপ অবশই  ডাবল বা সিঙ্গেল কোটেশনের(যেমন "jahid" বা 'hello') ভিতর রাখতে হয় এবং যেকোনো একটা কোটেশন ব্যাবহার করতে হবে ।

// string 
var name = 'jahid';

// 3) float: যেকোনো দশমিক সংখ্যাই হল float সংখ্যা সেটা ধনাত্মক কিংবা ঋণাত্মক  যেমন  ঃ ১২.২ , -৭.২ ।

// booler
var ishuman = true;  

// 4) Boolean: এই ডেটা টাইপে সাধারনত ২ ধরনের মান থাকতে পারে true and false ।

// variable nameing
var firstNumber = 12;


// typeof : কোনটা কোন টাইপের ভেরিয়েবল সেটা দেখার জন্য আমরা typeof  ব্যাবহার করবো যেমন :

var number1 = "hello";
console.log(typeof  number1);


// mathamatical oparation 
// additional oparation 
// Additional Oparation ( + ) : দুটি অপারেন্ডকে যোগ করবে যেমন  ঃ 

var number1 = 12;
var number2 = 10;
var totalNumber = number1 + number2;
console.log(totalNumber);

// substaction 
// Substaction Oparation ( - ) : দুটি অপারেন্ডকে বিয়োগ করবে যেমন  ঃ 

var number1 = 12;
var number2 = 10;
var totalNumber = number1 - number2;
console.log(totalNumber);


// devisional Oparetor 
// devisional Oparetor ( / ) :  দুটি অপারেন্ডকে ভাগ করবে যেমন ঃ

var number1 = 12;
var number2 = 4;
var totalNumber = number1 / number2;
console.log(totalNumber);
 
// Multiplication 
// Multiplication Oparetor ( * ) : দুটি অপারেন্ডকে গুন করবে যেমন ঃ

var number1 = 12;
var number2 = 10;
var totalNumber = number1 * number2;
console.log(totalNumber);


// modulas Oparation : দুটি অপারেন্ডকে ভাগশেষ দেখার জন্য ব্যাবহার করা হয় যেমন ঃ 


var number1 = 17;
var number2 = 5;
var totalNumber = number1 % number2;
console.log(totalNumber);


// Increment Oparation ( ++ ) : integer এর মান ১ করে বাড়াবে যেমন ঃ

var number1 = 17;
number1++;
console.log(number1); 


// Decrement Oparation ( -- ) : integer এর মান ১ করে কমাবে	যেমন  ঃ

var number1 = 17;
number1++;
console.log(number1); 


// String concataion  
// String concataion :  দুটি স্ট্রিংকে একত্রে জোড়া দিবে যেমন ঃ 
var firstName = 'Jahidul';
var lastName = 'Islam';
var fullName = firstName + " " + lastName;
console.log(fullName);




//  type conversation 

// string to integer conversation : কোনো নাম্বার যদি স্ট্রিং আকারে থাকে আর যদি সেটাকে Integer নাম্বারে কনভার্ট করতে হয় তাহলে parseInt ব্যাবহার করা হয় । 

var pen = '2';
var pencil = '2.4';
var total = parseInt(pen) + parseInt(pencil);
console.log(total);

// string to float conversation : কোনো নাম্বার যদি স্ট্রিং আকারে থাকে আর যদি সেটাকে Float নাম্বারে কনভার্ট করতে হয় তাহলে parseFloat ব্যাবহার করা হয় । 

var pen = '2';
var pencil = '2.4';
var total = parseFloat(pen) + parseFloat(pencil);
console.log(total);

// float to Integer conversation : কোনো নাম্বার যদি স্ট্রিং আকারে থাকে আর যদি সেটাকে Integer নাম্বারে কনভার্ট করতে হয় তাহলে parseInt ব্যাবহার করা হয় । 

var pen = 2.5;
var pencil = 2.7;
var total = parseInt(pen) + parseInt(pencil);
console.log(total);  