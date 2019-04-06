$(document).ready(function () {
  lazy();
});
$(window).resize(function () {
  innerWidth = $('body').innerWidth();
});

var innerWidth = $('body').innerWidth();

//lazy
function lazy() {
  $(".lazy").Lazy({
    visibleOnly: true,
    threshold: '',
    effect: 'fadeIn',
    effectTime: '300'
  });
}