import menuToggle from './menuToggle';
import markerToggle from './markerToggle';

import Swiper from 'swiper';
import {
  Autoplay,
  Navigation,
  Pagination,
  Controller,
  EffectFade,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../scss/style.scss';

Swiper.use ([Autoplay, Navigation, Pagination, Controller, EffectFade]);

var swiper = new Swiper ('.mySwiper', {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 'auto',
  touchRatio: 0.2,
  slideToClickedSlide: true,
  slidesPerView: 4,
});
var swiper2 = new Swiper ('.mySwiper2', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});
swiper.controller.control = swiper2;
swiper2.controller.control = swiper;

menuToggle ();
markerToggle ();
