$(document).ready(function(){

    $(".project-thumb-container").click(function() {
      $(".project-head").css('display', 'none');
      // $(".project-belt").css('margin-top', '5.5em');
      $(".side-panel").css('display', 'none');
      //$(".project-belt").css('left', '-100%');
      $(".main-area").css('padding-left', '0%');
      $(".main-area").css('padding-right', '0%');
      $(".main-area").css('width', '100%');
      $(".project-return").css('display', 'block');
    });

    $(".project-return").click(function() {
      window.scrollTo(0, 0);
      $(".project-belt").animate({
        left: '0%'
      }, 350);
      $(".project-head").css('display', 'block');
      if ($(window).width() > 600) {
        $(".side-panel").css('display', 'block');
      }
      if ($(window).width() > 600) {
        $(".main-area").css('width', '70%');
      }
      if ($(window).width() > 600) {
        $(".main-area").css('padding-left', '30%');
      } else {
        $(".main-area").css('padding', '1rem');
      }
      $(".project-return").css('display', 'none');
    });

    $.ajaxSetup({cache: true});

    $(".project-thumb-container").click(function() {
      // var spinner = 'asdlfkjals;dkfj'
      var project = $(this);
      var newTitle = project.find('');
      var newHTML = project.data('content');
      // $('.project-load').css('display', 'none');
      window.scrollTo(0, 0);
      $('.project-load').load(newHTML);
      $(".project-belt").animate({
        left: '-100%'
      }, 350);
      // sleep(350);
      // $(".project-belt").css('margin-top', '0em');
    });

    $(".about-button").click(function() {
      $(".main-area").css('display', 'none');
      $(".navigation-bar").css('top', '0');
      $(".navigation-bar").css('left', '0');
      $(".navigation-bar").css('position', 'fixed');
      $(".side-panel").css('display', 'inline-block');
      $(".side-panel").css('width', '100%');
      $(".side-panel").css('position', 'static');
      $(".side-panel").css('margin', '0px auto');
      $(".side-panel").css('padding', '1em');
      $(".side-panel").css('padding-top', '5em');
    });

    $(".portfolio-button").click(function() {
      $(".main-area").css('display', 'block');
      $(".side-panel").css('display', 'none');
      $(".navigation-bar").css('position', 'static');
    });

});
