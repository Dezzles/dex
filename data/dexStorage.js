function DexStorage ( ) {
	this.title = "pokemon";

	this.DecryptCode = function() {
		var save = Cookies.get("code");
		if (save == null)
			return "";
		var chunkSize = 4;
		var steps = 832 / chunkSize;
		var u = 0;
		var load = new Uint8Array(atob(save).split("").map(function(c) {
		return c.charCodeAt(0); }));
		while (u < steps) {
			var pkmnStart = u * chunkSize + 1;
			var pkmn = 0;
			var num = load[u];
			var counter = 3;
			
			while (pkmn < chunkSize) {
				this.data = this.data + (num & counter);
				num = num / 4;
				++pkmn;
			}
			++u;
		}
		Cookies.set("code", null);
	}
	
	this.getData = function() {
		var game = new GameStorage();
		var data = Cookies.get(this.title + "." + game.currentGame());
		if (data == null) {
			data = "0";
			var u = 0;
			this.DecryptCode();
			while (u < 1000 ) {
				data = data + "0";
				u = u + 1;
			}
			this.saveData(data);
		}
		return data;
	}
	
	this.reset = function() {
		var data = "0";
		var u = 0;
		while (u < 1000 ) {
			data = data + "0";
			u = u + 1;
		}
		this.saveData(data);
	}
	
	this.pokemonValue = function ( dexId ){
		var data = this.getData();
		return parseInt(data[ dexId ]);
	}
	
	this.update = function ( dexId, newValue ) {
		if (newValue == 4){
			newValue = 0;
		}
		var data = this.getData();
		data = replaceAt( data, dexId, "" + newValue );
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