var BSTTraverser = require("../bst/BSTTraverser.js");

var ATNTraverser = module.exports = function()
{

};

ATNTraverser.traverse = function(atn,process,prefix)
{
	if (prefix === undefined)
		prefix = "";

	ATNTraverser.doTraverse(atn,process,prefix,ATNTraverser.inOrder);
};

ATNTraverser.doTraverse = function(atn,process,prefix,traversalFxn)
{
	traversalFxn(atn,process,prefix);
}

ATNTraverser.inOrder = function(atn,process,prefix)
{
	if (atn)
	{
		for (var i=0; i <= 27; i++)
		{
			var value = atn.getAt(i);

			if (value !== undefined)
			{
				if (value.getType() == "ATN")
				{
					ATNTraverser.inOrder(value,process,prefix + value.getCharForIndex(i).toLowerCase());
				}
				else if (value.getType() == "CON")
				{
					BSTTraverser.traverse(value.bst,process,prefix + value.prefix);
				}
				else if (value.getType() == "ESC")
				{
					var node = value.get("");

					if (node)
					{
						BSTTraverser.traverse(node,process,prefix);
					}
				}
			}
		}
	}
}