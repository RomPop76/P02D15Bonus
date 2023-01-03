function changeDot() {
    const scrollValue = $(window).scrollTop();  //pobieramy aktualną pozycję scrolla
    const heightS2 = $('.s2').offset().top; //wysokość sekcji 2
    const heightS3 = $('.s3').offset().top; //wysokość sekcji 3
    const heightS4 = $('.s4').offset().top; //wysokość sekcji 4
    // console.log(scrollValue.toFixed(), heightS2.toFixed(), heightS3.toFixed(), heightS4.toFixed());

    // $('li').removeClass('active');

    if (scrollValue < heightS2) {
        $('nav li').not('.dot1').removeClass('active');
        $('.dot1').addClass('active');
    }
    else if (scrollValue < heightS3) {
        $('nav li').not('.dot2').removeClass('active');
        $('.dot2').addClass('active');
    }
    else if (scrollValue < heightS4) {
        $('nav li').not('.dot3').removeClass('active');
        $('.dot3').addClass('active');
    }
    else {
        $('nav li').not('.dot4').removeClass('active');
        $('.dot4').addClass('active');
    }
}

$(window).on("scroll", changeDot);