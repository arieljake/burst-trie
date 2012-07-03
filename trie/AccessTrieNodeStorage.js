

var AccessTrieNodeStorage = module.exports = function(containerNodeFactory)
{
	this.containerNodeFactory = containerNodeFactory;
	this.pointers = {};
};

AccessTrieNodeStorage.prototype.isValidKey = function (key)
{
	if (!key || key == "")
		return true;

	if (key.charCodeAt() > 64 && key.charCodeAt() < 91)
		return true;

	if (key.charCodeAt() > 96 && key.charCodeAt() < 123)
		return true;

	return false;
};

AccessTrieNodeStorage.prototype.getIndexOf = function (key)
{
	if (!key || key == "")
		return 0;

	if (key.charCodeAt() > 64 && key.charCodeAt() < 91)
		return key.charCodeAt() - 64;

	if (key.charCodeAt() > 96 && key.charCodeAt() < 123)
		return key.charCodeAt() - 96;

	return 0;
};

AccessTrieNodeStorage.prototype.del = function(key)
{
	var charIndex = this.getIndexOf(key);
	delete this.pointers[charIndex];
};

AccessTrieNodeStorage.prototype.set = function(key,val)
{
	var curContainer = this.get(key);

	if (curContainer)
	{
		this.del(key);
	}

	var charIndex = this.getIndexOf(key);
	this.pointers[charIndex] = val;
};

AccessTrieNodeStorage.prototype.getAt = function(index)
{
	return this.pointers[index];
};

AccessTrieNodeStorage.prototype.get = function(char)
{
	var charIndex = this.getIndexOf(char);

	return this.getAt(charIndex);
};

AccessTrieNodeStorage.prototype.getCharForIndex = function(index)
{
	return String.fromCharCode(64+index);
};

AccessTrieNodeStorage.prototype.add = function(key)
{
	if (this.isValidKey(key))
	{
		var container = this.get(key);

		if (!container)
		{
			container = this.createContainerForKey(key);
			this.set(key,container);
		}

		container.add(key.substr(1));
	}
};

AccessTrieNodeStorage.prototype.createContainerForKey = function(key)
{
	var keyIndex = this.getIndexOf(key);

	if (keyIndex == 0)
	{
		return this.containerNodeFactory.createNodeForEmptyString();
	}
	else
	{
		return this.containerNodeFactory.createNode(this,key.substr(0,1));
	}
};
