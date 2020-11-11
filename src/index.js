import commandList from './commandList.js';
import helper from './helper.js';
import defaultHotkey from './default-hotkey.json';

const commandNames = Object.keys(defaultHotkey);

const localStorageCommands = {};
commandNames.forEach((cmd) => {
  localStorageCommands[cmd] = window.localStorage.getItem(cmd);
})

const localStorageHotkeys = Object.values(localStorageCommands);

document.body.addEventListener('keydown', (event) => {
  const stringKeypressed = helper.keypressEventToString(event);
  const hotkeyIndex = localStorageHotkeys.indexOf(stringKeypressed);

  const isHotkeyRegistered = hotkeyIndex >= 0;

  if (! isHotkeyRegistered) return;
  const cmdName = Object.entries(localStorageCommands)[hotkeyIndex][0];
  commandList[cmdName].execute();
});
