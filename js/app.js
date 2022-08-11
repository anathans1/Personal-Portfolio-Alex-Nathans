const modal = document.querySelector(".modal");
const companyBtn = document.querySelector(".sub-btn");
companyBtn.addEventListener("click", () => {
modal.classList.add("active")
})

const closeBtn = document.querySelector(".close-modal");
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active")
})

(function(){
  $('.flex-container').waitForImages(function() {
    $('.spinner').fadeOut();
}, $.noop, true);

$(".flex-slide").each(function(){
  $(this).hover(function(){
    $(this).find('.flex-title').css({
      transform: 'rotate(0deg)',
      top: '10%'
    });
    $(this).find('.flex-about').css({
      opacity: '1'
    });
  }, function(){
    $(this).find('.flex-title').css({
      transform: 'rotate(90deg)',
      top: '15%'
    });
    $(this).find('.flex-about').css({
      opacity: '0'
    });
  })
});
})();