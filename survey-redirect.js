console.log("🔥 JS loaded... searching for .c-form...");

let attempt = 0;
const maxAttempts = 15;

const waitForForm = setInterval(() => {
  const formWrapper = document.querySelector(".c-form");

  if (formWrapper) {
    console.log("✅ .c-form found: ", formWrapper);

    clearInterval(waitForForm);

    const submitButton = formWrapper.querySelector("button[type='submit']");
    if (!submitButton) return console.error("❌ Submit button not found.");

    console.log("✅ Submit button found:", submitButton);

    submitButton.addEventListener("click", (e) => {
      console.log("▶️ Button clicked... collecting input data...");

      let petName = "(missing)";
      let breed = "(missing)";
      let weight = 0;
      let weightCategory = "(unknown)";
      let furLength = "(missing)";

      const inputs = formWrapper.querySelectorAll("input");

      inputs.forEach((input) => {
        const placeholder = input.getAttribute("placeholder")?.toLowerCase();

        if (placeholder?.includes("pet name")) petName = input.value.trim();
        else if (placeholder?.includes("breed")) breed = input.value.trim();
        else if (placeholder?.includes("weight")) {
          weight = parseInt(input.value.trim()) || 0;

          if (weight <= 5) weightCategory = "0–5 lbs";
          else if (weight <= 15) weightCategory = "6–15 lbs";
          else if (weight <= 35) weightCategory = "16–35 lbs";
          else if (weight <= 65) weightCategory = "36–65 lbs";
          else if (weight <= 85) weightCategory = "66–85 lbs";
          else weightCategory = "86+ lbs";
        }
      });

      // Handle the fur length dropdown (multiselect-based)
      const multiselect = formWrapper.querySelector(".multiselect__input");
      const furState = multiselect?.getAttribute("aria-activedescendant");

      if (furState === "null-0") furLength = "Short";
      else if (furState === "null-1") furLength = "Long";
      else console.warn(`⚠️ Unexpected aria-activedescendant: ${furState}`);

      console.log("🐾 Pet Name:", petName);
      console.log("🐶 Breed:", breed);
      console.log("⚖️ Weight (raw):", weight);
      console.log("💈 Fur Length:", furLength);
      console.log("📊 Weight Category:", weightCategory);

      alert(`✅ JS fired! Here's the data:
Pet: ${petName}
Breed: ${breed}
Weight: ${weight} lbs (${weightCategory})
Fur: ${furLength}`);
    });
  } else {
    attempt++;
    console.log(`⏳ Waiting for .c-form to load... (${attempt}/${maxAttempts})`);
    if (attempt >= maxAttempts) {
      clearInterval(waitForForm);
      console.error("❌ Element '.c-form' not found after 15 tries.");
    }
  }
}, 500);
