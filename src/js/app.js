var observer = new IntersectionObserver(
  function(entries) {
    if (entries[0].isIntersecting === false)
      document.querySelector(".top").classList.add("visible");
    else document.querySelector(".top").classList.remove("visible");
  },
  { threshold: [1] }
);

observer.observe(document.querySelector(".home__main__title"));
