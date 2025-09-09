

এই ফাইলটিতে JavaScript-এর ES6 ফিচারগুলোর কিছু গুরুত্বপূর্ণ বিষয় সহজ বাংলায় ব্যাখ্যা করা হলো।

---

### 1️⃣ `var`, `let`, আর `const` এর মধ্যে পার্থক্য কী?

- `var` পুরানো, আর সব জায়গায় কাজ করে (function এর ভিতরে না থাকলে problem হতে পারে)।  
- `let` নতুন এবং নির্দিষ্ট block (যেমন: if, loop) এর ভিতরে কাজ করে।  
- `const` একবার মান দিলে আর বদলানো যায় না।

---

### 2️⃣ `map()`, `forEach()`, আর `filter()` এর মধ্যে পার্থক্য কী?

forEach() | প্রতিটি আইটেমে কাজ করে | কিছু return করে না || map() | প্রতিটি আইটেমে কাজ করে এবং নতুন অ্যারে তৈরি করে | নতুন array |
filter() | শর্ত অনুযায়ী কিছু আইটেম বেছে নেয় | নতুন array |

🔹 উদাহরণ:

```js
let numbers = [1, 2, 3, 4];

numbers.forEach(n => console.log(n)); // শুধু দেখাবে

let doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]

let even = numbers.filter(n => n % 2 === 0); // [2, 4]
3️⃣ ES6 এ Arrow Functions কী?

🔹 Arrow function হলো ছোট আকারে ফাংশন লেখার একটি নতুন পদ্ধতি।

// সাধারণ ফাংশন
function add(a, b) {
  return a + b;
}

// Arrow ফাংশন
const add = (a, b) => a + b;


🔸 এটি কোডকে ছোট ও পরিষ্কার করে।
🔸 this keyword নিয়ে কাজ করা সহজ হয়
4️⃣ ES6-এ Destructuring Assignment কিভাবে কাজ করে?

🔹 Destructuring দিয়ে আমরা অ্যারে বা অবজেক্ট থেকে মান আলাদা করে নিতে পারি সহজভাবে।

// Array destructuring
let [a, b] = [10, 20];
console.log(a); // 10

// Object destructuring
let person = { name: "Rahim", age: 25 };
let { name, age } = person;
console.log(name); // Rahim
5️⃣ Template Literals কী? আর String Concatenation থেকে কীভাবে আলাদা?

🔹 Template literals হলো ব্যাকটিক ` দিয়ে লেখা স্ট্রিং, যেখানে ${} ব্যবহার করে ভেরিয়েবল বসানো যায়।

let name = "Rahim";
let msg = `Hello, ${name}!`; // Template Literal

// আগের নিয়মে:
let msg2 = "Hello, " + name + "!"; // Concatenation


🔸 Template literals দিয়ে:

মাল্টি-লাইন লেখা যায়

ভেরিয়েবল যোগ করা সহজ হয়