// Once I get this up on github I will link to it here.

var path = window.location.pathname.replace(/\//g,"");
if (path === "" || !isNaN(path)) {
	var list = document.getElementsByClassName("comicNav");
	for (var i = 0; i < list.length; i++) {
		var link = "http://www.explainxkcd.com/";
		if (path !== "") {
			link += path;
		}

		var li = document.createElement("li");
		li.innerHTML = "<a href=\"" + link + "\" target=\"_blank\">Explain</a>";
		list[i].insertBefore(li, list[i].childNodes[4])
	}
}
