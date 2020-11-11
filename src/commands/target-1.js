export default {
  name: '1st Target Language',
  async execute() {
    document.body.querySelector('[aria-label="More target languages"]')
      .previousSibling
      .childNodes[1]
      .firstChild
      .firstChild
      .firstChild
      .childNodes[0]
      .click();
  }
};
