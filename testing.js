function a(name){
	this.run = function(){
		console.log(name+' is running');
	}
}

var a1 = new a('tesla');
a1.run();
var b = a1.run;
b();