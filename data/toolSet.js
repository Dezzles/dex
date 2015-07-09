function ToolData( names, links ) {
	this.name = names;
	this.link = links;
}

function ToolSetStorage ( ) {
	this.tools = [];
	this.RegisterTool = function( name, link ) {
		this.tools.push (  new ToolData( name, link ) );
	}
}
var ToolSet = new ToolSetStorage();

