function EggGroupStorage ( set ) {
	this.title = "eggGroups" + set;
	this.saveBits = 1;
	this.maxValue = 1;
	BaseStorage(this);
	
	this.reset = function() {
		var u = 0;
		var data;
		data = "000000000000000000";
		this.saveData(data);
	}
		
}
