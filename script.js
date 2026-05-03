// The object provided in the problem
const student = {
  name: "John Doe"
};

// You need to add the getKeys method to the Object prototype
Object.prototype.getKeys = function() {
  // 'this' refers to the object calling the method (e.g., student)
  return Object.keys(this);
};

// The platform will likely test it like this:
// console.log(student.getKeys());