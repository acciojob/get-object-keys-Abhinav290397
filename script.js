//your JS code here. If required.
Object.prototype.getKeys = function(){
	let keys = [];
	for(let i in this){
		if(this.hasOwnProperty(i)){
			keys.push(i);
		}
	}
	return keys;
}
let student = {
	name : "xyz",
}
