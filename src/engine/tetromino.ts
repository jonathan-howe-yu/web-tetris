import { CellPos } from './cell-pos';

export interface Tetromino {
  getCurrentRotation(): number;
  getCellsPos(): CellPos[];
  rotateForward(): void;
  rotateReverse(): void;
}
