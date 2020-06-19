function resetSwiper(){
    if($(window).width() < 767)
    {
        var swiper = new Swiper('.swiper-container',{
            // mobile 螢幕，slides 只顯示 1.3 張
            slidesPerView: 1.3,
            spaceBetween: 10,
            pagination: {
             el: '.swiper-pagination',
             clickable: true,
            },
        });
    } else {
        var swiper = new Swiper('.swiper-container',{
            // mobile 螢幕，slides 示 2.85 張
            slidesPerView: 2.85,
            spaceBetween: 10,
            pagination: {
             el: '.swiper-pagination',
             clickable: true,
            },
        });
    }
};
// 網頁載入後就設定好 swiper slide
resetSwiper();
// 視窗大小變動時，確認需不需要改變 slide 的顯示數量
window.addEventListener('resize', resetSwiper);