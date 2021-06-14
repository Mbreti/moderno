$(function () {
    const mixer = mixitup(".products__inner-box");

    $(".rate-start").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true,
    });

    $(".product-slider__inner").slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
    });
});