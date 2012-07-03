var BaseBurstStrategy = require("./BaseBurstStrategy.js");

/**
 * Whenever a container is created it is allocated a set amount of capital C.
 * The current capital is modified on each access.
 * 	On a direct hit, the capital is incremented by a bonus B.
 * 	If a record is accessed but is not a direct hit, the capital is decremented by a penalty M.
 * When the capital is exhausted, the container is burst.
 */

var TrendBurstStrategy = module.exports = function (initialCapital,hitCost,directHitBonus)
{
	this.capital = initialCapital;
	this.hitCost = hitCost;
	this.directHitBonus = directHitBonus;
};

TrendBurstStrategy.prototype = new BaseBurstStrategy();

TrendBurstStrategy.prototype.shouldBurst = function()
{
	return this.capital <= 0;
};

TrendBurstStrategy.prototype.onGet = function(container,result)
{
	if (result == container.bst.root)
		this.setCapital(this.capital + this.directHitBonus);
	else
		this.setCapital(this.capital - this.hitCost);
};

TrendBurstStrategy.prototype.setCapital = function(value)
{
	this.capital = value;
	this.considerBurst();
}

TrendBurstStrategy.prototype.toString = function()
{
	return "[TrendBurstStrategy (capital: " + this.capital + " hitCost: " + this.hitCost + " directHitBonus: " + this.directHitBonus + " burst? " + this.shouldBurst() + "]";
}