const counterContainer = document.querySelectorAll('.list-item__counter'),
    modalPay = document.querySelector('.modal-pay'),
    modalDelivery = document.querySelector('.modal-delivery'),
    overlay = document.querySelector('.overlay'),
    payButtons = document.querySelectorAll('.js-btn'),
    deliveryButtons = document.querySelectorAll('.js-btn-delivery'),
    
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





         

