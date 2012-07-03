
var AccessTrieNode = module.exports = function (storage)
{
    this.id = Math.random();
	this.storage = storage;
};

AccessTrieNode.prototype.getType = function()
{
	return "ATN";
};

AccessTrieNode.prototype.add = function(key)
{
	this.storage.add(key);
};

AccessTrieNode.prototype.get = function(key)
{
	return this.storage.get(key);
};

AccessTrieNode.prototype.getAt = function(index)
{
	return this.storage.getAt(index);
};

AccessTrieNode.prototype.set = function(key,val)
{
	this.storage.set(key,val);
};

AccessTrieNode.prototype.del = function(key)
{
	this.storage.del(key);
};

AccessTrieNode.prototype.getIndexOf = function (key)
{
	return this.storage.getIndexOf(key);
};

AccessTrieNode.prototype.isValidKey = function (key)
{
	return this.storage.isValidKey(key);
};

AccessTrieNode.prototype.getCharForIndex = function(index)
{
	return this.storage.getCharForIndex(index);
};