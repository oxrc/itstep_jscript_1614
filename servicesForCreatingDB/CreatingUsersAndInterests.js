
var textForInterests;
var textForNames;
var arrOfInterests = [];
var arrOfNames = [];
var interests = [];
var names = []

function makeInterest(){
	arrOfInterests = textForInterests.split("\n");
	for(var i = 0; i < arrOfInterests.length; i++){
		var interest = '{"id":'+i+', "description": \"'+arrOfInterests[i]+'"}'
		document.write(interest);
        document.write("<br>");
	}
}

function makeUsers(){
	arrOfNames = textForNames.split("\n");

    var snames = []
    for(var i = 0; i < arrOfNames.length; i++)
        {
            names.push(arrOfNames[i].split(" ")[0])
            snames.push(arrOfNames[i].split(" ")[1])
        }
    for(var i = 0; i < arrOfNames.length; i++){
        var age = Math.floor(Math.random() * 100)+10;  
        var phone = Math.floor(Math.random() * 1000000)+100000;  
        var active = Math.floor(Math.random() * 2);
        var countOfInterest = Math.floor(Math.random() * 6)+1;
        var idInterests = [];
        for(var j = 1; j <= countOfInterest; j++){
            idInterests.push(Math.floor(Math.random() * 246));
        }
	}
}

function makeUsernames(){
    for(var i = 0; i < 50; i++){
        document.write('{"username": "'+names[i]+'", "password": "'+names[i]+i + '"}');
        document.write("<br>")
    }
}


function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                textForNames = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
}