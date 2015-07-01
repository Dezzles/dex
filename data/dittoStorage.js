function DittoStorage ( ) {
	this.title = "dittos";
	this.saveBits = 1;
	this.maxValue = 1;
	BaseStorage(this);
	this.reset = function() {
		
		var data = [];
		while (data.length < 26 ) {
			data.push('0');
		}
		this.saveData( data );
	}

}