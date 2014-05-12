**Inspired by: Burst Tries: A Fast, Efficient Data Structure for String Keys**
[http://ww2.cs.mu.oz.au/~jz/fulltext/acmtois02.pdf](http://ww2.cs.mu.oz.au/~jz/fulltext/acmtois02.pdf)

For more information on Burst Tries: [See the Wiki](https://github.com/arieljake/burst-trie/wiki)

###Packages

Package | Description
------- | ----------- 
bst | Binary Search Tree
burst | Burst Strategies
trie | Burst Trie Implementation


###Basic Usage
```
var BurstTrie = require("../index.js");
var myTrie = BurstTrie.createTrie();

myTrie.add('CAR');
myTrie.add('CART');
myTrie.add('CARE');
myTrie.add('CARTS');
myTrie.get('CARE');
```

###Print Trie
```
var BurstTrieWriter = require("../trie/BurstTrieWriter.js");

BurstTrieWriter.writeTrie(myTrie)
```