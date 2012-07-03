var ContainerNode = require("./ContainerNode.js");
var EmptyStringContainer = require("./EmptyStringContainer.js");
var LinePrefix = require("./LinePrefix.js");

var AccessTrieNode = module.exports = function ()
{
	this.id = Math.random();
    this.pointers = {};
};

AccessTrieNode.prototype.getType = function()
{
	return "ATN";
};

/**
 * Mid Level
 */

AccessTrieNode.prototype.add = function(key)
{
	if (this.isValidKey(key))
	{
		var container = this.get(key);

		if (!container)
		{
			container = this.createContainerForKey(key);
			this.set(key,container);
		}

		container.add(key.substr(1));
	}
};

AccessTrieNode.prototype.createContainerForKey = function(key)
{
	var keyIndex = this.getIndexOf(key);

	if (keyIndex == 0)
	{
		return new EmptyStringContainer();
	}
	else
	{
		return new ContainerNode(this,key.substr(0,1));
	}
}

/**
 * Low level
 */

AccessTrieNode.prototype.get = function(char)
{
	var charIndex = this.getIndexOf(char);

	return this.getAt(charIndex);
};

AccessTrieNode.prototype.getAt = function(index)
{
	return this.pointers[index];
};

AccessTrieNode.prototype.set = function(key,val)
{
	var curContainer = this.get(key);

	if (curContainer)
	{
		this.del(key);
	}

	var charIndex = this.getIndexOf(key);
	this.pointers[charIndex] = val;
};

AccessTrieNode.prototype.del = function(key)
{
	var charIndex = this.getIndexOf(key);
	delete this.pointers[charIndex];
};

AccessTrieNode.prototype.getIndexOf = function (key)
{
	if (!key || key == "")
		return 0;

	if (key.charCodeAt() > 64 && key.charCodeAt() < 91)
		return key.charCodeAt() - 64;

	if (key.charCodeAt() > 96 && key.charCodeAt() < 123)
		return key.charCodeAt() - 96;

	return 0;
};

AccessTrieNode.prototype.isValidKey = function (key)
{
	if (!key || key == "")
		return true;

	if (key.charCodeAt() > 64 && key.charCodeAt() < 91)
		return true;

	if (key.charCodeAt() > 96 && key.charCodeAt() < 123)
		return true;

	return false;
}

AccessTrieNode.prototype.asString = function (linePrefix)
{
	var output = "";
	var childPrefix;

	output += linePrefix.prefixLine("[AccessTrieNode id: " + this.id + "]");

	for (var i=0; i < 27; i++)
	{
		childPrefix = linePrefix.spawn("  " + this.getCharForIndex(i) + ": ");

		if (this.getAt(i))
		{
			output += this.getAt(i).asString(childPrefix);
		}
		else
		{
			output += childPrefix.prefixLine("");
		}
	}

	return output;
};

AccessTrieNode.prototype.getCharForIndex = function(index)
{
	return String.fromCharCode(64+index);
}