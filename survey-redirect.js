document.addEventListener("DOMContentLoaded", function () {
  const interval = setInterval(() => {
    const multiselects = document.querySelectorAll(".multiselect__single");
    const furButtons = document.querySelectorAll("button");

    if (multiselects.length >= 2 && furButtons.length >= 1) {
      clearInterval(interval);
      console.log("✅ Found dropdown text containers and fur buttons");

      let selectedFur = "";

      // Listen for fur button clicks
      furButtons.forEach(button => {
        button.addEventListener("click", () => {
          const label = button.textContent.trim().toLowerCase();
          if (label.includes("short")) selectedFur = "short";
          else if (label.includes("long")) selectedFur = "long";
        });
      });

      document.body.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
          setTimeout(() => {
            const weightValue = multiselects[0].textContent.trim();
            const fur = selectedFur;

            console.log("🧠 Weight:", weightValue);
            console.log("🧠 Fur:", fur);

            let redirectUrl = "";

            switch (weightValue) {
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
                alert("Weight or fur selection missing.");
                return;
            }

            console.log("🚀 Redirecting to:", redirectUrl);
            window.location.href = redirectUrl;
          }, 200);
        }
      });
    } else {
      console.log("⏳ Waiting for multiselect values to appear...");
    }
  }, 300);
});
