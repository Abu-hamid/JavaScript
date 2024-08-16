// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hamid",
    "full name": "Abou Hamid",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hamidh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hamid@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hamidh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


const mysym= Symbol("key12");

const user = {
 name: "Abou Hamid",
 "full name":"Abu Hamid",
 age:18,
 [mysym]: "Mykey12Value",
 login: false
}
console.log( user);
