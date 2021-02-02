/**
 *
 * @param {Array<string>} contacts
 * @returns {Array<HTMLAnchorElement>}
 */
function createIcons(contacts) {
  const arrayOfIconElements = contacts.map((contact) => {
    const { hostname } = new URL(contact);

    if (supportedSocialNetworks.has(hostname)) {
      const cssClasses = supportedSocialNetworks.get(hostname);

      const a = document.createElement('a');
      a.setAttribute('href', contact);
      a.setAttribute('class', cssClasses);
      return a;
    }
    return;
  });

  return arrayOfIconElements;
}
