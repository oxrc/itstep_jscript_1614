class User {
	constructor(ID, firstName, secondName, age, phone, active, interests){
		this.ID = ID;
		this.firstName = firstName;
		this.secondName = secondName;
		this.age = age;
		this.phone = phone;
		this.active = active;
		this.interests = interests;
	}
}

var persons = [];

function viewUsers(){
	document.write(persons[0].username);
}

function addUsers(JSONusers){
	if(JSONusers===undefined){
		document.write("undefined")
	}
	else
	persons = JSONusers;
}


/*var popup = new Vue({
	el: "#popup",
	data:{
		id: 0,
		firstName: "",
		secondName: "",
		age: 0,
		phone: 0,
		active: 0,
		interests: []
	},
	methods:{
		createPerson: function(){;
			this.id = users[0].id;
			this.firstName = users[0].firstName;
		}
	}
})*/