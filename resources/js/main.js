function applyCss(){
    var titre = document.getElementById("titre");
    var par1 = document.getElementById("paragraphe1");
    var resultArea = document.getElementById("resultArea");
    var img = document.getElementById("img");
    var footer = document.getElementById("footer");

    var cssTitle = document.getElementById("cssTitre").value;
    var cssPar1 = document.getElementById("cssPar1").value;
    var cssResultArea = document.getElementById("cssResultArea").value;
    var cssImg = document.getElementById("cssImg").value;
    var cssFooter = document.getElementById("cssFooter").value;

    titre.setAttribute("style", cssTitle);
    par1.setAttribute("style", cssPar1);
    resultArea.setAttribute("style", cssResultArea);
    img.setAttribute("style", cssImg);
    footer.setAttribute("style", cssFooter);
}

function openHelp(){
    var helpCard = document.getElementById("helpCard");
    helpCard.setAttribute("style", "display: block; width: 100%; top: -880px !important; left: -20px;" );
    var todoArea = document.getElementById("todoArea");
    todoArea.setAttribute("style", "height: 700px;" );
    //close the other card
    var answerCard = document.getElementById("answerCard");
    answerCard.setAttribute("style", "display: none;");
}

function closeHelp(){
    var helpCard = document.getElementById("helpCard");
    helpCard.setAttribute("style", "display: none;");
}

function openAnswer(){
    var answerCard = document.getElementById("answerCard");
    answerCard.setAttribute("style", "display: block; width: 100%; top: -895px !important; left: -20px;" );
    var todoArea = document.getElementById("todoArea");
    todoArea.setAttribute("style", "height: 700px;" );
    //close the other card
    var helpCard = document.getElementById("helpCard");
    helpCard.setAttribute("style", "display: none;");
}

function closeAnswer(){
    var answerCard = document.getElementById("answerCard");
    answerCard.setAttribute("style", "display: none;");
}