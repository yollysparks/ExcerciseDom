function clickHandler() {
var elem = document.getElementById("buttons");
     var len = elem.length;
      for(var i = 0; i < len; i++ ) {
        elem[i].addEventListener("click",function() {      
            num = this.value;                    
            output = screen.innerHTML += num;                 
            limit = output.length;         
         if(limit > 16 ) {       
         alert("Sorry no more!!");            
       }      
     },false);      
    } 

}

document.getElementById("calculate").onclick(clickHandler);
