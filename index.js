var work = document.getElementById("work");
var about = document.getElementById("about");
var aboutText = document.getElementById("about-text");
var workText = document.getElementById("work-text");
var open = true;

  work.addEventListener("click", function() {

    if (workText.style.maxHeight) {
        workText.style.maxHeight = null;
        work.style.fontStyle = "normal";



    } else {
        workText.style.maxHeight = workText.scrollHeight + "px";
        workText.style.transition = 'max-height .2s linear'
        aboutText.style.maxHeight = null;
        work.style.fontStyle = "italic";
        about.style.fontStyle = "normal";

    }
  });


  about.addEventListener("click", function() {
    if (aboutText.style.maxHeight) {
        aboutText.style.maxHeight = null;
        about.style.fontStyle = "normal";



    } else {
        aboutText.style.maxHeight = workText.scrollHeight + "px";
        workText.style.maxHeight = null;
        about.style.fontStyle = "italic";
        work.style.fontStyle = "normal";



    }
  });
  $(document).click(function(e) {
	if (!$(e.target).is('.panel-body')) {
    	$('.collapse').collapse('hide');	    
    }


});


$('#backgroundCarousel').on('slid.bs.carousel', function () {
    var bio = document.getElementById("bio");
    var indicators = document.getElementsByClassName("carousel-indicators")[0].getElementsByTagName("li");
    var slides = document.getElementsByClassName("carousel-item");
            
    for(let i=0; i<slides.length; i++){
        if(slides[i].classList.contains('active')){
            
            //set all indicators transparent
            for(let j =0; j < 3; j++){
                indicators[j].style.backgroundColor = 'transparent';
            }


            //set active indicator to solid
            indicators[i].style.backgroundColor = "white" ;

        }
    }
})


// $('#backgroundCarousel').on('slide.bs.carousel', function () {
//     var indicators = document.getElementsByClassName("ol.carousel-indicators");
//     const colors = ["black","white","white"];

//     for(let i=0; i<indicators.length; i++){
//         if(indicators[i].classList.contains('active')){
//            indicators[i].style.backgroundColor = "black !important";
//         }
//     }
// })


$('.carousel').carousel({
    interval: 10000
  })

var $carousel = $('#backgroundCarousel');
$carousel.carousel();
var handled=false;
//global variable

$carousel.bind('slide.bs.carousel', function (e) {
    var current=$(e.target).find('.carousel-item.active');
    var indx=$(current).index();
    if((indx+2)>$('.carousel-indicators li').length)
        indx=-1
     if(!handled)
     {
        $('.carousel-indicators li').removeClass('active')
        $('.carousel-indicators li:nth-child('+(indx+2)+')').addClass('active');
     }
     else
     {
        handled=!handled;//if handled=true make it back to false to work normally.
     }
});

$(".carousel-indicators li").on('click',function(){
   //Click event for indicators
   $(this).addClass('active').siblings().removeClass('active');
   //remove siblings active class and add it to current clicked item
   handled=true; //set global variable to true to identify whether indicator changing was handled or not.
});