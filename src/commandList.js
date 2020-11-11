'use strict'

import cmdClear from './commands/clear.js';
import cmdFocus from './commands/focus.js';
import cmdSourceAuto from './commands/source-auto.js';
import cmdSource1 from './commands/source-1.js';
import cmdSource2 from './commands/source-2.js';
import cmdSource3 from './commands/source-3.js';
import cmdTarget1 from './commands/target-1.js';
import cmdTarget2 from './commands/target-2.js';
import cmdTarget3 from './commands/target-3.js';

const commandList = {
  'clear': cmdClear,
  'focus': cmdFocus,
  'source-auto': cmdSourceAuto,
  'source-1': cmdSource1,
  'source-2': cmdSource2,
  'source-3': cmdSource3,
  'target-1': cmdTarget1,
  'target-2': cmdTarget2,
  'target-3': cmdTarget3,
};

export default commandList;
