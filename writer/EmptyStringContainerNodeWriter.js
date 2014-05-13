var EmptyStringContainerNodeWriter = module.exports = {

    write: function(node, linePrefix)
    {
        var output = "";

        output += linePrefix.prefixLine("[EmptyStringContainer id: " + node.id + " hasItem: " + node.hasItem + "]");

        return output;
    }
}