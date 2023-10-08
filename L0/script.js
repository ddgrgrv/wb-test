const counterContainer = document.querySelectorAll('.list-item__counter'),
    modalPay = document.querySelector('.modal-pay'),
    modalDelivery = document.querySelector('.modal-delivery'),
    overlay = document.querySelector('.overlay'),
    payButtons = document.querySelectorAll('.js-btn'),
    asideCheckboxPayAll = document.getElementById('aside-pay-all'),
    deliveryButtons = document.querySelectorAll('.js-btn-delivery'),
    mainCheckbox = document.getElementById('select-all'),
    groupCheckbox = document.querySelectorAll('.group-checkbox'),
    modalPayButton = document.getElementById('choose-pay'),
    modalDeliveryButton = document.getElementById('choose-delivery'),
    sendFormButton = document.getElementById('send');
      
function openModal(modal){
    modal.classList.add('display-block');
    overlay.classList.add('display-block');
    document.body.style.overflow =  "hidden";
}

function closeModal(modal){
    modal.classList.remove('display-block');
    overlay.classList.remove('display-block');
    document.body.style.overflow =  "auto";
}

function checkValidForm(){
    const form = document.getElementById('form'),
          name = document.getElementById('name'),
          surname = document.getElementById('surname'),
          email = document.getElementById('email'),
          phone = document.getElementById('phone'),
          number = document.getElementById('number'),
          textPattern = /^[a-zA-Z]+$/,
          phonePattern = /^(\+\d{1,3}[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{4}$/,
          numberPattern = /^\d{12}$/,
          emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

          if (textPattern.test(name.value)) {
            name.classList.remove("invalid");
          } else {
            name.classList.add("invalid");
          }

          if (!!textPattern.test(surname.value)) {
            surname.classList.remove("invalid");
          } else {
            surname.classList.add("invalid");
          }

          if (phonePattern.test(phone.value)) {
            phone.classList.remove("invalid");
          } else {
            phone.classList.add("invalid");
          }

          if (emailPattern.test(email.value)) {
            email.classList.remove("invalid");
          } else {
            email.classList.add("invalid");
          }

          if (numberPattern.test(number.value)) {
            number.classList.remove("invalid");
          } else {
            number.classList.add("invalid");
          }

}

function selectPayment(){
  const modal = document.querySelector('.modal-pay'),
        checkedRadioButton = modal.querySelector('.modal-radio:checked'),
        payContent = document.querySelector('.pay-content'),
        asidePayContent = document.querySelector('.aside-pay-icon');

  if(checkedRadioButton.parentElement.querySelector('.modal-icon').src != payContent.querySelector('.pay-content__icon').src){
    let newSrc = checkedRadioButton.parentElement.querySelector('.modal-icon').src.slice(21);
    payContent.querySelector('.pay-content__icon').src = `${newSrc}`;
    asidePayContent.src = `${newSrc}`;
  }

  closeModal(modalPay);
}

function selectDelivery(){
  const modal = document.querySelector('.modal-delivery'),
        checkedRadioButton = modal.querySelector('.modal-radio:checked');

  
  if(checkedRadioButton.parentElement.querySelector('.modal-number').textContent != document.querySelector('.delivery-desc__address').textContent){
    document.querySelector('.delivery-desc__address').textContent = checkedRadioButton.parentElement.querySelector('.modal-number').textContent;
    document.querySelector('.aside-delivery-desc').textContent = checkedRadioButton.parentElement.querySelector('.modal-number').textContent;
  }

  closeModal(modalDelivery);
}

function choosePayAll(){
  if (asideCheckboxPayAll.checked) {
    document.getElementById('send').textContent = document.querySelector('.aside__total-price').textContent;
    document.querySelector('.aside-pay-desc').style.display = "none";
  } else {
    document.getElementById('send').textContent = "Заказать";
    document.querySelector('.aside-pay-desc').style.display = "block";
  }
}
    
counterContainer.forEach((item)=>{

    const increment = item.querySelector('.increment'),
          decrement = item.querySelector('.decrement'),
          counterValue = item.querySelector('.count');

          let count = counterValue.textContent;

          function IncreaseCounter (){
              count++;
              counterValue.textContent = count;
          }
          
          function DecreaseCounter (){
              if (counterValue.textContent > 0) {
                  count--;
                  counterValue.textContent = count;
              } else {
                  counterValue.textContent = 0;
              }
          }
        
          
          increment.addEventListener('click', IncreaseCounter);
          decrement.addEventListener('click', DecreaseCounter);
});

payButtons.forEach((item)=>{
    item.addEventListener('click', ()=>{
        openModal(modalPay);
        const closeModalBtn = modalPay.querySelector('.modal-close');

        closeModalBtn.addEventListener('click', ()=>{
            closeModal(modalPay);
        });
    });
});

deliveryButtons.forEach((item)=>{
    item.addEventListener('click', ()=>{
        openModal(modalDelivery);
        const closeModalBtn = modalDelivery.querySelector('.modal-close');

        closeModalBtn.addEventListener('click', ()=>{
            closeModal(modalDelivery);
        });
    });
});

sendFormButton.addEventListener('click', function(e){
    e.preventDefault();
    checkValidForm();
})

// Поведение чекбоксов
for(let i=0; i<groupCheckbox.length; i++) {
  groupCheckbox[i].onclick = function() {
    let checkedCount = document.querySelectorAll('input.summary-checkbox:checked').length;

    mainCheckbox.checked = checkedCount > 0;
    mainCheckbox.indeterminate = checkedCount > 0 && checkedCount < groupCheckbox.length;
  }
}

mainCheckbox.onclick = function() {
  for(let i=0; i<groupCheckbox.length; i++) {
    groupCheckbox[i].checked = this.checked;
  }
}

modalPayButton.addEventListener('click', selectPayment);

modalDeliveryButton.addEventListener('click', selectDelivery);

asideCheckboxPayAll.addEventListener('change', choosePayAll);


         

