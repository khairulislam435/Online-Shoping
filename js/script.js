


$('.gallery-item').isotope({
    itemSelector:'.item',
    layoutMode:'fitRows'
});
$('.gallery-menu ul li').click(function () {
    $('.gallery-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.gallery-item').isotope({
        filter: selector
    });
});