$(document).ready(function(){
    $(".btn1").click(function(){
        $("p").hide();
    });
    $(".btn2").click(function(){
        $("p").show();
    });

    $(".project-thumb-container").click(function() {
      $(".project-belt").css('left', '-100%');
      $(".project-head").css('display', 'none');
      $(".side-panel").css('display', 'none');
      $(".main-area").css('padding-left', '0%');
      $(".main-area").css('padding-right', '0%');
      $(".main-area").css('width', '100%');
      $(".project-return").css('display', 'block');
      //$('.project-container').css('display', 'flex');
      //$('.project-container').css('justify-content', 'center');
    });
    $(".project-return").click(function() {
      $(".project-belt").css('left', '0%');
      $(".project-head").css('display', 'block');
      $(".side-panel").css('display', 'block');
      $(".main-area").css('width', '70%');
      $(".main-area").css('padding-left', '30%');
      $(".project-return").css('display', 'none');
    });

    $.ajaxSetup({cache: true});

    $(".project-thumb-container").click(function() {
      // var spinner = 'asdlfkjals;dkfj'
      var project = $(this);
      var newTitle = project.find('');
      var newHTML = project.data('content');
      $('.project-load').load(newHTML);
      //).html(spinner.load)..
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
      $(".side-panel").css('padding', '0');
      $(".side-panel").css('padding-top', '5em');
    });

    $(".portfolio-button").click(function() {
      $(".main-area").css('display', 'block');
      $(".side-panel").css('display', 'none');
      $(".navigation-bar").css('position', 'static');
    });

});
