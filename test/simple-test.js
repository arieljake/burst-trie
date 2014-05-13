var BurstTrie = require("../index.js");
var BurstTrieWriter = require("../writer/BurstTrieWriter.js");
var assert = require("chai").assert;

describe("burst-trie", function()
{
    var myTrie;

    before(function()
    {
        myTrie = BurstTrie.createTrie();
        myTrie.add('CAR');
        myTrie.add('CART');
        myTrie.add('CARE');
        myTrie.add('CARTS');
        myTrie.add('CARS');
        myTrie.add('CARED');
        myTrie.add('CAB');
    })

    it("added keys are contained", function()
    {
        assert.equal(myTrie.contains('C'), false, "C should not exist");
        assert.equal(myTrie.contains('CAR'), true, "CAR should exist");
        assert.equal(myTrie.contains('CARE'), true, "CARE should exist");
        assert.equal(myTrie.contains('CART'), true, "CART should exist");
        assert.equal(myTrie.contains('CARTS'), true, "CARTS should exist");
        assert.equal(myTrie.contains('CARTIS'), false, "CARTIS should not exist");
    })

    it("prints correctly", function()
    {
        var output = BurstTrieWriter.write(myTrie);
        var lines = output.split("\n");
        var CLines = [];

        assert(lines[0].indexOf("BurstTrie") >= 0);
        assert(lines[1].indexOf("AccessTrieNode") >= 0);

        for (var i = 2; i < lines.length; i++)
        {
            var line = lines[i].trim();
            var parts = line.split(":");
            var char = parts[0].trim();

            if (char == "C")
            {
                CLines.push(line);
            }
            else if (char.length == 1)
            {
                assert(parts[1].length == 0, char + " line should be empty");
            }
        }

        assert(CLines[0].indexOf("ContainerNode") >= 0);
        assert(CLines[1].indexOf("BST") >= 0);

        console.log(output);
    })
})