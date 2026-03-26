document.addEventListener("DOMContentLoaded", function () {
  const masthead = document.querySelector(".masthead");
  if (!masthead) return;

  function updateHeader() {
    const trigger = window.innerHeight * 0.30;
    if (window.scrollY > trigger) {
      masthead.classList.add("scrolled");
    } else {
      masthead.classList.remove("scrolled");
    }
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader);
  window.addEventListener("resize", updateHeader);
});
