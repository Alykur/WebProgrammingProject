document.addEventListener('DOMContentLoaded', () => {
  const testimonies = document.querySelectorAll('.testimony');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let index = 0;
  let interval = null;

  function show(index) {
    testimonies.forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
  }

  function next() {
    index = (index + 1) % testimonies.length;
    show(index);
  }

  function prev() {
    index = (index - 1 + testimonies.length) % testimonies.length;
    show(index);
  }
  
  function reset() {
    clearInterval(interval);
    interval = setInterval(next, 4000);
  }


  nextButton.addEventListener('click', () => {
    next();
    reset();
  });

  prevButton.addEventListener('click', () => {
    prev();
    reset();
  });

  show(index);
  interval = setInterval(next, 3000);
});