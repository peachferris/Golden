const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


$(document).ready(function () {
  $('.button__item').click(function(event) {
    $('.button__item,.menu').toggleClass('active'); 
    $('body').toggleClass('lock'); 
  });
});

