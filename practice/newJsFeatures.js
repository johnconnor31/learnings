
// // calling object function 
// const myStr = 'abc';

// class Product  {
// 	constructor(type){
// 		this.type = type;
// 	}
	
//         [Symbol.search](str) {
//             return str.indexOf(this.type)>=0 ? 'FOUND' : 'NOT_FOUND';
//         };
// }

// const newProd = new Product('ab');
// console.log(newProd);
// console.log(myStr.search(newProd));
// console.log(Symbol.for('search'));

// //defining iterables
// class Users {
// 	constructor(users){
// 			this.users = users;
// 	}
// 	getUsers(){
// 		return this.users;
// 	}
// 	[Symbol.iterator](){
//         const users = this.users;
//         let i =0;
// 		return {
// 			next(){
// 				if(i == users.length){
// 					return {done: true};
// 				} else {
// 					return { done: false, value: users[i++]}
// 				}
// 			}
// 		}
// 	}
// }

// const myUsers = new Users([
// 	'abc','def','defs'
// ]);
// for(var i of myUsers){
// 	console.log(i);
// }
// console.log([...myUsers]);
// generators
	class MyNeeds {
		constructor(needs){
			this.needs = needs;
		}
		*getNeeds(){
			for(var i=0;i<this.needs.length;i++){
				yield this.needs[i];
			}
		}
	}

	const allNeeds = new MyNeeds(['advanced JS', 'React Hooks', 'HTML5', 'CSS3']);

	// console.log(allNeeds.getNeeds().next());
	
	console.log([...allNeeds.getNeeds()]);
// function* myTasks(tasks) {
// 	for(let i=0;i<tasks.length;i++){
// 		yield tasks[i];
// 		console.log('waiting for the next task?');
// 	}
// }

// const tasks = myTasks([{0:'reactjs'},{1:'javascript'},{2:'redux'},{3:'webpack'}]);

// console.log([...tasks]);

// console.log(tasks.next());
// console.log(tasks.next());
// console.log(tasks.next());
// console.log(tasks.next());
// console.log(tasks.next());


// const arr = [[1,2],[4,5,[4,5]],3,[5,6],6];
// const mergeArr = arr => arr.reduce((a,b) => a.concat(Array.isArray(b) ? mergeArr(b): b),[]);

// console.log(mergeArr(arr));


// // js feature practice


