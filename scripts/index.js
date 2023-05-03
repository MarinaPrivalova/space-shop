const headerBtn = document.querySelector('.header__btn');
const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close-button');

function openPopup() {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
  popup.addEventListener('mousedown', closePopupByOverlay);
}

function closePopup() {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
  popup.removeEventListener('mousedown', closePopupByOverlay);
}

function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup()
  }
}

function closePopupByOverlay(evt) {
  if (evt.target == evt.currentTarget) {
    closePopup()
  }
}

headerBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);