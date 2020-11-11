import defaultHotkey from './default-hotkey.json';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set(defaultHotkey, () => console.log('Set default key'));
});
