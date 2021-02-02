/* 
new URL('https://www.facebook.com/DwayneJohnson'); // {hostname}
new Map().set('www.facebook.com', 'src to fb icon'); // key - hostname
 */

const supportedSocialNetworks = new Map()
  .set('www.facebook.com', 'fa fa-facebook')
  .set('twitter.com', 'fa fa-twitter')
  .set('www.instagram.com', 'fa fa-instagram');

const [icons] = responseData.map((user) => createIcons(user.contacts));
document.body.append(...icons);

/**
 *
 * @param {Array<string>} contacts
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
