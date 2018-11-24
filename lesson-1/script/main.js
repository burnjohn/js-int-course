const modalWindow = $('#modal');
const body = $('body');
const iosCloseContainer = $('.ios-close');

function initCarousel() {

  $('#lightgallery').lightGallery({
    download: false
  });
  $('.owl-carousel').owlCarousel(
    {
      items: 1,
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplaySpeed: 2000,
      navContainer: '.carousel__controls',
    }
  );
}

function showPayModal() {
  const payModal = $('.modal__payment');
  if (isAppleIOS()) {
    iosCloseContainer.addClass('ios-close_hidden');
    modalWindow.addClass('modal__show_apple');
  }

  body.css({'overflow-y': 'hidden'});

  payModal.addClass('modal__show');
}

function hideCart() {
  body.css({'overflow-y': 'auto'});
  iosCloseContainer.removeClass('ios-close_hidden');
  modalWindow
  .removeClass('modal__show')
  .removeClass('modal__show_apple');
}

function showCart() {
  const modalCloseBtn = $('#modal .modal__close');

  if (isAppleIOS()) {
    iosCloseContainer.addClass('ios-close_hidden');
    modalWindow.addClass('modal__show_apple');
  }

  body.css({'overflow-y': 'hidden'});

  modalWindow.addClass('modal__show');

  modalCloseBtn.on('click', hideCart)
}

function initCart() {
  const modalBtns = [
    $('.buy-btn_main-page'),
    $('.buy-btn_buy-page'),
    $('.buy-btn_menu')
  ];

  modalBtns.forEach(function(item) {
    item.on('click', showCart)
  })
}

$(document).ready(function() {
  initCarousel();
  initCart();
});
