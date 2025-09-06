const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    // close other items
    faqItems.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".icon").textContent = "+";
      }
    });

    // toggle current item
    item.classList.toggle("active");

    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "–" : "+";
  });
});

const hamburger = document.querySelector(".humburger");
const mobileNav = document.querySelector(".mobile_nav");
const closeBtn = document.querySelector(".close_btn");

hamburger.addEventListener("click", () => {
  mobileNav.classList.add("active"); // open from left
});

closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("active"); // close to left
});
