$(document).ready(function(){

    $('div#spoiler').click(function(){
        $(this).find('img').toggleClass('img__open').toggleClass('img__close')
    })

});