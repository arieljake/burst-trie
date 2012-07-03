
var TrieNodeWriter = require("./TrieNodeWriter.js");
var LinePrefix = require("./LinePrefix.js");

var BurstTrieWriter = module.exports = function()
{

};

BurstTrieWriter.writeTrie = BurstTrieWriter.prototype.writeTrie = function(trie)
{
	var output = "";

	output += "[BurstTrie] \n";

	if (trie.root)
		output += TrieNodeWriter.writeNode(trie.root,new LinePrefix("  "));

	return output;
}