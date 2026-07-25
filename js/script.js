//Magic Tab JS
  $('.magic-tab_link').on('click', function() {
    $('.magic-pane').removeClass('current');
    $('.magic-tab').removeClass('current');
    $(this).closest('.magic-pane').toggleClass('current');
    $(this).closest('.magic-tab').toggleClass('current');
    $(this).closest('.magic-tab').siblings('.magic-pane').toggleClass('current');
  });