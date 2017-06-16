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

    $(".about").click(function() {
      $(".main-area").css('display', 'none');
      $(".side-panel").css('display', 'block');
      $(".side-panel").css('width', '60%');
      $(".side-panel").css('position', 'static');
    });

});
