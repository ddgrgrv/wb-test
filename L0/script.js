const counterContainer = document.querySelectorAll('.list-item__counter'),
    modalPay = document.querySelector('.modal-pay'),
    modalDelivery = document.querySelector('.modal-delivery'),
    overlay = document.querySelector('.overlay'),
    payButtons = document.querySelectorAll('.js-btn'),
    deliveryButtons = document.querySelectorAll('.js-btn-delivery');
      
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





         

