var TrieNodeWriter = require("./TrieNodeWriter.js");

var AccessTrieNodeWriter = module.exports = {

    write: function(node, linePrefix)
    {
        var output = "";
        var childPrefix;
        var child;

        output += linePrefix.prefixLine("[AccessTrieNode id: " + node.id + "]");

        for (var i = 0; i < 27; i++)
        {
            childPrefix = linePrefix.spawn("  " + node.getCharForIndex(i) + ": ");
            child = node.getAt(i);

            if (child)
            {
                output += TrieNodeWriter.write(child, childPrefix);
            }
            else
            {
                output += childPrefix.prefixLine("");
            }
        }

        return output;
    }
}