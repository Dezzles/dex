function AbilityStorage ( ) {
	this.title = "abilities";
	this.saveBits = 1;
	this.minLength = 400;
	this.maxValue = 1;
	BaseStorage(this);
	
	this.reset = function() {
		var data = "0";
		while (data.length < this.minLength) {
			data = data + "0";
		}
		this.saveData(data);
	}
}