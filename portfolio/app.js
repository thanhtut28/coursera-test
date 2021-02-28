gsap.from('header', { autoAlpha: 0,
    
    duration:1,
    stagger: 0.2,
    x:'100%',
    opacity:0,
    scrollTrigger: {
        trigger: 'header',
      
        end:'bottom top',
        
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.navbar-nav', { autoAlpha: 0,
    delay:0.5,
    duration:1,
    stagger: 0.2,
    x:'-100%',
    opacity:0,
    scrollTrigger: {
        trigger: 'header',
      
        end:'bottom top',
    
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.profile', { autoAlpha: 0,
    delay:0.8,
    duration:1,
    stagger: 0.2,
    y:'-100%',
    opacity:0,
    scrollTrigger: {
        trigger: 'header',
      
        end:'bottom top',
     
        toggleActions:'play reverse play reverse'
    }
});


gsap.from('.name-2', { autoAlpha: 0,
    delay:1,
    duration:1,
    stagger: 0.2,
    y:'100%',
    opacity:0,
    scrollTrigger: {
        trigger: 'header',
      
        end:'bottom top',

        toggleActions:'play reverse play reverse'
    }
});


gsap.from('.job-2', { autoAlpha: 0,
    delay:2,
    duration:1,
    stagger: 0.2,
    
    opacity:0,
    scrollTrigger: {
        trigger: 'header',
      
        end:'bottom top',

        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.name', { autoAlpha: 0,
    delay:1.2,
    duration:1,
    stagger: 0.2,
    x:'-100%',
    opacity:0,
    scrollTrigger: {
        trigger: 'header',
      
        end:'bottom top',
  
        toggleActions:'play reverse play reverse'
    }
});


gsap.from('.job', { autoAlpha: 0,
    delay:1.5,
    duration:1,
    stagger: 0.2,
    x:'100%',
    opacity:0,
    scrollTrigger: {
        trigger: 'header',
      
        end:'bottom top',
   
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.design', { autoAlpha: 0,
    delay:1.7,
    duration:1,
    stagger: 0.2,
    x:'-100%',
    opacity:0,
    scrollTrigger: {
        trigger: 'header',
      
        end:'bottom top',

        toggleActions:'play reverse play reverse'
    }
});


gsap.from('.btn-cv', { autoAlpha: 0,
    delay:1.7,
    duration:1,
    stagger: 0.2,
    y:'-100%',
    opacity:0,
    scrollTrigger: {
        trigger: 'header',
      
        end:'bottom top',
    
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.icons', { autoAlpha: 0,
    delay:1.2,
    duration:1,
    stagger: 0.2,
    x:'-100%',
    opacity:0,
    scrollTrigger: {
        trigger: 'header',
      
        end:'bottom top',
  
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('header .coding', { autoAlpha: 0,
    delay:3,
    duration:1,
    stagger: 0.2,
   
    opacity:0,
    scrollTrigger: {
        trigger: 'header',
      
        end:'bottom top',
 
        toggleActions:'play reverse play reverse'
    }
});

// header animation







//about animation




gsap.from('.about-me', { autoAlpha: 0,
    
    duration:1,
    stagger: 0.2,
    x:'-100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.about-me',
        start: 'top bottom',
        end:'bottom center',
       
        toggleActions:'play reverse play reverse'
    }
});

// gsap.to('header', { autoAlpha: 0,
    
//     duration:5,
//     stagger: 0.2,
//     y:'-100%',
//     opacity:0,
//     scrollTrigger: {
//         trigger: 'header',
//         start: 'bottom center',
        
//         toggleActions:'play reverse play reverse'
//     }
// });

gsap.from('.about-text', { autoAlpha: 0,
    
    duration:1,
    stagger: 0.2,
    x:'100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.about-text',
        start: 'center bottom',
        
        
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.myself-text', { autoAlpha: 0,
    
    duration:1,
    stagger: 0.2,
    x:'100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.about-me',
        start: 'center bottom',
        end:'bottom center',
        
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.about-me .coding', { autoAlpha: 0,
    
    duration:1,
    stagger: 0.2,
    y:'100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.about-me',
        start: 'center bottom',
        end:'bottom center',
        
        toggleActions:'play reverse play reverse'
    }
});






gsap.from('.my', { autoAlpha: 0,
    
    duration:1,
    stagger: 0.2,
    y:'100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.about-me',
        start: 'center bottom',
        end:'bottom center',
      
        toggleActions:'play reverse play reverse'
    }
});

//about animation

// skill animation

gsap.from('.skill', { autoAlpha: 0,
    
    duration:1.3,
    stagger: 0.2,
    x:'-100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.skill',
        start: 'top+=200 bottom',
        end:'bottom center',
      
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.my-skill', { autoAlpha: 0,
    
    duration:1.3,
    stagger: 0.2,
    x:'-100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.skill',
        start: 'top center',
        
      
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.lorem', { autoAlpha: 0,
    
    duration:1.3,
    stagger: 0.2,
    y:'-100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.skill',
        start: '+=200 center',
        end:'bottom center',
      
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.skill-text', { autoAlpha: 0,
    
    duration:1.3,
    stagger: 0.2,
    x:'-100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.skill',
        start: '+=300 center',
        end:'bottom center',
        
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.bar', { autoAlpha: 0,
    
    duration:1.3,
    stagger: 0.2,
    x:'100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.skill',
        start: '+=300 center',
        end:'bottom center',
        
        toggleActions:'play reverse play reverse'
    }
});

//skill animation

//services animation

gsap.from('.services', { autoAlpha: 0,
    
    duration:1.3,
    stagger: 0.2,
    x:'-100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.services',
        start: 'top+=200 bottom',
        end:'bottom center',
        
        
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.services-text', { autoAlpha: 0,
    
    duration:1.3,
    stagger: 0.2,
    x:'100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.services-text',
        start: 'top center',
        end:'bottom top',
        
        
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.card-1', { autoAlpha: 0,
    
    duration:1.3,
    stagger: 0.2,
    x:'100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.card-1',
        start: 'top bottom',
        end:'bottom top',
        
        
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.card-2', { autoAlpha: 0,
    
    duration:1.3,
    stagger: 0.2,
    x:'-100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.card-2',
        start: 'top bottom',
        end:'bottom top',
        
        
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.card-3', { autoAlpha: 0,
    
    duration:1.3,
    stagger: 0.2,
    x:'100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.card-3',
        start: 'top bottom',
        end:'bottom top',
        
        
        toggleActions:'play reverse play reverse'
    }
});


// services animation




// footer animation
gsap.from('footer img', { autoAlpha: 0,
    
    duration:1.3,
    stagger: 0.2,
    x:'-100%',
    opacity:0,
    scrollTrigger: {
        trigger: 'footer',
        start: 'top center',
        end:'bottom center',
       
        
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.places', { autoAlpha: 0,
    
    duration:1.3,
    stagger: 0.2,
    x:'80%',
    opacity:0,
    scrollTrigger: {
        trigger: 'footer',
        start: 'top center',
       
        
        toggleActions:'play reverse play reverse'
    }
});


//night mode 

$(document).ready(function () {
    // $('.checkbox').on('click', () => {
    //     if($('.checkbox').prop('checked') == true) {
    //         $('body').css('backgroundColor',' red')
    //     }
    //     else {
    //         $('body').css('backgroundColor','green')
    //     }
    // })
  

    $('.checkbox').on('click', () => {
        $('body').toggleClass('night-mode');
        alert('You clicked the Day-Night shift toggler')
    })

    
})
