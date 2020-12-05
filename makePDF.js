import { jsPDF } from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.1.1/jspdf.es.min.js";

document.getElementById("PDF").addEventListener("click", function() {
var canvas = document.createElement("canvas");
var context = canvas.getContext('2d');

make_base();

function make_base()
{
  var base_image = new Image();
  base_image.src = 'http://placehold.jp/99ccff/003366/150x150.jpg';
  base_image.onload = function(){
    context.drawImage(base_image, 150, 150);
  }
}
var imgData = canvas.toDataURL("image/jpeg");
let text = "This longer random string of text the set if this works the way i think it should."

var doc = new jsPDF()

doc.setFontSize(40)
doc.text(text + " YES" ,35 ,35);
doc.addImage (imgData, "JPEG", 15, 40, 180, 180)
doc.save("this.pdf")
console.log(imgData);
})