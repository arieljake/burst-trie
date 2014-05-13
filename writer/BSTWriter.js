var TrieNodeWriter = require("./TrieNodeWriter.js");

var BSTWriter = module.exports = {

    write: function(bst, linePrefix)
    {
        var output = "";

        output += linePrefix.prefixLine("[BST]");

        if (bst.root)
            output += TrieNodeWriter.write(bst.root, linePrefix.spawn("  "));

        return output;
    }
}