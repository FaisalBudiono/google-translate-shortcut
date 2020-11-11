export default {
  name: 'Focus Command',
  async execute() {
    document.body.querySelector('[aria-label="Source text"]').focus();
  }
};
