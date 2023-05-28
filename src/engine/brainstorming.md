# board.ts

- Is there a difference between a board showing a piece and a board that has committed a piece?

  - maybe board should not store pieces that haven't been committed and something external should track piece location and check with board on validity to avoid too much complexity in board

- Possibly have board function as an immutable object? board would be an abstraction of a base board (either empty or with changes) + 1 change
