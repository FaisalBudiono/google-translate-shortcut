export default {
  name: 'Auto Detect Language',
  async execute() {
    document.body.querySelector('[data-language-code="auto"]')
      .click();
  }
};
