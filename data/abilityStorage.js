function AbilityStorage ( ) {
	this.title = "abilities";
	this.saveBits = 2;
	this.minLength = 400;
	this.maxValue = 2;
	BaseStorage(this);
	
	this.reset = function() {
		var data = "0";
		while (data.length < this.minLength) {
			data = data + "0";
		}
		this.saveData(data);
	}
}