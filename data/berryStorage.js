function BerryStorage ( ) {
	this.title = "berries";
	this.saveBits = 1;
	this.maxValue = 1;
	this.requiredItems = 100;
	BaseStorage(this);
	
	this.reset = function() {
		var u = 0;
		var data = [];
		while ( u < requiredItems ) {
			data.push( '0' );
			u += 1;
		}
		this.saveData(data);
	}
		
}
