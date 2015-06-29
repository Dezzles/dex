function GameStorage ( ) {
	this.title = "game";
	this.saveBits = 2;

	var data = Cookies.get(this.title);
	this.gameNames = [
		"Pokemon X",
		"Pokemon Y",
		"Omega Ruby",
		"Alpha Sapphire"
	]
	
	this.gameName = function() {
		var game = this.getValue();
		return this.gameNames[ game ];
	}

	this.reset = function() {
		this.saveData("0");
	}
	
	this.getValue = function ( )
	{
		var data = Cookies.get(this.title);
		if (data == null) {
			this.reset();
		}
		return parseInt(data);
	}
	
	this.setValue = function ( newValue )
	{
		var data = Cookies.get(this.title);
		if (newValue == 4){
			newValue = 0;
		}
		data = "" + newValue;
		this.saveData(data);
	}
	
	this.saveData = function( data ) {
		var game = new GameStorage();
		Cookies.set( this.title, data, new Date(01,01,2029) );
	}
}