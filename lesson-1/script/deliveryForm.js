
function showModal(text) {
  const modal = $('.thanks-modal');
  const modalTextCont = $('.thanks-modal__wrapper');

  modalTextCont.html(text);

  modal.addClass('modal__show');

  setTimeout(function() {
    modal.removeClass('modal__show');
  }, 3000)
}

function sendMail(data) {
  $.ajax({
    type: "POST",
    url: "sendMessage.php",
    data: serialize(data)
  }).done(function() {
    hideCart();
    sendThanksMail(data.email);
    showPayModal();
  }).fail(function(error) {
    showModal(modalTexts.submitError);
  });
}


function sendThanksMail(email) {
  $.ajax({
    type: "POST",
    url: "sendSuccessMessage.php",
    data: serialize({ email: email})
  });
}