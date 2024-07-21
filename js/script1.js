$(document).ready(function () {
  var modal = $('#modal');

  $('#openModal').click(function () {
    modal.css('display', 'flex');
  });

  $('.close').click(function () {
    modal.css('display', 'none');
  });

  $(window).click(function (event) {
    if ($(event.target).is(modal)) {
      modal.css('display', 'none');
    }
  });
});