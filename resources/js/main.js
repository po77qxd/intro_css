function applyCss(){
    var titre = document.getElementById("titre");
    var par1 = document.getElementById("paragraphe1");
    var par2 = document.getElementById("paragraphe2");
    var footer = document.getElementById("footer");

    var cssTitle = document.getElementById("cssTitre").value;
    var cssPar1 = document.getElementById("cssPar1").value;
    var cssPar2 = document.getElementById("cssPar2").value;
    var cssFooter = document.getElementById("cssFooter").value;

    titre.setAttribute("style", cssTitle);
    par1.setAttribute("style", cssPar1);
    cssPar2.setAttribute("style", cssPar2);
    cssFooter.setAttribute("style", cssFooter);
}