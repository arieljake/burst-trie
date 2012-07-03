var BurstTrie = require("./trie/BurstTrie.js");
var BurstTrieWriter = require("./trie/BurstTrieWriter.js");
var AccessTrieNodeFactory = require("./trie/AccessTrieNodeFactory.js");

module.exports.createTrie = function()
{
    return new BurstTrie(new AccessTrieNodeFactory());
};

module.exports.createTrieWriter = function()
{
	return new BurstTrieWriter();
};