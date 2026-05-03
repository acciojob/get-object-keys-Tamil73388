//your JS code here. If required.
// Create the student object
const student = {
  name: "tamil",
	age:26,
	city:"chennai"
};

// Function to get all keys from the object
function getKeys(obj) {
  let ans=[]
	for(let x of obj){
		ans.push(x)
	}
	return ans
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]