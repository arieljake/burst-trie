var BSTNode = require("./BSTNode.js");

var BST = module.exports = function (root)
{
    this.root = root;
};

BST.prototype.getType = function()
{
	return "BST";
};

BST.prototype.add = function(value)
{
    //create a new item object, place data in
    var node = new BSTNode(value);
    var current;

    //special case: no items in the tree yet
    if (this.root === undefined)
    {
        this.root = node;
    }
    else 
    {
        current = this.root;

		while(true)
        {
			//if the new value is less than this node's value, go left
            if (current.compare(value) < 0)
            {
                //if there's no left, then the new node belongs there
                if (current.left === undefined)
                {
                    current.left = node;
                    break;
                } 
                else 
                {
                    current = current.left;
				}

            //if the new value is greater than this node's value, go right
            } 
            else if (current.compare(value) > 0)
            {
				//if there's no right, then the new node belongs there
                if (current.right === undefined)
                {
                    current.right = node;
					break;
                } 
                else 
                {
                    current = current.right;
				}

            //if the new value is equal to the current one, just ignore
            } 
            else 
            {
                break;
            }
        }
    }

	return node;
};

BST.prototype.contains = function(value)
{
    var found = false;
    var current = this.root;

    //make sure there's a node to search
    while(!found && current)
    {
        //if the value is less than the current node's, go left
        if (current.compare(value) < 0)
        {
            current = current.left;
        }
        
        //if the value is greater than the current node's, go right
        else if (current.compare(value) > 0)
        {
            current = current.right;
        }
        
        //values are equal, found it!
        else 
        {
            found = true;
        }
    }

    //only proceed if the node was found
    return found;
};

BST.prototype.get = function(value)
{
	var current = this.root;

	//make sure there's a node to search
	while(current)
	{
		//if the value is less than the current node's, go left
		if (current.compare(value) < 0)
		{
			current = current.left;
		}

		//if the value is greater than the current node's, go right
		else if (current.compare(value) > 0)
		{
			current = current.right;
		}

		//values are equal, found it!
		else
		{
			return current;
		}
	}

	//only proceed if the node was found
	return undefined;
};

BST.prototype.asString = function (linePrefix)
{
	var output = "";

	output += linePrefix.prefixLine("[BST]");

	if (this.root)
		output += this.root.asString(linePrefix.spawn("  "));

	return output;
};