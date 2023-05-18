const swiperTop = new Swiper(".swiper-container-top", {
  loop: true, // ループ有効
  slidesPerView: 7, // 一度に表示する枚数を7に変更
  speed: 6000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
    reverseDirection: false, // 逆方向有効化
  },
  slidesOffsetAfter: 24, // スライド群の右端をずらす
});

const swiperBottom = new Swiper(".swiper-container-bottom", {
  loop: true,
  slidesPerView: 7,
  speed: 6000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    reverseDirection: true,
  },
  slidesOffsetAfter: 24,
});

