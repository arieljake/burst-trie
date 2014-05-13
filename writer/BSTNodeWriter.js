var TrieNodeWriter = require("./TrieNodeWriter.js");

var BSTNodeWriter = module.exports = {

    write: function(node, linePrefix)
    {
        var output = "";
        var leftPrefix = linePrefix.spawn("  ");
        var rightPrefix = linePrefix.spawn("  ");

        if (node.value)
        {
            output += linePrefix.prefixLine(node.value);
        }
        else
        {
            output += linePrefix.prefixLine("<empty>");
        }

        if (node.left)
        {
            output += TrieNodeWriter.write(node.left, leftPrefix.spawn("L: "));
        }

        if (node.right)
        {
            output += TrieNodeWriter.write(node.right, rightPrefix.spawn("R: "));
        }

        return output;
    }
};