var BST = require("../bst/BST.js");

/**
 * With BSTs, the position of a record in the tree depends not on its frequency, but on the insertion order.
 *
 * This property can be used to reduce likely search costs: when a BST is burst, the records
 * can be sorted by decreasing frequency, then distributed to the new containers. Doing
 * so means that the most frequent terms are likely to be the root nodes in their containers.
 * As for linked lists, this requires that each record stores a frequency count.
 */
var ContainerNode = module.exports = function (parent,prefix,burstStrategy)
{
	this.parent = parent;
	this.prefix = prefix;
	this.burstStrategy = burstStrategy;
	this.burstStrategy.setContainer(this);
	this.bst = undefined;
};

ContainerNode.prototype.getType = function()
{
    return "CON";
};

ContainerNode.prototype.add = function(key)
{
	if (!this.bst)
	{
		this.bst = new BST();
	}

	var node = this.bst.add(key);

	this.burstStrategy.onAdd(this,node);
};

ContainerNode.prototype.contains = function(key)
{
	if (!this.bst)
		return false;

    return this.bst.contains(key);
};

ContainerNode.prototype.get = function(key)
{
	if (!this.bst)
		return null;

	var result = this.bst.get(key);

	this.burstStrategy.onGet(this,result);

	return result;
};

ContainerNode.prototype.burst = function()
{
	this.burstStrategy.burstContainer(this);
};