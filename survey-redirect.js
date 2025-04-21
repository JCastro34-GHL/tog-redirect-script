document.addEventListener("DOMContentLoaded", function () {
  const interval = setInterval(() => {
    const multiselects = document.querySelectorAll(".multiselect__single");
    const furButtons = document.querySelectorAll("button");

    if (multiselects.length >= 1 && furButtons.length >= 1) {
      clearInterval(interval);
      console.log("✅ Found dropdown-ish fields + buttons");

      let selectedFur = "";

      // Track fur selection by button click
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

      // On final button click, trigger redirect
      document.body.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
          setTimeout(() => {
            const lastMultiselect = Array.from(multiselects).pop();
            const weightValue = lastMultiselect ? lastMultiselect.textContent.trim() : "";

            console.log("🧠 Weight:", weightValue);
            console.log("🧠 Fur:", selectedFur);

            let redirectUrl = "";

            switch (weightValue) {
              case "(0-5)":
                redirectUrl = "https://aztempleofgroom.com/xsmall-dogs";
                break;
              case "(6-15)":
                redirectUrl = (selectedFur === "short") ?
                  "https://aztempleofgroom.com/small-shortcoat" :
                  "https://aztempleofgroom.com/small-long-coat";
                break;
              case "(16-35)":
                redirectUrl = (selectedFur === "short") ?
                  "https://aztempleofgroom.com/medium-shortcoat" :
                  "https://aztempleofgroom.com/medium-longcoat";
                break;
              case "(36-65)":
                redirectUrl = (selectedFur === "short") ?
                  "https://aztempleofgroom.com/large-shortcoat" :
                  "https://aztempleofgroom.com/large-longcoat";
                break;
              case "(66-85)":
                redirectUrl = (selectedFur === "short") ?
                  "https://aztempleofgroom.com/xlarge-shortcoat" :
                  "https://aztempleofgroom.com/xlarge-longcoat";
                break;
              case "86+":
                redirectUrl = (selectedFur === "short") ?
                  "https://aztempleofgroom.com/giant-shortcoat" :
                  "https://aztempleofgroom.com/giant-longcoat";
                break;
              default:
                console.warn("⚠️ Could not match weight for redirect.");
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
