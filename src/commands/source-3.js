export default {
  name: '3rd Source Language',
  async execute() {
    document.body.querySelector('[data-language-code="auto"]')
      .nextSibling
      .nextSibling
      .nextSibling
      .click();
  }
};
