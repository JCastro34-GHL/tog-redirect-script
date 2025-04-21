document.addEventListener("DOMContentLoaded", function () {
  const interval = setInterval(() => {
    const weightEl = document.querySelector(".form-builder--item.field-container:nth-of-type(3) .multiselect__single");
    const furButtons = document.querySelectorAll("button");

    if (weightEl && furButtons.length) {
      clearInterval(interval);
      console.log("✅ Found weight and buttons");

      let selectedFur = "";

      // Listen for fur button clicks
      furButtons.forEach(button => {
        button.addEventListener("click", () => {
          const label = button.textContent.trim().toLowerCase();
          if (label.includes("short")) {
            selectedFur = "short";
          } else if (label.includes("long")) {
            selectedFur = "long";
          }
        });
      });

      // Watch for final button click to redirect
      document.body.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
          setTimeout(() => {
            const weight = weightEl.textContent.trim();
            const fur = selectedFur;

            console.log("🧠 Weight:", weight);
            console.log("🧠 Fur:", fur);

            let redirectUrl = "";

            switch (weight) {
              case "(0-5)":
                redirectUrl = "https://aztempleofgroom.com/xsmall-dogs";
                break;
              case "(6-15)":
                redirectUrl = (fur === "short") ?
                  "https://aztempleofgroom.com/small-shortcoat" :
                  "https://aztempleofgroom.com/small-long-coat";
                break;
              case "(16-35)":
                redirectUrl = (fur === "short") ?
                  "https://aztempleofgroom.com/medium-shortcoat" :
                  "https://aztempleofgroom.com/medium-longcoat";
                break;
              case "(36-65)":
                redirectUrl = (fur === "short") ?
                  "https://aztempleofgroom.com/large-shortcoat" :
                  "https://aztempleofgroom.com/large-longcoat";
                break;
              case "(66-85)":
                redirectUrl = (fur === "short") ?
                  "https://aztempleofgroom.com/xlarge-shortcoat" :
                  "https://aztempleofgroom.com/xlarge-longcoat";
                break;
              case "86+":
                redirectUrl = (fur === "short") ?
                  "https://aztempleofgroom.com/giant-shortcoat" :
                  "https://aztempleofgroom.com/giant-longcoat";
                break;
              default:
                alert("⚠️ Could not match weight or fur.");
                return;
            }

            if (redirectUrl) {
              console.log("🚀 Redirecting to:", redirectUrl);
              window.location.href = redirectUrl;
            }
          }, 200);
        }
      });
    } else {
      console.log("⏳ Waiting for custom dropdowns to load...");
    }
  }, 300);
});
