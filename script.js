$(document).ready(() => {
  $('button.one').click(function() {
    $(document).scrollTop($('div.one').position()["top"]);
  });

  $('button.two').click(function() {
    $(document).scrollTop($('div.two').position()["top"]);
  });

  $('button.three').click(function() {
    $(document).scrollTop($('div.three').position()["top"]);
  });

  $('button.four').click(function() {
    $(document).scrollTop($('div.four').position()["top"]);
  });
});
