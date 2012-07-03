var BurstStrategies = require("./BurstStrategies.js");

var BurstStrategyFactory = module.exports = function (accessTrieNodeFactory)
{
	this.accessTrieNodeFactory = accessTrieNodeFactory;
};

BurstStrategyFactory.prototype.createInstance = function()
{
	return BurstStrategies.default(this.accessTrieNodeFactory);
}