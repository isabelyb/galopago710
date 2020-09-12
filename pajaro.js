var d = document.getElementById("pajarito")
var lienzo = d.getContext("2d");

dibujarLinea("black",37, 47, 50, 64);
dibujarLinea("black",50, 64, 70, 56);
dibujarLinea("black",70, 56, 53, 58);
dibujarLinea("black",53, 58, 44, 40);
dibujarLinea("red",44, 40, 54, 34);
dibujarLinea("red",54, 34, 46, 27);
dibujarLinea("red",46, 27, 40, 36);
dibujarLinea("black",40, 36, 26, 27);
dibujarLinea("black",26, 27, 18, 1);
dibujarLinea("black",18, 1, 20, 33);
dibujarLinea("black",20, 33, 33, 43);
dibujarLinea("black",33, 43, 29, 47);
dibujarLinea("black",29, 47, 28, 49);
dibujarLinea("black",28, 49, 29, 50);
dibujarLinea("black",29, 50, 31, 50);
dibujarLinea("black",31, 50, 37, 47);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}