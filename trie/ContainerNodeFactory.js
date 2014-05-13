var ContainerNode = require("./ContainerNode.js");
var EmptyStringContainer = require("./EmptyStringContainer.js");

var ContainerNodeFactory = module.exports = function(burstStrategyConstructor)
{
    this.burstStrategyConstructor = burstStrategyConstructor;
};

ContainerNodeFactory.prototype.createNode = function(parent, key)
{
    return new ContainerNode(parent, key, this.burstStrategyConstructor());
};

ContainerNodeFactory.prototype.createNodeForEmptyString = function()
{
    return new EmptyStringContainer();
};