export default {
  name: '2nd Source Language',
  async execute() {
    document.body.querySelector('[data-language-code="auto"]')
      .nextSibling
      .nextSibling
      .click();
  }
};
