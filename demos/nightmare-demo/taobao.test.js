var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.taobao.com/')
  .type('#q', '电视机')
  .click('form[action*="/search"] [type=submit]')
  .wait('#mainsrp-itemlist')
  .evaluate(function () {
    return document.querySelector('#mainsrp-itemlist .item .ctx-box a.J_ClickStat')
      .textContent.trim();
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
