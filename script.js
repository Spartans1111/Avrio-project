// accordion
document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".key-accordion-item");
    
    accordionItems.forEach((item) => {
      const title = item.querySelector(".key-accordion-title");
      title.addEventListener("click", () => {
        item.classList.toggle("active");
  
        const icon = title.querySelector("i");
        icon.classList.toggle("fa-chevron-down");
        icon.classList.toggle("fa-chevron-up");
  
        accordionItems.forEach((otherItems) => {
          if (otherItems !== item) {
            otherItems.classList.remove("active");
            const otherIcon = otherItems.querySelector(".key-accordion-title i");
            otherIcon.classList.remove("fa-chevron-up");
            otherIcon.classList.add("fa-chevron-down");
          }
        });
      });
    });
  });
  