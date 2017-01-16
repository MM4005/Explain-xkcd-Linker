/*
MIT License

Copyright (c) 2017 Matthew Manley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

https://github.com/MM4005/Explain-xkcd-Linker/
*/

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
