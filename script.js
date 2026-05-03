
const student = {
  "name": "John"
};

function getKeys(obj) {
  let keys = [];
  for (let key in obj) {
    // hasOwnProperty ensures you only get the object's own 
    // properties, not those from the prototype chain
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

console.log(getKeys(student)); 