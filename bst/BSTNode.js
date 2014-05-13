var BSTNode = module.exports = function(value, left, right)
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