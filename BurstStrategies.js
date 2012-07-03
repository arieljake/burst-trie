

module.exports.Ratio = require("./RatioBurstStrategy.js");
module.exports.Limit = require("./LimitBurstStrategy.js");
module.exports.Trend = require("./TrendBurstStrategy.js");

module.exports.default = function ()
{
	return new module.exports.Limit(10);
	return new module.exports.Trend(100,5,10);
	return new module.exports.Ratio();
}