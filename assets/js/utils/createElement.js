/**
 *
 * @param {string} type
 * @param {object} options
 * @param {string[]} options.classNames
 * @param {object} options.attributes
 * @param {function} options.onClick
 * @param {HTMLElement[]} children
 */
function createElement(type, { classNames, onClick, attributes }, children) {
  /*   
  EXAMPLE OF ATTRIBUTES OBJECT
  const attr = {
    src: 'https://www.link.com',
    alt: 'descr',
  };
   */
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.onclick = onClick;

  for (const [attrName, attrValue] of Object.entries(attributes)) {
    elem.setAttribute(attrName, attrValue);
  }

  elem.append(...children);
  return elem;
}
