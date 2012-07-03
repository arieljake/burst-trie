var BaseBurstStrategy = require("./BaseBurstStrategy.js");

/**
 * The rationale is to eliminate large containers, limiting total search costs.
 *
 * The burst trie with Limit is likely to be slow if there is a
 * container with less than K terms but all are very common, so that there are many accesses
 * to the container but not many direct hits.
 */

var LimitBurstStrategy = module.exports = function (threshold)
{
	this.threshold = threshold || 100;
	this.nodeCounter = 0;
};

LimitBurstStrategy.prototype = new BaseBurstStrategy();

LimitBurstStrategy.prototype.shouldBurst = function()
{
	return this.nodeCounter >= this.threshold;
};

LimitBurstStrategy.prototype.onAdd = function(container,node)
{
	this.nodeCounter++;
	this.considerBurst();
};

LimitBurstStrategy.prototype.toString = function()
{
	return "[LimitBurstStrategy ( threshold: " + this.threshold + " nodes: " + this.nodeCounter + " burst? " + this.shouldBurst() + "]";
}