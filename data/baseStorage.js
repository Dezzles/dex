function BaseStorage ( parent ) {
	parent.loadedData = "";
	
	
	parent.getData = function() {
		var game = new GameStorage();
		var newData = parent.title + "." + game.getValue();
		if (parent.loadedData != newData) {
			parent.loadedData = newData;
			var data = Cookies.get( newData );
			if (data == null) {
				parent.reset();
				data = Cookies.get( newData );
			}
			parent.data = data.split("");
			if ( ( parent.requiredItems != null) && (parent.data.length < parent.requiredItems) ) {
				while ( parent.data.length < parent.requiredItems ) {
					parent.data.push( "0" );
				}
			}
		}
	}
		
	parent.saveData = function( data ) {
		var ret = data.join("");
		Cookies.set( parent.loadedData, ret, new Date(01,01,2029) );
	}
	
	function replaceAt( str, index, character) {
		return str.substr(0, index) + character + str.substr(index+character.length);
	}
	
	parent.getCode = function() {
		this.getData();
		var codeLength = Math.ceil( parent.data.length / ( 8 / this.saveBits ) );
		var encode = new Uint8Array( codeLength + 1 );
		for (var u in encode ) {
			encode[u] = 0;
		}
		var bitoffset = 0;
		var byteoffset = 0;
		for (var u in parent.data) {
			var value = parseInt(parent.data[u]);
			var t = value * Math.pow( 2, bitoffset );
			encode[byteoffset] += t;
			
			bitoffset += this.saveBits;
			if (bitoffset >= 8) {
				bitoffset = 0;
				byteoffset += 1;
			}
		}
		var arrOut = btoa(String.fromCharCode.apply(null, encode));
		var arrOut2 = arrOut;
		for (var v in arrOut) {
			if (arrOut[v] == '/')
				arrOut2 = replaceAt( arrOut2, parseInt(v), '-' );
		}
		return arrOut2;
	}
	
	parent.getValue = function ( slot ) {
	parent.getData();
		return parseInt(parent.data[ slot ]);
	}
	
	parent.setValue = function ( slot, newValue ) {
		if (newValue > parent.maxValue){
			newValue = 0;
		}
		parent.getData();
		parent.data[ slot ] = newValue;
		parent.saveData(parent.data);
	}

}