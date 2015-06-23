function DexStorage ( ) {
	this.DecryptCode = function()
	{
		var save = Cookies.get("code");
		if (save == null)
			return "";
		var chunkSize = 4;
		var steps = 832 / chunkSize;
		var u = 0;
		var load = new Uint8Array(atob(save).split("").map(function(c) {
		return c.charCodeAt(0); }));
		while (u < steps)
		{
			var pkmnStart = u * chunkSize + 1;
			var pkmn = 0;
			var num = load[u];
			var counter = 3;
			
			while (pkmn < chunkSize)
			{
				this.data = this.data + (num & counter);
				num = num / 4;
				++pkmn;
			}
			++u;
		}
	}

	this.data = Cookies.get("pokemon");
	if (this.data == null)
	{
		this.data = "0";
		var u = 0;
		this.DecryptCode();
		while (u < 1000 )
		{
			this.data = this.data + "0";
			u = u + 1;
		}
		Cookies.set("pokemon", this.data, new Date(01,01,2019));
	}
	
	this.pokemonValue = function ( dexId )
	{
		return parseInt(this.data[ dexId ]);
	}
	
	this.update = function ( dexId, newValue )
	{
		if (newValue == 4){
			newValue = 0;
		}
		this.data = replaceAt( this.data, dexId, "" + newValue );
		Cookies.set("pokemon", this.data);
	}
	
	function replaceAt( str, index, character) {
		return str.substr(0, index) + character + str.substr(index+character.length);
	}
	

}