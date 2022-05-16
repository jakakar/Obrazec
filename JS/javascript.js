
//dovoli samo stevila
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}



//button ko kliknes trenerja ali sportnika
function text(x){
    if(x==0) { 
     
    document.getElementById("mycode").style.opacity="0.4";
    document.getElementById("mycode").style.pointerEvents="none";
    document.getElementById("p6a").style.opacity="0.4";
    document.getElementById("sport").style.color="#5fa8d3";
    document.getElementById("trener").style.color="black";
}else{
    
    document.getElementById("mycode").style.display="inline-block";
    document.getElementById("mycode").style.opacity="1";
    document.getElementById("mycode").style.pointerEvents="auto";
    document.getElementById("trener").style.color="#5fa8d3";
    document.getElementById("sport").style.color="black";
    return;
}
}



function myFunction() {
    let car = document.getElementById("spz").value="OZS";
    return car;
  }


