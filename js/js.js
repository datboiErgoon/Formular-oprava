let vaha = 0;
let vyska = 0;


function bmi(vaha, vyska) {
    let bmi = vaha / (vyska*vyska);
    
    if(bmi < 18.5){
      return "Podváha";
    }else if (bmi < 24.9){
      return "Norma";
    }else if (bmi < 29.9){
      return "Nadváha";
    }else if (bmi < 34.9){
        return "Obezita 1. stupně";
    }else if (bmi < 39.9){
        return "Obezita 2. stupně (závažná)";
    }else{
      return "Obezita 3. stupně (těžká)";
    }
  }

  document.getElementById("cudlik").addEventListener("click", function(){
    vaha = document.getElementById("vaha").value;
    vyska = document.getElementById("vyska").value;
    document.getElementById("odpoved").innerHTML = bmi(vaha,vyska);
});