var AccessTrieNode = require("./AccessTrieNode.js");
var LinePrefix = require("./LinePrefix.js");

var BurstTrie = module.exports = function (root)
{
    this.root = root || undefined;
};

BurstTrie.prototype.getType = function()
{
    return "BUR";
}

BurstTrie.prototype.add = function(key)
{
	if (this.root == undefined)
	{
		this.root = new AccessTrieNode();
	}

	this.root.add(key);
};

BurstTrie.prototype.contains = function (key)
{
    var curDepth = 0;
    var maxDepth = key.length;
    var curNode = this.root;
    var char;

    while (curNode !== undefined && curNode.getType() == "ATN" && curDepth < maxDepth)
    {
		curNode = curNode.get(key[curDepth]);
		curDepth++;
	}

	var remainingKey = key.substr(curDepth);

	if (curNode.getType() == "CON")
	{
		return curNode.contains(remainingKey);
	}
	else if (curNode.getType() == "ATN" && remainingKey.length == 0)
	{
		var container = curNode.get(remainingKey);

		return (container !== undefined) && container.contains(remainingKey);
	}
	else
	{
		return false;
	}
};

BurstTrie.prototype.get = function (key)
{
	var curDepth = 0;
	var maxDepth = key.length;
	var curNode = this.root;
	var char;

	while (curNode !== undefined && curNode.getType() == "ATN" && curDepth < maxDepth)
	{
		curNode = curNode.get(key[curDepth]);
		curDepth++;
	}

	var prefix = key.substring(0,curDepth);

	if (!curNode)
	{
		return undefined;
	}
	else if (curNode.getType() == "CON")
	{
		return {
			prefix: prefix,
			node: curNode
		};
	}
	else if (curNode.getType() == "ATN")
	{
		return {
			prefix: prefix,
			node: curNode
		};
	}
};

BurstTrie.prototype.toString = function()
{
	var output = "";

	output += "[BurstTrie] \n";

	if (this.root)
		output += this.root.asString(new LinePrefix("  "));

	return output;
}