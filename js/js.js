let vaha = 0;
let vyska = 0;


function bmi(vaha, vyska) {
    let bmi = vaha / (vyska*vyska);
    
    if(bmi < 18.5){
      return "Podváha";
    }else if (bmi < 25){
      return "Průměr";
    }else if (bmi < 30){
      return "Nadváha";
    }else{
      return "Obézní";
    }
  }

  document.getElementById("cudlik").addEventListener("click", function(){
    vaha = document.getElementById("vaha").value;
    vyska = document.getElementById("vyska").value;
    document.getElementById("odpoved").innerHTML = bmi(vaha,vyska);
});