// loop

//লুপ মানে হলো বার বার একই কাজ করা যেমন মনে করেন আপনি ১০ টা ১০০০ টা সংখ্যার একটা লিস্ট বানাবেন  তো আপনি প্রত্তেক বার তো একটা একাটা করে লিখবেন না কারন প্রোগ্রামারা একটু অলস প্রকৃতির হয়ে থাকে ।

// লুপ সাধারণত  ৩ ধরনের হয়ে থাকে যেমন ১) while loop

// Basic while loop : while লুপে দুইটা পার্ট আছে: লজিকাল এক্সপ্রেশন বা কন্ডিশন আর অ্যাকশন। যখন কন্ডিশনটা সত্য হয় তখনই, কেবল তখনই অ্যাকশন পার্টটা এক্সিকিউট হতে শুরু করে নিচে আমারা একটা উদাহরন দেখি  :

var number = 0;
while (number < 9) {
    console.log(number);
    number++;
}

// output : 0,1,2,3,4,5,6,7,8

// while টা হলো লুপের কি -ওয়ার্ড 
// ()  এর মধ্যে হলো condition 
// number++; এক এক করে number এর মান বাড়বে ।var number = 0;

// জোড় সংখ্যা 
var number = 0;

while (number <= 20) {
    console.log(number);
    number = number + 2;
}

// output : 0,2,4,6,8,10,12,14,16,18,10

// আগের টাতে শুধু এক এক করে বাড়তে ছিলো নাম্বারের  এবার ২ করে বাড়তেছে আর সব আগের মতো


// বিজোড় সংখ্যা

var number = 1;
while (number <= 20) {
    console.log(number);
    number = number + 2;
}

// Output: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// ২ করে বারতেছে আর সব আগের মতো

// Basic For loop

for (var num = 0; num < 10; num++) {
    console.log(num);
}

//OutPut : 1,2,3,4,5,6,7,8,9

// for টা হলো লুপের কি -ওয়ার্ড 
// var num = 0  ভারিয়াবেল initializ করা এবং এটা একবারই execute করবে 
// num < 10  হলো condition, যত টাইম পর্যন্ত num এর মান ১০ এর সমান না হবে তত সময় পর্যন্ত condition চলবে ।
// number++; এক এক করে number এর মান বাড়বে ।


// oddNumber useing for loop

for (var num = 1; num < 10; num += 2) {
    console.log(num);
}

// output:1,3,5,7,9
// num +=2 দুই এক করে num এর মান বাড়বে ।
// Even Number useing for loop 

for (var num = 0; num <= 10; num += 2) {
    console.log(num);
}

//OutPut : 0,2,4,6,8,10
// num +=2 দুই এক করে num এর মান বাড়বে ।

// foreach  loop 

arr = [12, 15, 37, 56, 99, 7, 6, 4]
for (var num = 0; num < arr.length; num++) {
    var item = arr[num];
    console.log(item);
}
// output : 12, 15, 37, 56, 99, 7, 6, 4


// একটা নিলাম এর মধ্যে কিছু সংখ্যা নিলাম 
// for টা হলো লুপের কি -ওয়ার্ড 
// var num = 0  ভারিয়াবেল initializ করা এবং এটা একবারই execute করবে 
// num < arr.length হলো condition, যত টাইম পর্যন্ত arr.length  এর মান এর সমান না হবে তত সময় পর্যন্ত condition চলবে ।
// item  এর মধ্যে একটা একটা করে array এর value রাখবে ।
// number++; এক এক করে number এর মান বাড়বে ।