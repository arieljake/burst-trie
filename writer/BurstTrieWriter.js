var TrieNodeWriter = require("./TrieNodeWriter.js");

var BurstTrieWriter = module.exports = {

    write: function(trie)
    {
        var output = "";

        output += "[BurstTrie] \n";

        if (trie.root)
            output += TrieNodeWriter.write(trie.root);

        return output;
    }
}