const array = [23,"Rohan",19,81,8,"Karan","Riya",81,93,12];
const array2 = ["Mark",32,7,42,8,13];
const array3 = ["Tarun","Yesh","Ujwal","Uday"];
const numberArray = [12,21,31,15,17,42,29,32,37,28,19];
console.log(array);

//at method takes a integer and returns
//the item at that index
// const atMethod = array.at(5)
// console.log(atMethod)


//concat method is used to merge two or more arrays
// const concatMethod = array.concat(array2,array3);
// console.log(concatMethod);
// console.log(`length of arrays \narray: ${array.length}\narray2: ${array2.length}\narray3: ${array3.length}`);
// console.log(concatMethod.length);


//copyWithin method make shallow copies
//with same length
// const copyWithinMethod = array.copyWithin(0,5,9);
// console.log(copyWithinMethod)
// console.log(copyWithinMethod.length)


//entries method return a new array iterator object
//that contains key value pairs for each index
//for showing values we can use variable.next().value
// const entriesMethod = array.entries();
// console.log(entriesMethod.next().value)
// for(let i = 0; i<array.length-1; i++){
//     console.log(entriesMethod.next().value);
// };



//every method test all elements of the array 
//test pass by the callback functions inside the every
//return boolean value true or false
// const everyMethod = numberArray.every((el) => el<30);
// console.log(everyMethod)


//fill method changes all elements with a static value
//and return the modified array
// const fillMethod = array.fill("Mark",2,5);
// console.log(fillMethod)


//filter method returns an array with those values
//that pass by the callback function
// const filterMethod = array.filter((el) => el.length > 3);
// console.log(filterMethod);



//find method return the first element 
//that satisfies by the callback function
//if no values satisfy its return undefined
// const findMethod = numberArray.find((el) => el>20);
// console.log(findMethod);



//findIndex method return the first elements index 
//that satisfies by the callback function
//if no values satisfy its return -1
// const findIndexMethod = numberArray.findIndex((el) => el>95);
// console.log(findIndexMethod)


//findLast method return the last element 
//that satisfies by the callback function
//if no values satisfy its return undefined
// const findLastMethod = numberArray.findLast((el) => el>95);
// console.log(findLastMethod)