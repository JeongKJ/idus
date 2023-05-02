import $ from 'jquery';

$(function () {
//함수 만들기
  gallery01();
  gallery02();
  gallery03();
  event();

})
  
function gallery01() {
  let slidewidth = $('#section1>ul>li').width();
  $('#section1>ul>li:last').prependTo('#section1>ul');
  $('#section1>ul').css({ marginLeft: '-' + slidewidth + 'px' });


  $('.slide>p>span:nth-of-type(2)').on('click', function () {
    $('#section1>ul').animate({ marginLeft: '+=' + slidewidth + 'px' }, 500,
      function () {
        $('#section1>ul>li:last').prependTo('#section1>ul');
        $('#section1>ul').css({ marginLeft: '-' + slidewidth + 'px' });
        let num = $('.slide>p>span:first-of-type').text();
        let num2 = Number(num);
        if(num2>1){
          num2--;
          let num3=num2.toString();
        $('.slide>p>span:first-of-type').text(num3);
        console.log(num3);
        return false;
      }
      else if(num2===1){
        num2 = 5;
        let num3=num2.toString();
        $('.slide>p>span:first-of-type').text(num3);
        console.log(num3);
        return false;
      }
      });
  })
  $('.slide>p>span:nth-of-type(3)').on('click', function () {
    $('#section1>ul').animate({ marginLeft: '-=' + slidewidth + 'px' }, 500, function () {
      $('#section1>ul>li:first').appendTo('#section1>ul');
      $('#section1>ul').css({ marginLeft: '-' + slidewidth + 'px' });

      let num = $('.slide>p>span:first-of-type').text();
      let num2 = Number(num);
      if(num2<5){
        num2++;
        let num3=num2.toString();
      $('.slide>p>span:first-of-type').text(num3);
      console.log(num3);
      return false;
    }
    else if(num2===5){
      num2 = 1;
      let num3=num2.toString();
      $('.slide>p>span:first-of-type').text(num3);
      console.log(num3);
      return false;
    }
      
    });
  });

}


function gallery02() {

  const twowidth = $('#section2>ul>li').width();
  console.log(twowidth)
  $('#section2>ul>li:last').prependTo('#section2>ul');
  $('#section2>ul').css({ marginLeft: '-' + twowidth + 'px' });


  $('.slide_two>p>span:nth-of-type(2)').on('click', function () {
    $('#section2>ul').animate({ marginLeft: '+=' + twowidth + 'px' }, 500,
      function () {
        $('#section2>ul>li:last').prependTo('#section2>ul');
        $('#section2>ul').css({ marginLeft: '-' + twowidth + 'px' });
        let num = $('.slide_two>p>span:first-of-type').text();
        let num2 = Number(num);
        if(num2>1){
          num2--;
          let num3=num2.toString();
        $('.slide_two>p>span:first-of-type').text(num3);
        console.log(num3);
        return false;
      }
      else if(num2===1){
        num2 = 3;
        let num3=num2.toString();
        $('.slide_two>p>span:first-of-type').text(num3);
        console.log(num3);
        return false;
      }
      });
  });
  $('.slide_two>p>span:nth-of-type(3)').on('click', function () {
    $('#section2>ul').animate({ marginLeft: '-=' + twowidth + 'px' }, 500, function () {
      $('#section2>ul>li:first').appendTo('#section2>ul');
      $('#section2>ul').css({ marginLeft: '-' + twowidth + 'px' });
      let num = $('.slide_two>p>span:first-of-type').text();
      let num2 = Number(num);
      if(num2<3){
        num2++;
        let num3=num2.toString();
      $('.slide_two>p>span:first-of-type').text(num3);
      console.log(num3);
      return false;
    }
    else if(num2===3){
      num2 = 1;
      let num3=num2.toString();
      $('.slide_two>p>span:first-of-type').text(num3);
      console.log(num3);
      return false;
    }
    });
  });
}

function gallery03(){
    $('.small_category>li:first-child>a').addClass('selected');
      $('.product>li:not(:first)').hide();
  $('.small_category>li>a').on('click', function () {
    let select = $(this).attr('href');
    $('.product>li').hide();
    $(select).show();
    $('.small_category>li>a').removeClass('selected');
    $(this).addClass('selected');
    return false;
  });
}

function event(){
  let eventwidth = $('#eventwrap>ul>li').width();
  $('#slide1').on('click',function(){
    $('#eventwrap>ul').animate({marginLeft: '-='+eventwidth+'px'});
  })
}
  