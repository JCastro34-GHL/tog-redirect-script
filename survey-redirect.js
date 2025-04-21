document.addEventListener("DOMContentLoaded", function () {
  const interval = setInterval(() => {
    const form = document.querySelector("form");
    const weightDropdown = document.querySelector('[name="contact.weight_range_(lbs)"]');
    const furDropdown = document.querySelector('[name="contact.fur_length"]');

    if (form && weightDropdown && furDropdown) {
      clearInterval(interval);
      alert("✅ Found form and dropdowns!");

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const weight = weightDropdown.value.trim();
        const fur = furDropdown.value.trim().toLowerCase();

        alert(`Submitted!\nWeight: ${weight}\nFur: ${fur}`);

        // Commented out redirects for now
        // window.location.href = "https://aztempleofgroom.com/";
      });
    } else {
      console.log("Waiting for form and dropdowns to load...");
    }
  }, 300);
});


