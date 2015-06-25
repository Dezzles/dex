function GameStorage ( ) {
	this.title = "game";

	this.saveData = function( data ) {
		Cookies.set( this.title, data, new Date(01,01,2029) );
	}


	var data = Cookies.get(this.title);
	this.gameNames = [
		"Pokemon X",
		"Pokemon Y",
		"Omega Ruby",
		"Alpha Sapphire"
	]
	if (data == null) {
		data = "0";
		this.saveData(data);
	}
	
	this.gameName = function() {
		var game = this.currentGame();
		return this.gameNames[ game ];
	}
	this.reset = function() {
		this.saveData("0");
	}
	
	this.currentGame = function ( )
	{
		var data = Cookies.get(this.title);
		return parseInt(data);
	}
	
	this.updateGame = function ( newValue )
	{
		var data = Cookies.get(this.title);
		if (newValue == 4){
			newValue = 0;
		}
		data = "" + newValue;
		this.saveData(data);
	}
	
	function replaceAt( str, index, character) {
		return str.substr(0, index) + character + str.substr(index+character.length);
	}
	
}