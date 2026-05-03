// The object provided in the problem
let student = {
  name: "John Doe"
};

function getKeys(obj) {
	ans=[]
	for(let x of obj){
		ans.push(x)
	}
		return ans
	
}

// The platform will likely test it like this:
console.log(getKeys(student));