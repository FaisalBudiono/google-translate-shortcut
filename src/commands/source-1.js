export default {
  name: '1st Source Language',
  async execute() {
    document.body.querySelector('[data-language-code="auto"]')
      .nextSibling
      .click();
  }
};
