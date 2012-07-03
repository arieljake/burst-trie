var BurstTrie = require("../index.js");
var BurstTrieWriter = require("../trie/BurstTrieWriter.js");

var myTrie = BurstTrie.createTrie();

myTrie.add('CAR');
myTrie.add('CART');
myTrie.add('CARE');
myTrie.add('CARTS');

console.log(BurstTrieWriter.writeTrie(myTrie));

// doGets(myTrie);
// testTrie(myTrie);

function doGets(trie)
{
	for (var i=0; i < 60; i++)
	{
		trie.get('CARE');
	}
}

function testTrie(trie)
{
	console.log(trie.contains('C'));
	console.log(trie.contains('CAR'));
	console.log(trie.contains('CARE'));
	console.log(trie.contains('CART'));
	console.log(trie.contains('CARTS'));
	console.log(trie.contains('CARTIS'));
}
