$(document).ready(function(){
    var getPass = new XMLHttpRequest();
    getPass.open("GET","http://docusland.fr/code-academie/js_bruteforce/data/dico.txt",true);
    getPass.send();
    console.log(getPass);


})