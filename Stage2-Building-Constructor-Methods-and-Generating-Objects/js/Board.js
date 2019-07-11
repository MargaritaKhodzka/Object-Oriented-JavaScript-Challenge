class Board {
  // no arguments are passed because each game will have only 1 board object and the number of rows and columns is set
  constructor () {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  /*
    Generates 2D array of spaces.
    @return {Array} An array of space objects
  */
  createSpaces() {
    const spaces = [];

    for (let x = 0; x < this.columns; x++) {
      const column = [];

      for (let y = 0; y < this.rows; y++) {
        let space = new Space(x, y);
        column.push(space);
      }
      spaces.push(column);
    }
    return spaces;
  }
}