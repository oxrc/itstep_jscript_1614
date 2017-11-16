
var textForInterests;
var arrOfInterests = [];
var interests = [];

export function makeInterest(){
	arrOfInterests = textForInterests.split("\n");
	for(var i = 0; i < arrOfInterests.length; i++){
		var interest = '{"id":'+i+', "description": \"'+arrOfInterests[i]+'/"}'
		interests.add(JSON.parse(interest));
	}
	return interest.toString();
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
                textForInterests=rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
}