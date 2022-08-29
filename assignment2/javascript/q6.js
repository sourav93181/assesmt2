const toArray = (obj) => {
  let a = [];
  a = Object.entries(obj);
  return a;
};
//Object.entries() method in JavaScript returns an array consisting of enumerable property [key, value] pairs of the object 
console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
