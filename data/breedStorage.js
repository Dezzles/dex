function BreedStorage ( set ) {
	this.title = "breeders" + set;
	this.saveBits = 1;
	this.maxValue = 1;
	BaseStorage(this);
	this.reset = function() {
		var u = 0;
		var data;
		data = "000000";
		this.saveData(data);
	}
	
}