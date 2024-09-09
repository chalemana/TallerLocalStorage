document.addEventListener("DOMContentLoaded", (e) =>{
    
    var data = document.getElementById("data");
    
    var datos = localStorage.getItem("datos");
    data.innerHTML = datos; 
});
