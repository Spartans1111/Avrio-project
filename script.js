// accordion
// document.addEventListener("DOMContentLoaded", function () {
//     const accordionItems = document.querySelectorAll(".key-accordion-item");
    
//     accordionItems.forEach((item) => {
//       const title = item.querySelector(".key-accordion-title");
//       title.addEventListener("click", () => {
//         item.classList.toggle("active");
  
//         const icon = title.querySelector("i");
//         icon.classList.toggle("fa-chevron-down");
//         icon.classList.toggle("fa-chevron-up");
  
//         accordionItems.forEach((otherItems) => {
//           if (otherItems !== item) {
//             otherItems.classList.remove("active");
//             const otherIcon = otherItems.querySelector(".key-accordion-title i");
//             otherIcon.classList.remove("fa-chevron-up");
//             otherIcon.classList.add("fa-chevron-down");
//           }
//         });
//       });
//     });
//   });
  

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".key-accordion-item");

  accordionItems.forEach((item) => {
      const title = item.querySelector(".key-accordion-title");
      title.addEventListener("click", () => {
          const content = item.querySelector(".key-accordion-content");
          const isActive = item.classList.contains("active");

          accordionItems.forEach((otherItem) => {
              if (otherItem !== item) {
                  otherItem.classList.remove("active");
                  const otherContent = otherItem.querySelector(".key-accordion-content");
                  otherContent.style.maxHeight = null;
                  const otherIcon = otherItem.querySelector(".key-accordion-title i");
                  otherIcon.classList.remove("fa-chevron-up");
                  otherIcon.classList.add("fa-chevron-down");
              }
          });

          item.classList.toggle("active");
          if (isActive) {
              content.style.maxHeight = null;
              const icon = title.querySelector("i");
              icon.classList.remove("fa-chevron-up");
              icon.classList.add("fa-chevron-down");
          } else {
              content.style.maxHeight = content.scrollHeight + "px";
              const icon = title.querySelector("i");
              icon.classList.remove("fa-chevron-down");
              icon.classList.add("fa-chevron-up");
          }
      });
  });
});







  // loader
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  });
  



//   tab section - mylearning page
const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.content');
const tabIndicator = document.querySelector('.tab-indicator');

// Function to handle tab switching
tabItems.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and content sections
    tabItems.forEach(item => item.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active-content'));

    // Add active class to the clicked tab and content
    tab.classList.add('active');
    tabContents[index].classList.add('active-content');

    // Move the tab indicator to the clicked tab
    const tabRect = tab.getBoundingClientRect();
    const containerRect = tab.parentElement.getBoundingClientRect();
    const tabWidth = tabRect.width;
    const tabLeft = tabRect.left - containerRect.left;

    tabIndicator.style.width = `${tabWidth}px`;
    tabIndicator.style.transform = `translateX(${tabLeft}px)`;
  });
});

// Set the initial position of the tab indicator
document.addEventListener('DOMContentLoaded', () => {
  const activeTab = document.querySelector('.tab-item.active');
  if (activeTab) {
    const tabRect = activeTab.getBoundingClientRect();
    const containerRect = activeTab.parentElement.getBoundingClientRect();
    const tabWidth = tabRect.width;
    const tabLeft = tabRect.left - containerRect.left;

    tabIndicator.style.width = `${tabWidth}px`;
    tabIndicator.style.transform = `translateX(${tabLeft}px)`;
  }
});
