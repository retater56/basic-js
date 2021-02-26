const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = " ";
    }
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (typeof position != "number" || position <= 0 || position > (this.getLength - 1)) {
      this.chain = [];
      throw Error;
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finish = `( ${ this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return finish;
  }
};

module.exports = chainMaker;