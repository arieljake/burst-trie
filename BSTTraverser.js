

var BSTTraverser = module.exports = function()
{

};

BSTTraverser.traverse = function(bst,process,prefix)
{
	if (prefix === undefined)
		prefix = "";

	BSTTraverser.doTraverse(bst,process,prefix,BSTTraverser.inOrder);
};

BSTTraverser.doTraverse = function(bst,process,prefix,traversalFxn)
{
	var root;

	if (bst.getType() == "BST")
		root = bst.root;
	else
		root = bst;

	traversalFxn(root,process,prefix);
}

BSTTraverser.inOrder = function(node,process,prefix)
{
	if (node)
	{
		//traverse the left subtree
		if (node.left)
		{
			BSTTraverser.inOrder(node.left,process,prefix);
		}

		//call the process method on this node
		process.call(this, node, prefix);

		//traverse the right subtree
		if (node.right)
		{
			BSTTraverser.inOrder(node.right,process,prefix);
		}
	}
}