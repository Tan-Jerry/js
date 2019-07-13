var paras = document.getElementsByTagName("p");
for (var i = 0; i<paras.length;i++)
{
	var title_text = paras[i].getAttribute("title");
	alert(title_text);

	paras[i].setAttribute("title", "brand new title text");

	title_text = paras[i].getAttribute("title");
	alert(title_text);
}

var teamMembers = ["Hongzhuang", "Jerry", "Judy"];
alert(teamMembers[2]);

function shout()
{
	var beatles = Array("John", "Paul", "George", "Ringo");
	
	for (var index = 0; index < beatles.length; index++)
	{
		alert(beatles[index]);
	}
}

shout();