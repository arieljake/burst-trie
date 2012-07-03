var BurstTrie = require("./BurstTrie.js");

var myTrie = new BurstTrie();

myTrie.add('CAR');
myTrie.add('CART');
myTrie.add('CARE');
myTrie.add('CARTS');
console.log(myTrie.toString());

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
