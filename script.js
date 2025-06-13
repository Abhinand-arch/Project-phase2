window.onload = function() {
  window.onscroll = function() {
    document.querySelectorAll('.card, .item').forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add('animate');
      }
    });
  };
  window.onscroll();
};
