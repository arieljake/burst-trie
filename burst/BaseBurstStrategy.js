var BSTTraverser = require("../bst/BSTTraverser.js");

var BaseBurstStrategy = module.exports = function()
{
	this.container = undefined;
	this.accessTrieNodeFactory = undefined;
};

BaseBurstStrategy.prototype.setContainer = function(container)
{
	this.container = container;
};

BaseBurstStrategy.prototype.setAccessTrieNodeFactory = function(accessTrieNodeFactory)
{
	this.accessTrieNodeFactory = accessTrieNodeFactory;
};

BaseBurstStrategy.prototype.onGet = function(container,result)
{

};

BaseBurstStrategy.prototype.onAdd = function(container,node)
{

};

BaseBurstStrategy.prototype.shouldBurst = function()
{
	return false;
};

BaseBurstStrategy.prototype.considerBurst = function()
{
	if (this.container && this.shouldBurst())
	{
		this.container.burst();
	}
};

BaseBurstStrategy.prototype.burstContainer = function(container)
{
	if (container.bst)
	{
		var AccessTrieNode = require("../trie/AccessTrieNode.js");
		var atn = this.accessTrieNodeFactory.createNode();

		BSTTraverser.traverse(container.bst,function (node)
		{
			atn.add(node.value);
		});

		delete container.bst;
		container.parent.set(container.prefix,atn);
	}
}