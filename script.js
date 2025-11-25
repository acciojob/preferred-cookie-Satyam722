// Helper: get cookie by name
function getCookie(name) {
  const cookies = document.cookie.split(";").map(c => c.trim());
  for (let c of cookies) {
    if (c.startsWith(name + "=")) {
      return c.split("=")[1];
    }
  }
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");
  const submitBtn = document.querySelector("input[type='submit']");

  // ⭐ Apply saved cookies on load
  const savedSize = getCookie("fontsize");
  const savedColor = getCookie("fontcolor");

  if (savedSize) {
    document.body.style.fontSize = savedSize + "px";
    fontSizeInput.value = savedSize;
  }

  if (savedColor) {
    document.body.style.color = savedColor;
    fontColorInput.value = savedColor;
  }

  // ⭐ Save new values on submit
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const size = fontSizeInput.value;
    const color = fontColorInput.value;

    // save cookies
    document.cookie = `fontsize=${size}`;
    document.cookie = `fontcolor=${color}`;

    // apply styles
    document.body.style.fontSize = size + "px";
    document.body.style.color = color;
  });
});
