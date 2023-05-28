import { beforeEach, describe, expect, test } from 'vitest';
import { Board } from './board';

describe('board', () => {
  test('board constructs', () => {
    const board = new Board();
    expect(board).toBeDefined();
  });

  describe('board initialization', () => {
    let board: Board;
    beforeEach(() => {
      board = new Board();
    });

    test('initializes by default with 40 rows', () => {
      const rows = board.getAllRows();
      expect(rows.length).toBe(40);
    });

    test('initializes by default with 20 visible rows', () => {
      const rows = board.getVisibleRows();
      expect(rows.length).toBe(20);
    });

    test('initializes by default with each row having 10 columns', () => {
      const rows = board.getAllRows();
      for (const row of rows) {
        expect(row.length).toBe(10);
      }
    });

    test('initializes by default with each cell being empty', () => {
      const rows = board.getAllRows();
      for (const row of rows) {
        for (const cell of row) {
          expect(cell).toBe(false);
        }
      }
    });
  });
});
