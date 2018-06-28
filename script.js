$(document).ready(() => {
  var selectors = ['.one','.two','.three','.four'];
  for (var i = 0; i < selectors.length; i++) {
    scroll(selectors[i]);
  }

  function scroll(selector) {
    $('a' + selector).click(function(e) {
      $(document).scrollTop($('div' + selector).position()["top"]);
      e.preventDefault();
    });
  }
});
