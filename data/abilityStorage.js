function AbilityStorage ( ) {
	this.title = "abilities";
	this.minLength = 400;
	this.data = Cookies.get(this.title);
	if (this.data == null)
	{
		this.data = "0";
		while (this.data.length < this.minLength) {
			this.data = this.data + "0";
		}
		Cookies.set(this.title, this.data, new Date(01,01,2029));
	}
	while (this.data.length < this.minLength) {
		this.data = this.data + "0";
	}
	Cookies.set(this.title, this.data, new Date(01,01,2029));
	
	this.statValue = function ( slot )
	{
		return parseInt(this.data[ slot ]);
	}
	
	this.updateValue = function ( slot, newValue )  
	{
		if (newValue == 2){
			newValue = 0;
		}
		this.data = replaceAt( this.data, slot, "" + newValue );
		Cookies.set(this.title, this.data, new Date(1,1,2029));
	}
	
	function replaceAt( str, index, character) {
		return str.substr(0, index) + character + str.substr(index+character.length);
	}
}