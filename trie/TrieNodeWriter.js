var LinePrefix = require("./LinePrefix.js");

var TrieNodeWriter = module.exports = function()
{

};

TrieNodeWriter.writeNode = function (node,linePrefix)
{
	switch (node.getType())
	{
		case "ATN":
			return TrieNodeWriter.writeATN(node,linePrefix);

		case "CON":
			return TrieNodeWriter.writeCON(node,linePrefix);

		case "ESC":
			return TrieNodeWriter.writeESC(node,linePrefix);
	}
};

TrieNodeWriter.writeATN = function (atn,linePrefix)
{
	if (!linePrefix)
		linePrefix = new LinePrefix("");

	var output = "";
	var childPrefix;
	var child;

	output += linePrefix.prefixLine("[AccessTrieNode id: " + atn.id + "]");

	for (var i=0; i < 27; i++)
	{
		childPrefix = linePrefix.spawn("  " + atn.getCharForIndex(i) + ": ");
		child = atn.getAt(i);

		if (child)
		{
			output += TrieNodeWriter.writeNode(child,childPrefix);
		}
		else
		{
			output += childPrefix.prefixLine("");
		}
	}

	return output;
};

TrieNodeWriter.writeCON = function (con,linePrefix)
{
	var output = "";

	output += linePrefix.prefixLine("[ContainerNode prefix: " + con.prefix + "] " + con.burstStrategy.toString());

	if (con.bst)
		output += con.bst.asString(linePrefix.spawn("  "));

	return output;
};

TrieNodeWriter.writeESC = function (esc,linePrefix)
{
	var output = "";

	output += linePrefix.prefixLine("[EmptyStringContainer id: " + esc.id + " hasItem: " + esc.hasItem + "]");

	return output;
};