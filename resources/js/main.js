function applyCss(){
    var titre = document.getElementById("titre");
    var par1 = document.getElementById("paragraphe1");
    var resultArea = document.getElementById("resultArea");
    var footer = document.getElementById("footer");

    var cssTitle = document.getElementById("cssTitre").value;
    var cssPar1 = document.getElementById("cssPar1").value;
    var cssResultArea = document.getElementById("cssResultArea").value;
    var cssFooter = document.getElementById("cssFooter").value;

    titre.setAttribute("style", cssTitle);
    par1.setAttribute("style", cssPar1);
    resultArea.setAttribute("style", cssResultArea);
    footer.setAttribute("style", cssFooter);
}