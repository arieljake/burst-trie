

module.exports.Ratio = require("./RatioBurstStrategy.js");
module.exports.Limit = require("./LimitBurstStrategy.js");
module.exports.Trend = require("./TrendBurstStrategy.js");

module.exports.default = function (accessTrieNodeFactory)
{
	var strategy;

	strategy = new module.exports.Limit(10);
//	strategy = new module.exports.Trend(100,5,10);
// 	strategy = new module.exports.Ratio();

	strategy.setAccessTrieNodeFactory(accessTrieNodeFactory);

	return strategy;
}