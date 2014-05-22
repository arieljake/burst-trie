var BurstTrie = require("./trie/BurstTrie.js");
var StrategyConstructorFactory = require("./burst/StrategyConstructorFactory.js");
var AccessTrieNodeFactory = require("./trie/AccessTrieNodeFactory.js");
var ContainerNodeFactory = require("./trie/ContainerNodeFactory.js");

module.exports.createTrie = function(options)
{
    options = options || new Object();

    var burstStrategyName = options.burstStrategy || "limit";
    var burstStrategyConstructor = StrategyConstructorFactory.createStrategyConstructor(burstStrategyName, options.strategyOptions);
    var containerNodeFactory = new ContainerNodeFactory(burstStrategyConstructor);
    var accessTrieNodeFactory = new AccessTrieNodeFactory(containerNodeFactory);

    return new BurstTrie(accessTrieNodeFactory);
};