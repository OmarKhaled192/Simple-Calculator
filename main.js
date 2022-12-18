let output = document.getElementById("myInput");
let oldValue = "";
let operations = ['+', '-', '*', '/', '%'];
function Clear() {
  output.value = "";
}
function Delete() {
  if(oldValue != "") {
      output.value = oldValue
    oldValue = "";
  }
  output.value = output.value.slice(0, -1)
}
function Display(num) {
  output.value += num;
}
function Calc() {
  try {
    output.value = eval(output.value).toFixed(2);
  } catch(err) {
    oldValue = output.value;
    output.value = err;
  }
}
// change to the dark mode
let c= 0;
function Change() {
  var link = document.createElement("link");

  link.rel = "stylesheet";
  link.type = "text/css";
  if(c % 2 == 0)
    link.href = "light.css";
  else 
    link.href = "style.css"
    c++;
  document.getElementsByTagName("head")[0].appendChild(link);
  // benifit of waiting time here to render page firstly, then remove file
  setTimeout(
    ()=> document.getElementsByTagName("link")[0].remove(),
    1000)
}