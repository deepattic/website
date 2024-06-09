const DARK_BUTTON = document.getElementById('darkb');
const LIGHT_BUTTON = document.getElementById('lightb');
const body = document.body;

const theme = localStorage.getItem('theme')
if (theme) {
  body.classList.remove("dark", "light");
  body.classList.add(theme);
  // body.classList.replace('dark', theme);
}

DARK_BUTTON.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};
LIGHT_BUTTON.onclick = () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
};


