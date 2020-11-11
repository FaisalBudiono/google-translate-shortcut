export default {
  name: '2nd Target Language',
  async execute() {
    document.body.querySelector('[aria-label="More target languages"]')
      .previousSibling
      .childNodes[1]
      .firstChild
      .firstChild
      .firstChild
      .childNodes[1]
      .click();
  }
};
