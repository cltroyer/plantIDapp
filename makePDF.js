import { jsPDF } from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.1.1/jspdf.es.min.js";

document.getElementById("PDF").addEventListener("click", function() {
    let text = "test"
    console.log(imgData);
    var doc = new jsPDF()

    doc.setFontSize(40)
    doc.text(text + "YES" ,35 ,35);
    doc.addImage (`http://placehold.jp/99ccff/003366/150x150.png`, "PNG", 15, 40, 50, 50)
    doc.save("this.pdf")
})

