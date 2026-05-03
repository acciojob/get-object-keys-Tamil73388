let student = {
  name: "John Doe"
};

function getKeys(obj) {
	ans=[]
	for(let x in obj){
		ans.push(x)
	}
		return ans
	
}

console.log(getKeys(student));