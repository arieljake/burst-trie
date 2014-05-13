var TrieNodeWriter = require("./TrieNodeWriter.js");

var ContainerNodeWriter = module.exports = {

    write: function(node, linePrefix)
    {
        var output = "";

        output += linePrefix.prefixLine("[ContainerNode prefix: " + node.prefix + "] " + node.burstStrategy.toString());

        if (node.bst)
            output += TrieNodeWriter.write(node.bst, linePrefix.spawn("  "));

        return output;
    }
}