$.ajax({
	url: "http://docusland.fr/code-academie/js_bruteforce/data/dico.txt",
	complete: function(result){
		dico = result.responseText.split("\n");
	}
});