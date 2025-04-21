document.addEventListener("DOMContentLoaded", function () {
  const interval = setInterval(() => {
    const weightEl = document.querySelectorAll(".form-builder--item.field-container")[2]?.querySelector(".multiselect__single");
    const furEl = document.querySelectorAll(".form-builder--item.field-container")[3]?.querySelector(".multiselect__single");

    if (weightEl && furEl) {
      clearInterval(interval);
      console.log("✅ Found custom-rendered dropdowns");

      document.body.addEventListener("click", function (e) {
        const isButton = e.target && e.target.tagName === "BUTTON";

        if (isButton) {
          setTimeout(() => {
            const weightValue = weightEl.textContent.trim();
            const furValue = furEl.textContent.trim().toLowerCase();

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
                alert("⚠️ Could not find matching redirect.");
                return;
            }

            console.log("🚀 Redirecting to:", redirectUrl);
            window.location.href = redirectUrl;
          }, 150);
        }
      });
    } else {
      console.log("⏳ Waiting for custom dropdowns to load...");
    }
  }, 300);
});
