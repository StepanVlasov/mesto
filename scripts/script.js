const editButtonElement = document.querySelector('.profile__edit-button');
const closeButtonElement = document.querySelector('.popup__close-button');
const saveButtonElement = document.querySelector('.popup__save-button');
const popupElement = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameProfile = document.querySelector('.popup__input_type_name');
let jobProfile = document.querySelector('.popup__input_type_profession');
let creatorName = document.querySelector('.profile__creator-name');
let creatorJob = document.querySelector('.profile__creator-profession');


function openPopup() {
    popupElement.classList.add('popup_opened');
    nameProfile.value = creatorName.textContent;
    jobProfile.value = creatorJob.textContent;
}


function closePopup(e) {
    if (e.target === e.currentTarget) {
        popupElement.classList.remove('popup_opened');
    }
}


function handleFormSubmit (evt) {
    evt.preventDefault();
    creatorName.textContent = nameProfile.value;
    creatorJob.textContent = jobProfile.value;
    closePopup(evt);
}

formElement.addEventListener('submit', handleFormSubmit);


editButtonElement.addEventListener('click', openPopup);
closeButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopup);




