export default {
  name: 'Clear Command',
  async execute() {
    document.body.querySelector('[aria-label="Source text"]').value = "";
  }
};
