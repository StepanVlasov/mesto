const editButtonElement = document.querySelector('.profile__edit-button');
const closeButtonElement = document.querySelector('.popup__close-button');
const saveButtonElement = document.querySelector('.popup__save-button');
const popupElement = document.querySelector('.popup');


function handleClick(e) {
    if (e.target === e.currentTarget) {
        popupElement.classList.toggle('popup_opened');
    }
    
}


editButtonElement.addEventListener('click', handleClick);
closeButtonElement.addEventListener('click', handleClick);
popupElement.addEventListener('click', handleClick);
saveButtonElement.addEventListener('click', handleClick);


let formElement = document.querySelector('.popup');
let nameInput = document.querySelectorAll('.popup__name');
let jobInput = document.querySelectorAll('.popup__profession');




function handleFormSubmit (evt) {
    evt.preventDefault();
    let a = console.log(nameInput[0].value);
    let b = console.log(jobInput[0].value);
    let nameProfile = document.querySelector('.profile__creator-name');
    let jobProfile = document.querySelector('.profile__creator-profession');
    nameProfile.textContent = nameInput[0].value;
    jobProfile.textContent = jobInput[0].value;
}

formElement.addEventListener('submit', handleFormSubmit);

saveButtonElement.addEventListener('click', handleFormSubmit);


