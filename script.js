let tabpanels = document.querySelectorAll('[role="tabpanel"]');
let tabButtons = document.querySelectorAll('[role="tab"]');

function clickHandler(event) {
  const { id } = event.target;
  // Set default values for tabpanels and tabButtons
  tabpanels.forEach((panel) => {
    panel.setAttribute('hidden', '');
  });
  tabButtons.forEach((button) => {
    button.setAttribute('aria-selected', 'false');
  });
  // grab active tabpanel and remove hidden attribute
  tabpanels.forEach((panel) => {
    if (id === panel.id) {
      panel.removeAttribute('hidden', '');
    }
  });
  // grab active button and change aria-selected attribute to true
  tabButtons.forEach((button) => {
    if (id === button.id) {
      button.setAttribute('aria-selected', 'true');
    }
  });
}

tabButtons.forEach((button) => button.addEventListener('click', clickHandler));

// insert screen recording from C:\Users\Réka\Videos\Captures
// cut screen recording https://www.youtube.com/watch?v=154r4ZgxXTg
// create gif 
