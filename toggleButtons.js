const toggle = document.querySelector('.toggle');
const description = document.querySelector('.hideShow');

const solutionButton = document.querySelector('button#solution');
const solutionDiv = document.querySelector('div#solution');

// const toggleS = document.querySelectorAll('.toggle');
// const descriptionS = document.querySelectorAll('.hideShow');

// function clickHandler(event) {
//   const id = event.target.id;
//   console.log(id);
//   // check if the next hideShow element has ['hidden'] attribute
//   console.log(descriptionS.forEach((desc) => desc));
//   // console.log(Array.from(descriptionS)[0]);
// }

// toggleS.forEach((t) => t.addEventListener('click', clickHandler));

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

function solutionClickHandler() {
    const hidden = solutionDiv['hidden'];
    if (hidden) {
        solutionDiv.removeAttribute('hidden', '');
        return solutionButton.textContent = '-';
      }
    solutionDiv.setAttribute('hidden', '');
    solutionButton.textContent = '+';
}

solutionButton.addEventListener('click', solutionClickHandler);