let buttonUp = document.querySelector(".main__button-up");
let buttonDown = document.querySelector(".main__button-down");
let imgPart1 = document.querySelector(".main__img-part1");
let imgPart2 = document.querySelector(".main__img-part2");

buttonUp.addEventListener("click", function(){
    
    buttonUp.setAttribute('disabled', '');
    buttonDown.disabled = false;
    if (window.innerWidth > 850){
        imgPart1.style.top = '-80px';
    } else if (window.innerWidth > 450) {
        imgPart1.style.top = '-40px';
    } else {
        imgPart1.style.top = '-30px';
    }
})


buttonDown.addEventListener('click', function() {
    imgPart1.style.top = '0';
    buttonUp.disabled = false;
    buttonDown.disabled = true;
  });


