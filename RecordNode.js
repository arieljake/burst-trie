
var RecordNode = module.exports = function (value)
{
    this.value = value;
};

RecordNode.prototype.getType = function()
{
    return "REC";
}