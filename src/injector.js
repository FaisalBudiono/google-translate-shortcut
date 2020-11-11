chrome.storage.local.get(null, (res) => {
  for (const [cmdName, cmdHotkey] of Object.entries(res)) {
    window.localStorage.setItem(cmdName, cmdHotkey);
  }
});

let script = document.createElement('script');
script.setAttribute('data-something', 'uculista');
script.setAttribute("type", "module");
script.setAttribute("src", chrome.extension.getURL("dist/module.bundle.js"));

document.body.appendChild(script);
