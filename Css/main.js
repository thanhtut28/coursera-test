let nCount = selector => {
    $(selector).each(function () {
      $(this)
        .animate({
          Counter: $(this).text()
        }, {
          // A string or number determining how long the animation will run.
          duration: 4000,
          // A string indicating which easing function to use for the transition.
          easing: "swing",
          /**
           * A function to be called for each animated property of each animated element. 
           * This function provides an opportunity to
           *  modify the Tween object to change the value of the property before it is set.
           */
          step: function (value) {
            $(this).text(Math.ceil(value));
          }
        });
    });
  };
  
  let a = 0;
  $(window).scroll(function () {
    // The .offset() method allows us to retrieve the current position of an element  relative to the document
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
      a++;
      nCount(".rect > h1");
    }
  });
  
  

/* Sticky Navigation */

let navbar = $(".navbar"); //store in navbar variable

$(window).scroll(function(){
    // console.log(window.innerHeight) //windowHeight
    // console.log($(".section-2").offset().top); section-2 top
    let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky animate__animated animate__bounceInUp animate__slow");
    
    $(".section-2").addClass("animate__animated animate__fadeInLeft"); //section-2 animation


  } else {
    navbar.removeClass("sticky animate__animated animate__bounceInUp animate__slow");

    $(".section-2").removeClass("animate__animated animate__fadeInLeft");
  }
});


// section-1 animate

let section1 = $(".section-1");
$(window).scroll(function(){
  let oTop = $(".section-2").offset().top - window.innerHeight; 
   if($(window).scrollTop() > 200 & $(window).scrollTop() < oTop ){
      section1.addClass("animate__animated animate__fadeInRight");
     
   } 
});


// Purchase in section-2

let purchase = $(".purchase")
$(window).scroll(function(){
  let oTop = $(".purchase").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    purchase.addClass("animate__animated animate__zoomIn");
  }
  else{
    purchase.removeClass("animate__animated animate__zoomIn");
  }
})



// Jquery test

$(document).ready(function(){
  $("#animate1").addClass("animate__animated animate__bounceInRight");
  $("#animate2").addClass("animate__animated animate__bounceInLeft");
  $("#animate3").addClass("animate__animated animate__fadeInUp");
  
  
})


