var AccessTrieNode = require("./AccessTrieNode.js");
var AccessTrieNodeStorage = require("./AccessTrieNodeStorage.js");
var ContainerNodeFactory = require("./ContainerNodeFactory.js");

var AccessTrieNodeFactory = module.exports = function(containerNodeFactory)
{
    this.containerNodeFactory = containerNodeFactory;
};

AccessTrieNodeFactory.prototype.createNode = function()
{
    return new AccessTrieNode(
        new AccessTrieNodeStorage(this.containerNodeFactory)
    );
}