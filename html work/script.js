document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("surpriseForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Default ফর্ম সাবমিশন বন্ধ

    const nameInput = document.getElementById("nickname");
    const name = nameInput.value.trim();

    if (name === "") {
      alert("Please enter your name before continuing!");
    } else {
      // অন্য পেজে নিয়ে যাওয়া
      window.location.href = "surprise.html?name=" + encodeURIComponent(name);
    }
  });
});
