$(document).ready(() => {

  $('a.one').click(function(e) {
    $(document).scrollTop($('div.one').position()["top"]);
    e.preventDefault();
  });

  $('a.two').click(function(e) {
    $(document).scrollTop($('div.two').position()["top"]);
    e.preventDefault();
  });

  $('a.three').click(function(e) {
    $(document).scrollTop($('div.three').position()["top"]);
    e.preventDefault();
  });

  $('a.four').click(function(e) {
    $(document).scrollTop($('div.four').position()["top"]);
    e.preventDefault();
  });
});
