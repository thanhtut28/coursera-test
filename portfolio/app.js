gsap.from('.about-me', { autoAlpha: 0,
    
    duration:2,
    stagger: 0.2,
    x:'-100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.about-me',
        start: 'top center',
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
    
    duration:2,
    stagger: 0.2,
    y:'-100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.about-me',
        start: 'center center',
        end:'bottom center',
        
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.myself-text', { autoAlpha: 0,
    
    duration:2,
    stagger: 0.2,
    x:'100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.about-me',
        start: 'center center',
        end:'bottom center',
        
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.about-me .coding', { autoAlpha: 0,
    
    duration:2,
    stagger: 0.2,
    y:'100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.about-me',
        start: 'center center',
        end:'bottom center',
        
        toggleActions:'play reverse play reverse'
    }
});

gsap.from('.my', { autoAlpha: 0,
    
    duration:2,
    stagger: 0.2,
    x:'100%',
    opacity:0,
    scrollTrigger: {
        trigger: '.about-me',
        start: 'center center',
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
        trigger: '.my-skill',
        start: 'top bottom',
        end:'+=300 center',
      
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

gsap.from('footer img', { autoAlpha: 0,
    
    duration:1.3,
    stagger: 0.2,
    y:'100%',
    opacity:0,
    scrollTrigger: {
        trigger: 'footer',
        start: 'top center',
        end:'bottom center',
        
        
        toggleActions:'play reverse play reverse'
    }
});
