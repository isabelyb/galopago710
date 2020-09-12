var obs = 21;
var ebird = 80;
var total = obs / ebird * 100;
total = parseInt(total);
document.write("Total de Aves observadas en Galopago 700: " + total + "%");
var obs_u = prompt("Cuántas especies de aves has visto en Galopago 700?");
var obs_u = parseInt(obs_u);
var total_u = obs_u / ebird * 100;
total_u = parseInt(total_u);
document.write("Porcentaje de aves que has observado: <strong>" + total_u + "%</strong>");
var lifers = prompt("Cuántos Lifer tuviste en Galopago 700?");
lifers = parseInt(lifers);
if(lifers > 0)
{
document.write("Felicidades! Tuviste " + lifers + " Lifers en Galopago 700!");
}
else if(lifers == 0)
{
document.write("No has tenido Lifers en Galopago 700");
}
else
{
document.write("Por favor digita un número de Lifers");        
}