const toggle = document.querySelector('.toggle');
const description = document.querySelector('.description');

function clickHandler() {
  const hidden = description['hidden'];
  if (hidden) {
    description.removeAttribute('hidden', '');
    return toggle.textContent = '-';
  }
  description.setAttribute('hidden', '');
  toggle.textContent = '+';
}

toggle.addEventListener('click', clickHandler);