var text = document.getElementById("im");
var index = 0;
var dse = document.createElement("p")

dse.innerHTML = "&#128073"
var e = dse.innerHTML
list = [e+"Data Scientist" +"&#128202;", e+"Fullstack Developer" +"&#128241;", e+"Software Engineer"+"&#128187;"];
text.innerHTML = list[0]
var fuc = function changeTitle() {
  if (index <= list.length-1) {
    text.innerHTML = list[index];
    setTimeout(changeTitle, 1000);
    index++;
  } else {
    index = 0;
    setTimeout(changeTitle,1000);
  }
};
fuc();
