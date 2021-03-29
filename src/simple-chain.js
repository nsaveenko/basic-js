const chainMaker = {
  chainState: [],
  getLength() {
    return this.chainState.filter(element => element !== '').length;
  },
  addLink(value) {
    this.chainState.push(value);
    return this;
  },
  removeLink(position) {
    if (this.chainState[position] === undefined) {
      this.chainState = [];
      throw new Error('Wrong position');
    }
    this.chainState[position - 1] = '';
    this.chainState = this.chainState.filter(element => element !== '');
    return this;
  },
  reverseChain() {
    this.chainState = this.chainState.reverse();
    return this;
  },
  finishChain() {
    const result = this.chainState.filter(element => element !== '').map(element => `~~( ${element} )`).join('').substring(2);
    this.chainState = [];
    return result;
  }
};

module.exports = chainMaker;
