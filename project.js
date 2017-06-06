$(document).ready(function(){
    $(".btn1").click(function(){
        $("p").hide();
    });
    $(".btn2").click(function(){
        $("p").show();
    });
    $(".project-thumb-container").click(function() {
      $(".project-belt").css('left', '-100%');
    });
    $(".project-return").click(function() {
      $(".project-belt").css('left', '0%');
    });
});
