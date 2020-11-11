export default {
  name: '3rd Target Language',
  async execute() {
    document.body.querySelector('[aria-label="More target languages"]')
      .previousSibling
      .childNodes[1]
      .firstChild
      .firstChild
      .firstChild
      .childNodes[2]
      .click();
  }
};
