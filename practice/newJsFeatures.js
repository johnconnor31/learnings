
// calling object function 
const myStr = 'abc';

class Product  {
	constructor(type){
		this.value = 'ooo'
	}
	
[Symbol.search](str){
	return str.indexOf(this.type)>=0 ? 'FOUND' : 'NOT_FOUND';
}
}

const newProd = new Product('def');
console.log(newProd);
console.log(myStr.search(newProd));

//defining iterables
class Users{
	constructor(users){
		this.users = users;
	}
	getUsers(){
		console.log(this.users);
	}
	[Symbol.iterator](){
	let i =0;
	let users = this.users;
	return {
		next(){
			if(i==users.length)
				return {done: true};
			else 
				return {done:false, value: users[i++]}
		}
	}
}
}

const myUsers = new Users([
	{'user':'abc'},
	{'user':'def'}]);

console.log('get users', myUsers.getUsers());
for(var key in myUsers){
	console.log('val', myUsers[key]);
}

console.log('myUsers', {...myUsers});


console.log('values', [...myUsers]);

//generators
class myOptions{
	constructor(options){
		this.options = options;
	}
	*getOptions(){
		for(let i=0;i<this.options.length;i++)
		yield this.options[i];
	}
}

const listOfOptions = new myOptions([
{opt: 'better job'},
{opt:'Foreign job'},
{opt: 'stay here and chill out'}]);
console.log({...listOfOptions});
const generator = listOfOptions.getOptions();
console.log('value', generator.next());
console.log('value', generator.next());
console.log('value', generator.next());

for(const u of generator){
	console.log(u);
}
console.log([...generator]);


function* myTasks(tasks) {
	for(let i=0;i<tasks.length;i++){
		yield tasks[i];
		console.log('waiting for the next task?');
	}
}

const tasks = myTasks([{0:'reactjs'},{1:'javascript'},{2:'redux'},{3:'webpack'}]);

console.log([...tasks]);

console.log(tasks.next());
console.log(tasks.next());
console.log(tasks.next());
console.log(tasks.next());
console.log(tasks.next());
