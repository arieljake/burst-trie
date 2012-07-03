var BaseBurstStrategy = require("./BaseBurstStrategy.js");

/**
 * Requiring a high rate of direct hits for
 * containers would seem, in principle, to make similar speed possible for burst tries.
 *
 * A drawback of Ratio is the additional memory required
 * to maintain two counters per container, and the number of tests required at each access.
 */

var RatioBurstStrategy = module.exports = function ()
{
	this.searchCount = 0; // the number of times a container has been searched
	this.directHitCount = 0; // the number of searches that have ended successfully at the root node of that container
};

RatioBurstStrategy.prototype = new BaseBurstStrategy();

RatioBurstStrategy.prototype.shouldBurst = function()
{
	return this.searchCount >= 100 && this.getRatio() < .8;
};

RatioBurstStrategy.prototype.getRatio = function()
{
	return this.directHitCount / this.searchCount;
}

RatioBurstStrategy.prototype.onGet = function(container,result)
{
	this.searchCount++;

	if (result == container.bst.root)
		this.directHitCount++;

	this.considerBurst();
};

RatioBurstStrategy.prototype.toString = function()
{
	return "[RatioBurstStrategy (searches: " + this.searchCount + " directHits: " + this.directHitCount + " ratio: " + this.getRatio() + " burst? " + this.shouldBurst() + "]";
}