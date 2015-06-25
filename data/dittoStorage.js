function DittoStorage ( ) {
	this.title = "dittos";
	
	this.getData = function() {
		var game = new GameStorage();
		var data = Cookies.get(this.title + "." + game.currentGame());
		if (data == null)
		{
			data = "000000000000000000000000000000000000000000000000000000000000";
			this.saveData( data )
		}
		return data;
	}
	
	this.reset = function() {
		var data = "000000000000000000000000000000000000000000000000000000000000";
		this.saveData( data );
	}
	
	this.statValue = function ( slot )
	{
		var data = this.getData();
		return parseInt(data[ slot ]);
	}
	
	this.update = function ( slot, newValue )
	{
		if (newValue == 2){
			newValue = 0;
		}
		var data = this.getData();
		data = replaceAt( data, slot, "" + newValue );
		this.saveData( data );
	}
	
	function replaceAt( str, index, character) {
		return str.substr(0, index) + character + str.substr(index+character.length);
	}
	
	this.saveData = function( data ) {
		var game = new GameStorage();
		Cookies.set( this.title + "." + game.currentGame(), data, new Date(01,01,2029) );
	}

}