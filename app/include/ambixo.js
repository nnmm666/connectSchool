/*-------------------------------------------------------------------------

  Template Name: Ambixo
  Author: Martina Sepi 
  Author URL: http://www.martinasepi.it
  License: GNU GENERAL PUBLIC LICENSE
  
-------------------------------------------------------------------------*/

$(document).ready(function () {


//LOGO SCROLL ----------------------------------------------------------------------------/

  $(".logoImage").click(function(){
    $('html, body').animate({ scrollTop: 0 }, 500);
  });


$('html, body').animate({ scrollTop: 0 });

//STICKY HEADER -----------------------------------------------------------------/
  var currentDom;
  var timeout;

  if ($(".header")[0]){
    $('.header').before('<div class="sticky-padding"></div>');
    
    $(window).scroll(function(){
      var wind_scr = $(window).scrollTop();
      var head_w = $('.header').height();
        if(wind_scr <= 5){
          if($('.header').data('animated-header') === true){
            $('.header').data('animated-header', false);
            $('.header').stop(true).animate({opacity : 1}, 0, function(){
              $('.header').removeClass('animated-header');
              $('.header').stop(true).animate({opacity : 1}, 0);
            });
          }
        } else {
          if($('.header').data('animated-header') === false || typeof $('.header').data('animated-header') === 'undefined'){
            $('.header').data('animated-header', true);
            $('.header').stop(true).animate({opacity : 1},0,function(){
              $('.header').addClass('animated-header'); 
              $('.header.animated-header').stop(true).animate({opacity : 0.95}, 100);              
            });
          }
        }
    });
  }

//NAV SCROLL ----------------------------------------------------------------------------/

  $('#main-nav').localScroll(800);


//PARALLAX ----------------------------------------------------------------------------/

    $('#parallax-1').parallax();
    $('#parallax-2').parallax();
    $('#parallax-3').parallax();
    $('#parallax-4').parallax();
    $('#parallax-5').parallax();
    $('#parallax-6').parallax();
    $('#parallax-7').parallax();
    $('#parallax-8').parallax();
    $('#parallax-9').parallax();
    /*add as necessary*/


//TOOLTIP --------------------------------------------------------------------------------/
  // $('.tool').tooltip();

  

//PORTFOLIO ---------------------------------------------------------------------/  

  $(function() {
    Grid.init();
  });


//SKILLS ---------------------------------------------------------------------/  

  $('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
    },6000);
  });


//BACK TO TOP --------------------------------------------------------------------------------/

  var offset = 800;
  var duration = 500;
  jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > offset) {
          jQuery('.back-to-top').fadeIn(duration);
      } else {
          jQuery('.back-to-top').fadeOut(duration);
      }
  });     
  $('.back-to-top').click(function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, duration);
      return false;
  })

  $('.navbar-nav > li > a').click(function(e){
    var id =  $(this).attr('href');
    var a = $('.header').height();
    var pad = 0;
    pad = $(id).offset().top - (a + 30) + 'px';

    $('body, html').animate({
        scrollTop : pad
    }, 500);

    // var a = $('.header').height();
    // console.log('currentDom' , currentDom);
    // console.log('current id', id);
    // console.log(id === currentDom);

    // if(id === currentDom){
    //   $('.sticky-padding').css('padding-top', '30px'); 
    //   return;
    // }
    // currentDom = id;

    // $('.header').before('<div class="sticky-padding"></div>');    
    // console.log(23232);
    // console.log(a);
    // console.log((a - (a/3)) );
    // $('.sticky-padding').css('padding-top', ((a-a/3) + 'px'));    

    // clearTimeout(timeout);
    // timeout = setTimeout(function() {
    //   console.log('paddig-top 0 ');
    //     $('.sticky-padding').css('padding-top', '0px'); 
    // }, 200);

  }); 

  
});
