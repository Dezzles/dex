function BaseStorage ( parent ) {
	parent.getData = function() {
		var game = new GameStorage();
		var data = Cookies.get(parent.title + "." + game.getValue());
		if (data == null) {
			parent.reset();
			data = Cookies.get( parent.title + "." + game.getValue());
		} 
		return data;
	}
		
	parent.saveData = function( data ) {
		var game = new GameStorage();
		Cookies.set( parent.title + "." + game.getValue(), data, new Date(01,01,2029) );
	}
	
	function replaceAt( str, index, character) {
		return str.substr(0, index) + character + str.substr(index+character.length);
	}
	
	parent.getCode = function() {
		var data = this.getData();
		var codeLength = Math.ceil( data.length / ( 8 / this.saveBits ) );
		var encode = new Uint8Array( codeLength + 1 );
		for (var u in encode ) {
			encode[u] = 0;
		}
		var bitoffset = 0;
		var byteoffset = 0;
		for (var u in data) {
			var value = parseInt(data[u]);
			var t = value * Math.pow( 2, bitoffset );
			encode[byteoffset] += t;
			
			bitoffset += this.saveBits;
			if (bitoffset >= 8) {
				bitoffset = 0;
				byteoffset += 1;
			}
		}
		
		return btoa(String.fromCharCode.apply(null, encode));
	}
	
	parent.getValue = function ( slot ) {
		var data = this.getData();
		return parseInt(data[ slot ]);
	}
	
	parent.setValue = function ( slot, newValue ) {
		if (newValue > parent.maxValue){
			newValue = 0;
		}
		var data = parent.getData();
		data = replaceAt( data, slot, "" + newValue );
		parent.saveData(data);
	}

}