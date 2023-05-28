import { CellPos } from './cell-pos';
import { Tetromino } from './tetromino';

export type CellFilled = boolean;
export type Row = CellFilled[];

export class Board {
  /* Official values based on rules. Can play around with values later. */
  width = 10;
  height = 40;
  visibleHeight = 20;

  // Rows stored from bottom to top i.e. index 0 is the bottom row and gets filled first
  private rows: Row[] = [];

  /**
   * Constructs
   * @param board optional, initializes a clone with deep copied rows NOT IMPLEMENTED
   */
  constructor(board?: Board | undefined) {
    this.initializeRows();
  }

  getStartingPos(): CellPos {
    return [4, 21];
  }

  getAllRows(): Row[] {
    return this.rows;
  }

  getVisibleRows(): Row[] {
    return this.rows.slice(0, this.visibleHeight);
  }

  initializeRows() {
    while (this.rows.length < this.height) {
      this.rows.push(this.generateEmptyRow());
    }
  }

  isValidPlacement(piece: Tetromino, pos: CellPos): boolean {
    return false;
  }

  isCellFilled([x, y]: CellPos): boolean {
    const row = this.getRow(y);
    return row[x];
  }

  getRow(rowNumber: number): Row {
    return this.rows[rowNumber];
  }

  generateEmptyRow(): Row {
    return this.generateRow(null);
  }

  generateRow(filledRows: number[] | null): Row {
    if (filledRows) {
      filledRows.sort((a, b) => b - a);
    }

    const row: Row = [];

    for (let i = 0; i < this.width; i++) {
      if (
        filledRows !== null &&
        filledRows.length !== 0 &&
        filledRows[length - 1] === i
      ) {
        filledRows.pop();
        row.push(true);
      } else {
        row.push(false);
      }
    }

    return row;
  }
}
