// const focus = document.querySelectorAll('.sidebar-option');

// focus.forEach(function(item) {

//   item.addEventListener('click', function(e) {
//    console.log(e);
//   });
// });

$('.editor-show').on("click", function () {
  $('.editor').show();
});
$('.editor-hide').on("click", function () {
  $('.editor').hide();
});