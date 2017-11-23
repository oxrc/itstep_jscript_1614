
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

var interests = [];
var persons = [];

function ViewUser() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function addData(JSONusers,JSONinterests){
	if(JSONusers===undefined&&JSONinterests===undefined){
		document.write("undefined")
	}
	else{
	persons = JSONusers;
	interests = JSONinterests;
	}
}

var popup = new Vue({
	el: "#popup",
	data:{
		id: 0,
		firstName:"",
		lastName:"",
		age: 0,
		phone: 0,
		active: 0,
		interests: [],
		fullInterests: []
	},
	methods:{
		createPerson: function(id){;
			this.id = persons[id].id;
			this.firstName = persons[id].firstName;
			this.lastName = persons[id].lastName;
			this.age = persons[id].age;
			this.phone = persons[id].phone;
			this.active = persons[id].active;
			this.interests = persons[id].interests;	
			for(var i = 0; i < this.interests.length; i++){
				this.fullInterests.push(interests[i].description);
			}
			alert(this.interests.length);
		}
	}
})