var ContainerNode = require("./ContainerNode.js");
var EmptyStringContainer = require("./EmptyStringContainer.js");
var BurstStrategies = require("../burst/BurstStrategies.js");

var ContainerNodeFactory = module.exports = function(burstStrategyFactory)
{
	this.burstStrategyFactory = burstStrategyFactory;
};

ContainerNodeFactory.prototype.createNode = function(parent,key)
{
    return new ContainerNode(parent,key,this.burstStrategyFactory.createInstance());
};

ContainerNodeFactory.prototype.createNodeForEmptyString = function()
{
    return new EmptyStringContainer();
};