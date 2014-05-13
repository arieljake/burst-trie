var LinePrefix = require("./LinePrefix.js");

var TrieNodeWriter = module.exports;

TrieNodeWriter.write = function(node, linePrefix)
{
    if (!linePrefix)
        linePrefix = new LinePrefix("");

    var writer = TrieNodeWriter.getWriter(node.getType());

    return writer.write(node, linePrefix);
};

TrieNodeWriter.getWriter = function(type)
{
    switch (type)
    {
        case "ATN":
            return require("./AccessTrieNodeWriter.js");

        case "CON":
            return require("./ContainerNodeWriter.js");

        case "ESC":
            return require("./EmptyStringContainerNodeWriter.js");

        case "BST":
            return require("./BSTWriter.js");

        case "BIN":
            return require("./BSTNodeWriter.js");

        default:
            throw new Error("undefined node type: " + type);
    }
}