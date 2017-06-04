$(document).ready(function(){
    $(".btn1").click(function(){
        $("p").hide();
    });
    $(".btn2").click(function(){
        $("p").show();
    });
    $(".project-btn").click(function() {
      $(this).parent().parent().parent().hide();
      $(this).parent().parent().parent().load("/project/0000/09/09/organic-robo-head.html");
      $(this).parent().parent().parent().show();
    });
});
