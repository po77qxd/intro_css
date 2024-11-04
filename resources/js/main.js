function applyCss(){
    var resultArea = document.getElementById("resultArea");
    var titre = document.getElementById("titre");
    var par1 = document-getElementById("paragraphe1");

    var cssTitle = document.getElementById("cssTitre").value;
    var cssPar1 = document.getElementById("cssPar1").value;

    titre.setAttribute("style", cssTitle);
    par1.setAttribute("style", cssPar1);
    //resultArea.setAttribute("style", "border-color: #FF0000; color: #00FF000;");
}