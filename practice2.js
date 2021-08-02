// Array
// array হলো এক ধরনের সারি বা অনেক গুলো জিনিষের কালেকশন নিয়ে একটা array তৈরি করা হয় নিম্নে একটা উদাহরন নিম্নে দেয়া হল 

var friendAge = [11, 12, 13];

var muriChanacurFee = [34, 5, 221, 3];

var naika = ['mahi', 'opu', 'kopila'];

var oddNumbers = [1, 3, 5, 7, 9];

var vowels = ['a', 'e', 'i', 'o', 'u'];

console.log(vowels);


// Array length 
// Array এর মধ্যে মোট কয়টি জিনিষ আছে সেটা দেখার জন্য length ব্যাবহার করা হয় 

var naika = ['mahi', 'opu', 'kopila'];
console.log(naika.length);


// Array Index  
// কোনো Array তে এলিমেন্ট টা যায়গায় বা কোন পজিশনে আছে সেটা দেখার জন্য Array Index ব্যাবহার করা হয় । 
// ইনডেক্স শুরু হয় ০ থেকে 
// আর যদি Array এর মধ্যে না থাকে তাহলে -১ দেখাবে 

var bookpgae = ['hablu', 'bolod', 'battery', 'paracitamol'];
var battaryIndex = bookpgae.indexOf('battery')
console.log(battaryIndex);


var number = [1, 4, 5, 8, 23, 34, 45, 66];
console.log(number.indexOf(45));


// কোন পজিশনে কোন এলিমেন্ট আছে সেটা দেখার জন্য Array এর নাম দিয়ে ইনডেক্স নাম্বার দিলে পজিশন দেখা যায় ।  

var secoundIndex = bookpgae[2];
console.log(secoundIndex);

// কোনো একটা Array এর মধ্যে যদি নতুন আলিমেন্ট অ্যাড করে তখন push ব্যাবহার করে । লাস্ট থেকে অ্যাড করবে আলিমেন্ট

var lastBench = ['kalam', 'balam', 'salam'];
lastBench.push('jalam');
lastBench.push('falam');
lastBench.push('nalam');
console.log(lastBench);

var friendsAge = [11, 12, 15, 13];
friendAge.push(10);
console.log(friendAge);

// কোনো একটা Array এর মধ্যে যদি কোণ আলিমেন্ট রিমুভ করতে হয় তখন pop ব্যাবহার করে । সব গুলা চলে গেলে ফাকা থাকবে Array। লাস্ট থেকে রিমুভ করবে আলিমেন্ট

var friendsAge = [11, 12, 13];
friendAge.pop();
friendAge.pop();
console.log(friendAge);

// কোনো একটা Array এর মধ্যে যদি নতুন আলিমেন্ট অ্যাড করে তখন unshift ব্যাবহার করে । প্রথম থেকে অ্যাড করবে আলিমেন্ট

var lastBench = ['kalam', 'balam', 'salam'];
lastBench.unshift('falam');
console.log(lastBench);

// কোনো একটা Array এর মধ্যে যদি কোণ আলিমেন্ট রিমুভ করতে প্রথম থেকে তখন shift ব্যাবহার করে । সব গুলা চলে গেলে ফাকা থাকবে Array
var lastBench = ['kalam', 'balam', 'salam'];
lastBench.shift(0);
console.log(lastBench);


// কন্ডিশনাল লজিক মানে একটা হলে আর একটা হবে না এমন 
// only if
var isFoodReady = true;

if (isFoodReady = true) {
    console.log('mama ami vat khabo !!');

}
// যেকোনো একটা condition মানবে না হলে এলস প্রিন্ট করে দিবে 
// else if 

var a = 12;
var b = 20;
if (a > b) {
    console.log("a is getter than b");
} else {
    console.log("a is less than b");
}

// AND oparator
// ২ টা condition মানতে হবে না হলে এলস প্রিন্ট করে দিবে 


var a = 12;
var b = 20;
var c = 34
if (a < b && c > a) {
    console.log("condition true");
} else {
    console.log("condition false");
}

// OR oparator
// ২ টা condition  এর মধ্যে একটা মানতে হবে না হলে এলস প্রিন্ট করে দিবে 

var a = 12;
var b = 20;
var c = 34
if (a < b || b > c) {
    console.log("condition true");
} else {
    console.log("condition false");
}

// nested condition 
// একটা condition না মিললে অন্য condition এ যাবে একটাও না মিললে তখন  else এ চলে যাবে ।
var a = 12;
var b = 20;
var c = 34
if (a > b) {
    console.log("a is getter than b");
} else if (b > c) {
    console.log("c is getter than b");
} else if (a < c) {
    console.log("a is getter than c");
} else {
    console.log("condtion not matched");
}

//  multiple condition 
var a = 12;
var b = 20;
var c = 34
if (a < b) {
    if (b > c) {
        console.log("match");
    } else {
        console.log("condtion not matched");
    }
}