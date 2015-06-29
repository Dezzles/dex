function DittoStorage ( ) {
	this.title = "dittos";
	this.saveBits = 1;
	this.maxValue = 1;
	BaseStorage(this);
	this.reset = function() {
		var data = "000000000000000000000000000000000000000000000000000000000000";
		this.saveData( data );
	}

}