window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
window.addEventListener("load", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var isMobile = window.matchMedia(
    "only screen and (max-width: 768px)"
  ).matches;
  if (isMobile) {
    var navMenu = document.getElementById("nav-menu");
    if (!navMenu.style.transform) {
      navMenu.style.transform = "translateY(-100%) scaleY(0)";
      navMenu.style.transition = "transform 0.3s"; // إضافة ترانزيشن للتحرك
    }

    // تحديد لون النص في قائمة الناف بار
    var navLinks = document.querySelectorAll("#nav-menu ul li a");
    navLinks.forEach(function (link) {
      link.style.color = "black"; // تحديد لون النص
    });
  }
});

document
  .getElementById("hamburger-icon")
  .addEventListener("click", function () {
    var navMenu = document.getElementById("nav-menu");
    if (navMenu.style.transform === "translateY(-100%) scaleY(0)") {
      navMenu.style.transform = "translateY(0) scaleY(1)";
    } else {
      navMenu.style.transform = "translateY(-100%) scaleY(0)";
    }
  });

window.addEventListener("scroll", function () {
  const scrollToTopButton = document.getElementById("scrollToTop");
  if (window.scrollY > 400) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

// إضافة حدث عند النقر على الأيقونة للعودة إلى الأعلى
document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
