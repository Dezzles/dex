function BreedStorage ( set ) {
	this.title = "breeders" + set;
	this.data = Cookies.get(this.title);
	if (this.data == null)
	{
		this.data = "000000";
		Cookies.set(this.title, this.data, new Date(01,01,2029));
	}
	
	this.statValue = function ( slot )
	{
		return parseInt(this.data[ slot ]);
	}
	
	this.update = function ( slot, newValue )
	{
		if (newValue == 2){
			newValue = 0;
		}
		this.data = replaceAt( this.data, slot, "" + newValue );
		Cookies.set(this.title, this.data);
	}
	
	function replaceAt( str, index, character) {
		return str.substr(0, index) + character + str.substr(index+character.length);
	}
}