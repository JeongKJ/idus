import Swiper from 'swiper';
import '../css/swiper.css';
import jQuery from 'jquery';
import $ from 'jquery';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


$(function () {
  let slidewidth = $('#section1>ul>li').width();
  $('#section1>ul>li:last').prependTo('#section1>ul');
  $('#section1>ul').css({ marginLeft: '-' + slidewidth + 'px' });


  $('.slide>p>span:nth-of-type(2)').on('click', function () {
    $('#section1>ul').animate({ marginLeft: '+=' + slidewidth + 'px' }, 500,
      function () {
        $('#section1>ul>li:last').prependTo('#section1>ul');
        $('#section1>ul').css({ marginLeft: '-' + slidewidth + 'px' });
      });
  })
  $('.slide>p>span:nth-of-type(3)').on('click', function () {
    $('#section1>ul').animate({ marginLeft: '-=' + slidewidth + 'px' }, 500, function () {
      $('#section1>ul>li:first').appendTo('#section1>ul');
      $('#section1>ul').css({ marginLeft: '-' + slidewidth + 'px' });
    });
  });
});
  

$(function () {
      const twowidth = $('section2>ul>li').width();
  $('#section2>ul>li:last').prependTo('#section2>ul');
  $('#section2>ul').css({ marginLeft: '-' + twowidth + 'px' });


  $('.slide_two>p>span:nth-of-type(2)').on('click', function () {
    $('#section2>ul').animate({ marginLeft: '+=' + twowidth + 'px' }, 500,
      function () {
        $('#section2>ul>li:last').prependTo('#section2>ul');
        $('#section2>ul').css({ marginLeft: '-' + twowidth + 'px' });
      });
  });
  $('.slide_two>p>span:nth-of-type(3)').on('click', function () {
    $('#section2>ul').animate({ marginLeft: '-=' + twowidth + 'px' }, 500, function () {
      $('#section2>ul>li:first').appendTo('#section2>ul');
      $('#section2>ul').css({ marginLeft: '-' + twowidth + 'px' });
    });
  });
  })

