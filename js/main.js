function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#stickyheader').offset().top;
    if (window_top > div_top) {
      $('#sticky').addClass('stick');
    } else {
      $('#sticky').removeClass('stick');
    }
  }
  
  $(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
  });