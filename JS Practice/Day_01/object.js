const obj = {a:1,b:2};
const obj2 = {b:3,c:4};



//Object.assign() method copies all the properties
//from one or more source objects to a target object
//it returns the modified target object
// const objectAssignMethod = Object.assign(obj,obj2);
// console.log(objectAssignMethod);
// console.log(obj);
// console.log(obj2)




//Object.create() method creates a new object
//using an existing object as the prototype of the newly created object
// const person = {
//     isHuman: false,
//     printIntroduction(){
//         console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
// };
// const markObj = Object.create(person);
// markObj.name = "Mark";
// markObj.isHuman = true;
// markObj.printIntroduction();



//Object.defineProperties() method defines a new or modifies existing properties 
//directly on an object and return the object
// const object = {};
// Object.defineProperties(object,{
//     first:{
//         value:"Mark",
//         writable: true,
//     },
//     second:{}
// })
// console.log(object.first);



//Object.defineProperty method defines a new property on an Object
//or modifies an existing property on an object
//and return the object
// const object = {};
// Object.defineProperty(object,"first",{
//     value:"Mark42",
//     writable:false,
// });
// console.log(object.first);



//Object.entries method returns an array of a given object
//with key value pairs
// const entriesMethod = Object.entries(obj);
// console.log(entriesMethod);

