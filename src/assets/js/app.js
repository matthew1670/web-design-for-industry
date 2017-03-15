$(document).foundation();
$('[data-slider]').on('change', function(){
    var value = $('#slider').attr('data-slider');
    $('#sallery').value = value;
    console.log("Testing");
});
