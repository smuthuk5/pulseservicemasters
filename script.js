document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const display = button.nextElementSibling;
      const withWarranty = button.getAttribute("data-with");
      const withoutWarranty = button.getAttribute("data-without");
      if (display.textContent.includes(withWarranty) || display.textContent.includes(withoutWarranty)) {
        display.textContent = "Click to view price";
      } else {
        display.textContent = `With Warranty: ${withWarranty} | Without: ${withoutWarranty}`;
      }
    });
  });
});
