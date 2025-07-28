// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');
  const btn = document.querySelector('.btn');
  
  // Initial animation on load
  gsap.from('.title', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power3.out'
  });
  
  gsap.from('.box', {
    duration: 1.5,
    scale: 0.5,
    rotation: 180,
    opacity: 0,
    ease: 'elastic.out(1, 0.5)',
    delay: 0.5
  });
  
  // Button click animation
  btn.addEventListener('click', () => {
    gsap.to('.box', {
      duration: 1,
      x: 100,
      rotation: 360,
      borderRadius: '50%',
      ease: 'back.out(1.7)'
    });
    
    gsap.to('.box', {
      duration: 1,
      x: 0,
      rotation: 0,
      borderRadius: '8px',
      ease: 'power2.inOut',
      delay: 1
    });
  });
});
