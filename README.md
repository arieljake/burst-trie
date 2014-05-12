**Inspired by: Burst Tries: A Fast, Efficient Data Structure for String Keys**
[http://ww2.cs.mu.oz.au/~jz/fulltext/acmtois02.pdf](http://ww2.cs.mu.oz.au/~jz/fulltext/acmtois02.pdf)

For more information on Burst Tries: [See the Wiki](https://github.com/arieljake/burst-trie/wiki)

###Bottom Line

The burst trie has significant advantages over other data structures storing large sets of string keys:

* requires no more memory than a binary tree
* as fast as a trie; and, while not as fast as a hash table, a burst trie maintains the strings in sorted or near-sorted order
* compared to a splay tree, the fastest variant of a burst trie can accumulate the vocabulary of a 10 Gb collection of web data in less than 40% of the time, while using no more memory
* compared to a ternary search tree, the burst trie is around 25% faster and uses only 50% of the memory and far outperforms the adaptivity of a splay tree to store frequently-accessed records

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