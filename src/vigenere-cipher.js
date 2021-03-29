class VigenereCipheringMachine {

  constructor(reverse = true) {

    this.reverse = reverse;

  }

  addKey(message, key) {
    key = key.toLowerCase();
    let result = '';
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (/[a-z]/.test(message[i])) {
        if (j == key.length) {
          j = 0;
        }
        result += key[j];
        j += 1;
      } else {
        result += message[i];
      }
    }
    return result;
  }

  encrypt(message, key) {

    if (!message || !key) {
      throw new Error();
    }

    message = message.toLowerCase();

    key = this.addKey(message, key).split('').map((item, index) => {
      if (!(/[a-z]/.test(item))) {
        return item;
      }
      return String.fromCharCode((item.charCodeAt() - 97 + message[index].charCodeAt() - 97) % 26 + 97);
    });

    if (this.reverse) {
      return key.join('').toUpperCase()
    }

    return key.reverse().join('').toUpperCase();
  }

  decrypt(message, key) {

    if (!message || !key) {
      throw new Error();
    }

    message = message.toLowerCase();

    key = this.addKey(message, key).split('').map((item, index) => {
      if (!(/[a-z]/.test(item))) {
        return item;
      }
      return String.fromCharCode((message[index].charCodeAt() + 26 - item.charCodeAt()) % 26 + 97);
    })

    if (this.reverse) {
      return key.join('').toUpperCase();
    }

    return key.reverse().join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;