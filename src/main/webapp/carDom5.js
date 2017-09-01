//no 5 a and b
function createCars(){
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
 vartableRowsArray = cars.map(function(c){
         return "<tr><td>"+c.id +"</td><td>" +c.year + "</td><td>"+c.make + "</td><td>"+c.model+"</td><td>"+c.price+"</td></tr>"                                     //converting an array to table rows
     }).join("");
    
 };
 
   elm.addEventListener("onclick", function(),true);  
     
var filterValue= "";
function filterCb(data){
    if(filterValue === " "){
    return true;
    }
    return Price(data) < filterValue;
}
function clickHandler(){
 filterValue = document.getElementById("filter").value;   
 }
  document.getElementById("button3").onclick(clickHandler);
 

