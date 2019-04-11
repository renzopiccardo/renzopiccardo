function cargar2(){
    $("#mainn").addClass('d-none');
    $("#mainn").removeClass('d-block');
    $("#mainn2").removeClass('d-none');
    setTimeout(fc, 2000);
}

function fc(){
    $("#mainn2").removeClass('d-block');
    $("#mainn2").addClass('d-none');
    $("#mainn3").addClass('d-block');
    $("#mainn3").removeClass('d-none');
    
    var confettiSettings = { target: 'my-canvas', size:2, max: 120, animate: true, rotate:true};
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}