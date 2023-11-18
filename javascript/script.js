document.addEventListener('DOMContentLoaded', function () {
    const img = document.getElementById('imggif');
    const img2 = document.getElementById('img2');

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(img, {
        scrollTrigger: {
            trigger: "#sec1",  
            start: "top ",    
            end: "bottom top",  
            scrub: 1,              
        },
        x: "50vw",                    
        ease: "none",         
    });
    gsap.from(img2, {
        scrollTrigger: {
            trigger: "#sec2",  
            start: "top center",   
            end: "bottom bottom",   
            scrub: 1,             
        },
        x: "-70vw",                     
        ease: "none",            
    });
});
