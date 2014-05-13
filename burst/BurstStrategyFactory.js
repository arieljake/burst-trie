var RatioStrategy = require("./RatioBurstStrategy.js");
var LimitStrategy = require("./LimitBurstStrategy.js");
var TrendStrategy = require("./TrendBurstStrategy.js");

module.exports.createStrategyConstructor = function(name, options)
{
    options = options || new Object();

    switch (name)
    {

        case "limit":
            var threshold = options.threshold || 10;

            return function()
            {
                return new LimitStrategy(threshold);
            };

        case "trend":
            var initialCapital = options.initialCapital || 100;
            var hitCost = options.hitCost || 5;
            var directHitBonus = options.directHitBonus || 10;

            return function()
            {
                return new TrendStrategy(initialCapital, hitCost, directHitBonus);
            };

        case "ratio":

            return function()
            {
                return new RatioStrategy();
            }
    }
}