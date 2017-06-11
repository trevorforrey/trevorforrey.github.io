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
      //$('.project-container').css('display', 'flex');
      //$('.project-container').css('justify-content', 'center');
    });
    $(".project-return").click(function() {
      $(".project-belt").css('left', '0%');
      $(".project-head").css('display', 'block');
      $(".side-panel").css('display', 'block');
      $(".main-area").css('width', '70%');
      $(".main-area").css('padding-left', '30%');
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

});
