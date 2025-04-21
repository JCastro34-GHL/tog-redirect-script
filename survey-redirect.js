document.addEventListener("DOMContentLoaded", function () {
  const waitForFields = setInterval(() => {
    const weight = document.querySelector('[name="weight_range_(lbs)"]');
    const fur = document.querySelector('[name="fur_length"]');

    if (weight && fur) {
      clearInterval(waitForFields);
      console.log("✅ Found weight and fur fields");

      // Attach a global click handler for any button
      document.body.addEventListener("click", function (e) {
        const isFinalStepButton = e.target && e.target.tagName === "BUTTON";

        if (isFinalStepButton) {
          setTimeout(() => {
            const weightValue = weight.value.trim();
            const furValue = fur.value.trim().toLowerCase();

            console.log("🧠 Weight:", weightValue);
            console.log("🧠 Fur:", furValue);

            let redirectUrl = "";

            switch (weightValue) {
              case "(0-5)":
                redirectUrl = "https://aztempleofgroom.com/xsmall-dogs";
                break;
              case "(6-15)":
                redirectUrl = (furValue === "short") ?
                  "https://aztempleofgroom.com/small-shortcoat" :
                  "https://aztempleofgroom.com/small-long-coat";
                break;
              case "(16-35)":
                redirectUrl = (furValue === "short") ?
                  "https://aztempleofgroom.com/medium-shortcoat" :
                  "https://aztempleofgroom.com/medium-longcoat";
                break;
              case "(36-65)":
                redirectUrl = (furValue === "short") ?
                  "https://aztempleofgroom.com/large-shortcoat" :
                  "https://aztempleofgroom.com/large-longcoat";
                break;
              case "(66-85)":
                redirectUrl = (furValue === "short") ?
                  "https://aztempleofgroom.com/xlarge-shortcoat" :
                  "https://aztempleofgroom.com/xlarge-longcoat";
                break;
              case "86+":
                redirectUrl = (furValue === "short") ?
                  "https://aztempleofgroom.com/giant-shortcoat" :
                  "https://aztempleofgroom.com/giant-longcoat";
                break;
              default:
                console.warn("⚠️ No matching redirect. Weight:", weightValue);
                return;
            }

            console.log("🚀 Redirecting to:", redirectUrl);
            window.location.href = redirectUrl;
          }, 100); // slight delay to allow DOM to update
        }
      });
    }
  }, 300);
});

