var dico=[];
var results={};

$.ajax({
	url: "http://docusland.fr/code-academie/js_bruteforce/data/dico.txt",
	complete: function(result){
		dico = result.responseText.split("\n");
	}
});

$(document).ajaxComplete(function(){
	/*
	for (var i = 0; i < 1; i++) {
		testPassword(dico[i]);
	}
	*/
	testPassword(dico[0]);
});