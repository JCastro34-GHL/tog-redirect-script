document.addEventListener("DOMContentLoaded", function () {
  const interval = setInterval(() => {
    const weightDropdown = document.querySelector('[name="contact.weight_range_(lbs)"]');
    const furDropdown = document.querySelector('[name="contact.fur_length"]');
    const buttons = document.querySelectorAll("button");

    // Wait for everything to be ready
    if (weightDropdown && furDropdown && buttons.length) {
      clearInterval(interval);

      // Attach to ALL buttons just in case GHL renders the final submit button dynamically
      buttons.forEach(button => {
        button.addEventListener("click", function () {
          const weight = weightDropdown.value.trim();
          const fur = furDropdown.value.trim().toLowerCase();

          console.log("Button clicked ✅");
          console.log("Weight selected:", weight);
          console.log("Fur selected:", fur);

          let redirectUrl = "";

          if (!weight) {
            alert("Please select your dog's weight.");
            return;
          }

          if (weight !== "(0-5)" && !fur) {
            alert("Please select your dog's fur length.");
            return;
          }

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
              alert("Unrecognized weight range: " + weight);
              return;
          }

          setTimeout(() => {
            window.location.href = redirectUrl;
          }, 500);
        });
      });
    }
  }, 300);
});
