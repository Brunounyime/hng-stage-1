document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("main-nav");
  const openBtn = document.getElementById("nav-open-btn");
  const closeBtn = document.getElementById("nav-close-btn");

  if (!nav || !openBtn || !closeBtn) return;
  openBtn.addEventListener("click", () => {
    nav.classList.add("open");
    closeBtn.style.display = "block";
    openBtn.style.display = "none";
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", () => {
    nav.classList.remove("open");
    closeBtn.style.display = "none";
    openBtn.style.display = "flex";
    document.body.style.overflow = "";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      nav.classList.remove("open");
      closeBtn.style.display = "none";
      openBtn.style.display = "none";
      document.body.style.overflow = "";
    } else {
      openBtn.style.display = "flex";
    }
  });

  // Initial state
  if (window.innerWidth <= 700) {
    openBtn.style.display = "flex";
  } else {
    openBtn.style.display = "none";
  }
});
