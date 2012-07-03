var us = require("underscore.string");

var LinePrefix = module.exports = function(initialPrefix)
{
	this.prefix = initialPrefix;
	this.lastLine = undefined;
};

LinePrefix.prototype.spawn = function(additionalPrefix)
{
	return new LinePrefix(this.prefix + additionalPrefix);
};

LinePrefix.prototype.prefixLine = function(line)
{
	this.lastLine = this.prefix + line + "\n";

	return this.lastLine;
};

LinePrefix.prototype.centerLine = function(line)
{
	var offsetLeft = this.prefix.length - (line.length/2);

	this.lastLine = us.repeat("  ",offsetLeft) + line + "\n";

	return this.lastLine;
};

LinePrefix.prototype.splitLine = function(left,right)
{
	var center = this.prefix.length;
	var itemLen = Math.max(left.length,right.length);
	var gapLen = 2;

	var leftSplit = center - (gap/2) - itemLen;

	this.lastLine = us.repeat("  ",leftSplit) + right + us.repeat("  ",gap) + right;

	return this.lastLine;
}

LinePrefix.prototype.centered = function()
{
	var center = this.prefix.length + (this.lastLine.length/2);

	return new LinePrefix(us.repeat("  ",center));
};

LinePrefix.prototype.centeredLeft = function(leftOffset)
{
	var centerLeft = this.prefix.length - leftOffset;

	return new LinePrefix(us.repeat("  ",centerLeft));
};

LinePrefix.prototype.centeredRight = function(leftOffset)
{
	var centerLeft = this.prefix.length + leftOffset;

	return new LinePrefix(us.repeat("  ",centerLeft));
};