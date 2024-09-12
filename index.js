
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