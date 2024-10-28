
// FLOATING LABEL EFFECT
var input = $('.md-input')
input.on('blur',function(){
    if($(this).parent().hasClass('md-input-wrap')){
        if($(this).val()!==''){
            $(this).addClass('md-hastext');
            $(this).parent('.md-input-wrap').addClass('md-hastext');
        }else{
            $(this).removeClass('md-hastext');
            $(this).parent('md-input-wrap').removeClass('md-hastext');
        }
    }
});
input.on('focus',function(){
    if($(this).parent().hasClass('md-input-wrap')){
        $(this).parent('.md-input-wrap').addClass('md-hastext');
    }
});

document.querySelector('label').addEventListener('click', function(){
    const input = document.getElementById('username');
    input.focus();
});


// Hamburger function

const hamburger1 = document.getElementById('hamburger1_container');
const menu = document.querySelector('.menu-info-container');

hamburger1.addEventListener('click', ()=> {
    hamburger2.style.display = 'block';
    hamburger1.style.display = 'none';
    menu.style.display = 'flex';
} )

const hamburger2 = document.getElementById('hamburger2_container');

hamburger2.addEventListener('click', ()=> {
    hamburger1.style.display = 'block';
    hamburger2.style.display = 'none';
    menu.style.display = 'none';
})

// Arrow drop down/up

const arrowDown = document.getElementById('arrowDown');
const arrowUp = document.getElementById('arrowUp');
const subText = document.querySelector('.sub-text_2')

arrowDown.addEventListener('click', ()=> {
    arrowUp.style.display = 'flex';
    arrowDown.style.display = 'none'
    subText.style.display = 'block'
} )

arrowUp.addEventListener('click', ()=> {
    arrowDown.style.display = 'flex';
    arrowUp.style.display = 'none'
    subText.style.display = 'none'
} )