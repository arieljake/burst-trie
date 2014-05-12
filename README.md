Inspired by:

## [Burst Tries: A Fast, Efficient Data Structure for String Keys](http://ww2.cs.mu.oz.au/~jz/fulltext/acmtois02.pdf)

> Many applications depend on efficient management of large sets of distinct strings in memory. For example, during index construction for text databases a record is held for each distinct word in the text, containing the word itself and information such as counters. We propose a new data structure, the burst trie, that has significant advantages over existing options for such applications: it requires no more memory than a binary tree; it is as fast as a trie; and, while not as fast as a hash table, a burst trie maintains the strings in sorted or near-sorted order. Compared to a splay tree, the fastest variant of a burst trie can accumulate the vocabulary of a 10 Gb collection of web data in less than 40%of the time, while using no more memory. Compared to a ternary search tree, the burst trie is around 25% faster and uses only 50% of the memory. Analysing the superior performance of the burst trie in comparison to other structures, we show that the ability of a burst trie to store frequently-accessed records in locations that are close to the root of containers far outperforms the adaptivity of a splay tree.
> 
> This structure is a collection of small data structures, which we call containers, that are accessed via a conventional trie, which in this context we call an access trie. Searching involves using the first few characters of a query string to identify a particular container, then using the remainder of the query string to find a record in the container. A container can be any data structure that is reasonably efficient for small sets of strings, such as a list or a binary search tree. The general principle for maintaining a burst trie is that, initially, it consists of a single container. When a container is deemed to be inefficient, it is burst, that is, replaced by a trie node and a set of child containers which between them partition the original container’s strings. Thus there are two major design decisions to be explored for burst tries: what data structure to use for a container; and how to determine when a container should be burst.
>
> We experimentally determine good choices of parameters, and compare burst tries to other structures used for the same task, with a variety of data sets. These experiments show that the burst trie is particularly effective for the skewed frequency distributions common in text collections, and dramatically outperforms all other data structures for the task of managing strings while maintaining sort order.


A burst trie consists of three distinct components, a set of records, a set of containers, and an access trie:

###Records
A record contains a string; information as required by the application using the burst trie (that is, for information such as statistics or word locations); and pointers as required to maintain the container holding the record. Each string is unique.

###Containers
A container is a small set of records, maintained as a simple data structure such as a list or a BST. For a container at depth k in a burst trie (depth is discussed below), all strings have length at least k, and the first k characters of all strings are identical. It is not necessary to store these first k characters. Each container also has a header, for storing the statistics used by heuristics for bursting.

Thus a particular container at depth 3 containing "author" and "automated" could also contain "autopsy" but not "auger". Choice of data structure for representing containers is considered later.

###Access trie
An access trie is a trie whose leaves are containers. Each node consists of an array p, of length |A|, of pointers, each of which may point to either a trie node or a container, and a single empty-string pointer to a record. The |A| array locations are indexed by the characters c in the set of A. The remaining pointer is indexed by the empty string.

The depth of the root is defined to be 1. Leaves are at varying depths.

As discussed in Section 6, there are more compact forms of trie, designed to alleviate the space wasted by sparse nodes. However, by design the nodes in an access trie should rarely be sparse, and compact nodes are more costly to traverse and maintain. As we show, for small alphabets the use of simple arrays does not lead to excessive space usage; for large alphabets, other strategies-- such as dividing symbols into bytes-- have to be explored, as is true for tries in general.

![image](https://github.com/arieljake/burst-trie/blob/master/docs/burst-trie-1.png)

