function BreedStorage ( set ) {
	this.title = "breeders" + set;
	this.getData = function() {
		var game = new GameStorage();
		var data = Cookies.get(this.title + "." + game.currentGame());
		if (data == null) {
			data = "000000";
			this.saveData(data);
		} 
		return data;
	}
	
	this.reset = function() {
		var u = 0;
		var data;
		data = "000000";
		this.saveData(data);
	}
	
	this.statValue = function ( slot )
	{
		var data = this.getData();
		return parseInt(data[ slot ]);
	}
	
	this.update = function ( slot, newValue )
	{
		var data = this.getData();
		if (newValue == 2){
			newValue = 0;
		}
		data = replaceAt( data, slot, "" + newValue );
		this.saveData(data);
	}
	
	this.saveData = function( data ) {
		var game = new GameStorage();
		Cookies.set( this.title + "." + game.currentGame(), data, new Date(01,01,2029) );
	}
	
	function replaceAt( str, index, character) {
		return str.substr(0, index) + character + str.substr(index+character.length);
	}
}