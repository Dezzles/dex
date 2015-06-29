function CodeStorage ( val, offset ) {
	this.data = [];
	this.oldCode = val;
	this.DecryptCode = function( val ) {
		var load = new Uint8Array(atob(val).split("").map(function(c) {
		return c.charCodeAt(0); }));
		for (var u in load) {
			var tt = 0;
			while (tt < 8 / offset) {
				var power = Math.pow(2, (tt + 1) * offset) - 1;
				var res = (power & load[u]) >>> (tt * offset);
				this.data.push( "" + res ); 
				tt += 1;
			}
		}
	}
	this.DecryptCode( val );
	this.getValue = function ( dexId ){
		return parseInt(this.data[ dexId ]);
	}
	this.setValue = function( va, vb ) {
	
	}
	
	this.getCode = function() {
		return this.oldCode;
	}
	
	
	
	function replaceAt( str, index, character) {
		return str.substr(0, index) + character + str.substr(index+character.length);
	}
	

}