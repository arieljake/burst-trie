var BSTNode = require("../bst/BSTNode.js");

var EmptyStringContainer = module.exports = function ()
{
	this.id = Math.random();
	this.hasItem = false;
};

EmptyStringContainer.EmptyStringNode = new BSTNode("");

EmptyStringContainer.prototype.getType = function()
{
	return "ESC";
};

EmptyStringContainer.prototype.add = function(key)
{
	this.hasItem = true;
};

EmptyStringContainer.prototype.contains = function(key)
{
	return key == "" && this.hasItem;
};

EmptyStringContainer.prototype.get = function(key)
{
	if (key == "" && this.hasItem)
	{
		return EmptyStringContainer.EmptyStringNode;
	}
	else
	{
		return undefined;
	}
};