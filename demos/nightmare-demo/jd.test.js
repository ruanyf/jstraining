var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.jd.com/')
  .type('#key', '电视机')
  .click('button.button')
  .wait(3000)
  .exists('div.gl-i-wrap')
//  .wait('#spulist-grid')
  .evaluate(function () {
    return document.querySelector('div.gl-i-wrap div.p-name-type-2')
      .textContent.trim();
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
