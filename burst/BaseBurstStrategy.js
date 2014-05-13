var BSTTraverser = require("../bst/BSTTraverser.js");

var BaseBurstStrategy = module.exports = function () {
    this.container = undefined;
    this.accessTrieNodeFactory = undefined;
};

BaseBurstStrategy.prototype.setContainer = function (container) {
    this.container = container;
};

BaseBurstStrategy.prototype.setAccessTrieNodeFactory = function (accessTrieNodeFactory) {
    this.accessTrieNodeFactory = accessTrieNodeFactory;
};

BaseBurstStrategy.prototype.onGet = function (container, result) {

};

BaseBurstStrategy.prototype.onAdd = function (container, node) {

};

BaseBurstStrategy.prototype.shouldBurst = function () {
    return false;
};

BaseBurstStrategy.prototype.considerBurst = function () {
    if (this.container && this.shouldBurst()) {
        this.container.burst();
    }
};