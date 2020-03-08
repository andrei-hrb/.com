/**
 * Show the Home button in nav
 */
const observer = new IntersectionObserver(
  function(entries) {
    if (entries[0].isIntersecting === false)
      document.querySelector(".top").classList.add("visible");
    else document.querySelector(".top").classList.remove("visible");
  },
  { threshold: [1] }
);

observer.observe(document.querySelector(".home__main__title"));

/**
 * Replace the work-elements-s backgrounds' with full
 * sized images after loading.
 */
window.addEventListener('load', () => {
  const workElementsBackgrounds = document.querySelectorAll('.work__element-background-s');
  workElementsBackgrounds.forEach(workElementBackground => {
    const image = new Image();
    image.src = workElementBackground.dataset.url;
    image.onload = () => {
      workElementBackground.style.backgroundImage = 'url(' + image.src + ')';
      setTimeout( () => {
        workElementBackground.style.transition = workElementBackground.dataset.speed;
      }, 500);
    };
  });
})

