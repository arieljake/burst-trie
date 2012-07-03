var AccessTrieNode = require("./AccessTrieNode.js");
var AccessTrieNodeStorage = require("./AccessTrieNodeStorage.js");
var BurstStrategyFactory = require("../burst/BurstStrategyFactory.js");
var ContainerNodeFactory = require("./ContainerNodeFactory.js");

var AccessTrieNodeFactory = module.exports = function()
{
	this.burstStrategyFactory = new BurstStrategyFactory(this);
	this.containerNodeFactory = new ContainerNodeFactory(this.burstStrategyFactory);
};

AccessTrieNodeFactory.prototype.createNode = function()
{
    return new AccessTrieNode(
		new AccessTrieNodeStorage(this.containerNodeFactory)
	);
}