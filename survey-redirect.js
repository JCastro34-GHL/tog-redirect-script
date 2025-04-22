<script>
function waitForElement(selector, maxRetries = 15, delay = 500) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const interval = setInterval(() => {
      const el = document.querySelector(selector);
      attempts++;
      if (el) {
        clearInterval(interval);
        console.log(`✅ Element '${selector}' found after ${attempts} tries.`);
        resolve(el);
      }
      if (attempts >= maxRetries) {
        clearInterval(interval);
        reject(`❌ Element '${selector}' NOT found after ${maxRetries} tries.`);
      }
    }, delay);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("🔥 Script loaded... searching for .c-form...");

  waitForElement(".c-form", 20, 500).then(formWrapper => {
    console.log("✅ .c-form found:", formWrapper);

    const submitBtn = formWrapper.querySelector("button");
    if (!submitBtn) {
      console.error("❌ Submit button NOT found.");
      return;
    }
    console.log("✅ Submit button found:", submitBtn);

    submitBtn.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("🖱️ Button clicked... collecting input data...");

      const inputs = formWrapper.querySelectorAll("input");
      const furInput = formWrapper.querySelector(".multiselect__input");

      const petName = inputs[0]?.value?.trim() || "(missing)";
      const breed = inputs[1]?.value?.trim() || "(missing)";
      const weightRaw = parseFloat(inputs[2]?.value) || 0;
      const furLength = furInput?.value?.trim() || "(missing)";

      console.log(`🐾 Pet Name: ${petName}`);
      console.log(`🐾 Breed: ${breed}`);
      console.log(`🐾 Weight (raw): ${weightRaw}`);
      console.log(`🐾 Fur Length: ${furLength}`);

      let weightCategory = "Unknown";
      if (weightRaw >= 0 && weightRaw <= 5) weightCategory = "0–5 lbs";
      else if (weightRaw <= 15) weightCategory = "6–15 lbs";
      else if (weightRaw <= 35) weightCategory = "16–35 lbs";
      else if (weightRaw <= 65) weightCategory = "36–65 lbs";
      else if (weightRaw <= 85) weightCategory = "66–85 lbs";
      else if (weightRaw > 85) weightCategory = "86+ lbs";

      console.log(`📦 Weight Category: ${weightCategory}`);

      alert(`✅ JS fired! Here's the data:\n
Pet: ${petName}
Breed: ${breed}
Weight: ${weightRaw} lbs (${weightCategory})
Fur: ${furLength}`);
    });
  }).catch(error => {
    console.error(error);
  });
});
</script>
