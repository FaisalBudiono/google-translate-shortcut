export default {
  keypressEventToString(event) {
    if (event.location !== 0) return '';

    let pressedKeys = [];

    if (event.ctrlKey) pressedKeys.push('ctrl');
    if (event.altKey) pressedKeys.push('alt');
    if (event.shiftKey) pressedKeys.push('shift');

    pressedKeys.push(event.key);

    return pressedKeys.join('+').toLowerCase();
  },
};
