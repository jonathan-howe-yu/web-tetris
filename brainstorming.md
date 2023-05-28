# Project Ideas

- Tetris backend engine so I can do stuff while learning canvas.js without feeling stuck

  - start without using a canvas.js wrapper so I can learn canvas?

- replayability? probably will require "deterministic engine"
  - deterministic i.e. engine game loop decoupled from something like setInterval
  - inputs can be fed in multiple times before next tick and it properly handles the final input
  - later down the line, possibly encapsulate changes to allow rewind? test performance of just replaying a whole tetris game without rendering
