$(window).on('load scroll',function(){
    if($(window).scrollTop() > 30){
      $('.nav-section').css({'background':'#6C5CE7','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
    }else{
      $('.nav-section').css({'background':'none','box-shadow':'none'});
    }
  });
$(".fa-bars").on("click",function(){
  $(".navbar").css("display","block");
})
