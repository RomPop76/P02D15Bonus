function changeDot() {
    const scrollValue = $(window).scrollTop();  //pobieramy aktualną pozycję scrolla
    const heightS2 = $('.s2').offset().top; //wysokość sekcji 2
    const heightS3 = $('.s3').offset().top; //wysokość sekcji 3
    const heightS4 = $('.s4').offset().top; //wysokość sekcji 4
}

$(window).on("scroll", changeDot);