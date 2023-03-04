alert("Do some work!");

// Open a new window with your pop-up content
var newWindow = window.open("", "", "width=400,height=200");
newWindow.document.write("<h1>Close the tab!</h1><br /><p>Instead, <a href='https://github.com/'>make a thing</a></p>");

// Close the current tab
window.close();