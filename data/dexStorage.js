function DexStorage ( ) {
	this.title = "pokemon";
	this.maxValue = 3;
	this.saveBits = 2;
	BaseStorage(this);
	this.DecryptCode = function() {
		var save = Cookies.get("code");
		if (save == null)
			return "";
		var chunkSize = 4;
		var steps = 832 / chunkSize;
		var u = 0;
		var load = new Uint8Array(atob(save).split("").map(function(c) {
		return c.charCodeAt(0); }));
		while (u < steps) {
			var pkmnStart = u * chunkSize + 1;
			var pkmn = 0;
			var num = load[u];
			var counter = 3;
			
			while (pkmn < chunkSize) {
				this.data = this.data + (num & counter);
				num = num / 4;
				++pkmn;
			}
			++u;
		}
		Cookies.set("code", null);
	}
	
	this.reset = function() {
		var data = [];
		var u = 0;
		while (u < 1000 ) {
			data.push("0");
			u = u + 1;
		}
		this.saveData(data);
	}
	
}