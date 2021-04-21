const btnMusic = document.getElementById('button-music');
const icoPlay = '<i class="fas fa-play"></i>';
const icoPause = '<i class="fas fa-pause"></i>';

// bisa dipecah
const addClass = (el, newClass) => {
  el.classList.add(newClass);
};

const removeClass = (el, className) => {
  el.classList.remove(className);
};

const toggleIcon = () => {
  if (btnMusic.classList.contains('play')) {
    btnMusic.innerHTML = icoPlay;
    removeClass(btnMusic, 'play');
    return;
  }

  btnMusic.innerHTML = icoPause;
  addClass(btnMusic, 'play');
  return;
};

if (window !== undefined) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
      if (btnMusic.classList.contains('bg-white')) {
        removeClass(btnMusic, 'bg-white');
        removeClass(btnMusic, 'text-green-dark');
        addClass(btnMusic, 'bg-green-dark');
        addClass(btnMusic, 'text-white');
      }
      return;
    }

    removeClass(btnMusic, 'bg-green-dark');
    removeClass(btnMusic, 'text-white');
    addClass(btnMusic, 'bg-white');
    addClass(btnMusic, 'text-green-dark');
  });
}

btnMusic.addEventListener('click', toggleIcon);