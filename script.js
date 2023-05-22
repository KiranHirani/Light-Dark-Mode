const toggleSwitch = document.querySelector('input[type="checkbox"]'),
  nav = document.getElementById("nav"),
  toggleIcon = document.getElementById("toggle-icon"),
  textBox = document.getElementById("text-box");

const THEMES = {
  DARK: "dark",
  LIGHT: "light",
};

// Dark or Light Images
function imageMode(color) {
  let image_names = ["proud_coder", "feeling_proud", "conceptual_idea"];
  for (let i = 0; i < image_names.length; i++) {
    document.getElementById(
      `image${i + 1}`
    ).src = `img/undraw_${image_names[i]}_${color}.svg`;
  }
}
function toggleDarkLightMode(isLight) {
  toggleSwitch.checked = !isLight;

  nav.style.backgroundColor = isLight
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = isLight
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = isLight ? "Light Mode" : "Dark Mode";
  isLight
    ? toggleIcon.children[1].classList.replace("fa-moon", "fa-sun")
    : toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  isLight ? imageMode(THEMES.LIGHT) : imageMode(THEMES.DARK);
}

function switchTheme(event, saved_theme = null) {
  let theme = saved_theme
    ? saved_theme
    : event.target.checked
    ? THEMES.DARK
    : THEMES.LIGHT;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  theme === THEMES.DARK
    ? toggleDarkLightMode(false)
    : toggleDarkLightMode(true);
}
// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage for theme -if not assign light as default
switchTheme(null, localStorage.getItem("theme") || THEMES.LIGHT);
