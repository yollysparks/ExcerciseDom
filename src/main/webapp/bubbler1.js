function clickHandler(e){
   var div = e.target;
    console.log("hi from " + div.id);
    document.getElementById("text").innerText = ("hi from " + div.id);
}
var people =["Lars","Peter","Jan","Ian"];
vartableRowsArray = people.map(function(people){
         return "<ul><li>"+people+"</li></ul>"                                     //converting an array to table rows
     });

document.getElementById("ull").innerText =(vartableRowsArray);
document.getElementById("outer").onclick = clickHandler;