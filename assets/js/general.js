function PaddingTopBanner(){
    var headerHeight = jQuery('.header').innerHeight();
    console.log(headerHeight);
    jQuery('.banner-section').css("padding-top", headerHeight);
}
jQuery(document).ready(function(){
    PaddingTopBanner();

    //adding li
    if (screen.width < 767) {
        var appendLi = jQuery('.search-wrapper input').detach();
        jQuery('.social-links').append(appendLi);
    }

    //hamburger-menu 
    jQuery('.hamburger').click(function(){
        jQuery('.header').toggleClass('menu-open');
    })

    //slick-slider
    jQuery('.explore-section-inner').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
            breakpoint: 575,
            settings: {
                slidesToShow:1,
            }
            },
            {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            }
            },
            {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            }
            },
        ]
    });

    //select2-dropdown
    jQuery('.select2-dropdown').select2();
});
jQuery(window).resize(function(){
    PaddingTopBanner();
});