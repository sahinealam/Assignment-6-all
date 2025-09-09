
---
#### 1 What is the difference between var, let, and const?
- `var` পুরনো, সব জায়গায় চলে, কিন্তু মাঝে মাঝে সমস্যা করতে পারে।
- `let` নতুন এবং নির্দিষ্ট block (যেমন: if, loop) এর ভিতরে কাজ করে।  
- `const` একবার মান দিলে আর বদলানো যায় না।

---

#### 2 What is the difference between map(), forEach(), and filter()? 

forEach() | প্রতিটি আইটেমে কাজ করে | কিছু return করে না |
 map() | প্রতিটি আইটেমে কাজ করে এবং নতুন অ্যারে তৈরি করে | 
filter() | শর্ত অনুযায়ী কিছু আইটেম বেছে নেয় | নতুন array |

🔹 Example:

```js
let numbers = [1, 2, 3, 4];

numbers.forEach(n => console.log(n)); // শুধু দেখাবে

let doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]

let even = numbers.filter(n => n % 2 === 0); // [2, 4]

#### 3 What are arrow functions in ES6?

 Arrow function হলো ছোট আকারে ফাংশন লেখার একটি নতুন পদ্ধতি। এটি কোডকে ছোট ও পরিষ্কার করে।

// সাধারণ ফাংশন
function add(a, b) {
  return a + b;
}

// Arrow ফাংশন
const add = (a, b) => a + b;



#### 4 How does destructuring assignment work in ES6?

🔹 Destructuring দিয়ে আমরা অ্যারে বা অবজেক্ট থেকে মান আলাদা করে নিতে পারি সহজভাবে।

🔹 Example:
// Array destructuring
let [a, b] = [10, 20];
console.log(a); // 10

// Object destructuring
let person = { name: "Rahim", age: 25 };
let { name, age } = person;
console.log(name); // Rahim


#### 5 Explain template literals in ES6. How are they different from string concatenation? -->
🔹 Template literals হলো ব্যাকটিক ` দিয়ে লেখা স্ট্রিং, যেখানে ${} ব্যবহার করে ভেরিয়েবল বসানো যায়।

 🔹 Example:

let name = "Rahim";
let msg = `Hello, ${name}!`; // Template Literal

// আগের নিয়মে:
let msg2 = "Hello, " + name + "!"; // Concatenation


🔹 Template literals দিয়ে:

মাল্টি-লাইন লেখা যায়

ভেরিয়েবল যোগ করা সহজ হয়