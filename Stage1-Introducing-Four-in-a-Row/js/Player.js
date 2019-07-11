class Player {
  constructor (id, name, color, active = false) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }

  /*
    Creates token objects for player
    @param {integer} num - number of token objects to be created
    @return {array} tokens - an array of new token objects
  */

  createTokens(num) {
    const tokens = [];

    for (let i = 0; i < num; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }
    return tokens;
  }
}
