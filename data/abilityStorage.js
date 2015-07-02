function AbilityStorage ( ) {
	this.title = "abilities";
	this.saveBits = 2;
	this.minLength = 400;
	this.maxValue = 2;
	BaseStorage(this);
	
	this.reset = function() {
		var data = [];
		while (data.length < this.minLength) {
			data.push('0');
		}
		this.saveData(data);
	}
}