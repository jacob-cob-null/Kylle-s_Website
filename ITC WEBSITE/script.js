gsap.registerPlugin(ScrollTrigger);


let typeSplitHeading = new SplitType('[heading]', {
  types: 'lines, words, chars',
  tagName: 'span'
});

gsap.from('[heading] .char', {
  y: '110%',
  opacity: 0,
  duration: 0.15,
  ease: 'power2',
  stagger: 0.1,

  scrollTrigger: {
    trigger: '[heading]',
    start: 'top 60%',           // Start the animation when the top of the heading is 60% from the top of the viewport
    end: 'bottom 40%',          // End the animation when the bottom of the heading reaches 40% from the top of the viewport
    scrub: false,
    once: true,
  }
});

gsap.from('[move]', {
  y: '100%',
  opacity: 0,
  duration: 0.15,
  ease: 'power2',
  stagger: 0.1,
  scrollTrigger: {
    trigger: '[move]',
    start: 'top 80%',           // Start when the top of the element is 60% from the top of the viewport
    end: 'bottom 40%',          // End when the bottom of the element reaches 40% from the top of the viewport
    once: true
  }
});