

var BSTNode = module.exports = function (value,left,right)
{
    this.value = value;
    this.left = left;
    this.right = right;
};

BSTNode.prototype.getType = function()
{
    return "BIN";
}

BSTNode.prototype.compare = function(value)
{
	return value.localeCompare(this.value);
};

BSTNode.prototype.asString = function (linePrefix)
{
	var output = "";
	var childPrefix = linePrefix.spawn("  ");

	if (this.value)
	{
		output += linePrefix.prefixLine(this.value);
	}
	else
	{
		output += linePrefix.prefixLine("<empty>");
	}

	if (this.left)
	{
		if (this.left["asString"] !== undefined)
		{
			output += this.left.asString(childPrefix.spawn("L: "));
		}
		else
		{
			output += childPrefix.prefixLine(this.left.toString());
		}
	}

	if (this.right)
	{
		if (this.right["asString"] !== undefined)
		{
			output += this.right.asString(childPrefix.spawn("R: "));
		}
		else
		{
			output += childPrefix.prefixLine(this.right.toString());
		}
	}

	return output;
};